import fs from "node:fs"
import path from "node:path"

function getWebpDimensions(filePath) {
  const buffer = fs.readFileSync(filePath)

  if (
    buffer.toString("ascii", 0, 4) !== "RIFF" ||
    buffer.toString("ascii", 8, 12) !== "WEBP"
  ) {
    throw new Error("Arquivo WebP inválido")
  }

  let offset = 12

  while (offset + 8 <= buffer.length) {
    const chunkType = buffer.toString("ascii", offset, offset + 4)
    const chunkSize = buffer.readUInt32LE(offset + 4)
    const dataOffset = offset + 8

    // VP8 — lossy
    if (chunkType === "VP8 ") {
      const width = buffer.readUInt16LE(dataOffset + 6) & 0x3fff
      const height = buffer.readUInt16LE(dataOffset + 8) & 0x3fff

      return { width, height }
    }

    // VP8L — lossless
    if (chunkType === "VP8L") {
      const b0 = buffer[dataOffset + 1]
      const b1 = buffer[dataOffset + 2]
      const b2 = buffer[dataOffset + 3]
      const b3 = buffer[dataOffset + 4]

      const width = 1 + (b0 | ((b1 & 0x3f) << 8))

      const height = 1 + ((b1 >> 6) | (b2 << 2) | ((b3 & 0x0f) << 10))

      return { width, height }
    }

    // VP8X — extended
    if (chunkType === "VP8X") {
      const width =
        1 +
        (buffer[dataOffset + 4] |
          (buffer[dataOffset + 5] << 8) |
          (buffer[dataOffset + 6] << 16))

      const height =
        1 +
        (buffer[dataOffset + 7] |
          (buffer[dataOffset + 8] << 8) |
          (buffer[dataOffset + 9] << 16))

      return { width, height }
    }

    offset = dataOffset + chunkSize + (chunkSize % 2)
  }

  throw new Error("Dimensões não encontradas")
}

const currentPath = process.cwd()

const files = fs
  .readdirSync(currentPath)
  .filter((file) => file.toLowerCase().endsWith(".webp"))

const result = {}

for (const file of files) {
  try {
    result[file] = getWebpDimensions(path.join(currentPath, file))
  } catch (error) {
    console.error(`Erro em ${file}: ${error.message}`)
  }
}

console.log(JSON.stringify(result, null, 2))
