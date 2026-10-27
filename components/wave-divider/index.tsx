import { IWaveSettings, IWaveSettingsNormalized } from "./types"
import { generateCurvesPath } from "./generate-curves-path"

function WaveDivider({
  waveSettings = {},
  className = "",
}: {
  waveSettings?: IWaveSettings
  className?: string
}) {
  className = `wave-divider ${className}`.trim()

  waveSettings = normalizeWaveDivider(waveSettings)

  const { points, backgroundColor, shapeColor, softStart, softEnd, curveType } =
    waveSettings as IWaveSettingsNormalized

  if (softStart) {
    points.unshift(50)
  }
  if (softEnd) {
    points.push(50)
  }

  const path = generateCurvesPath(points, curveType)

  function normalizeWaveDivider(
    waveSettings: IWaveSettings
  ): IWaveSettingsNormalized {
    const defaultWaveSettings = {
      points: 10,
      min: 30,
      max: 70,
      backgroundColor: "#ccc",
      shapeColor: "#333",
      softStart: true,
      softEnd: true,
      curveType: "hermite",
    }

    const waveSettingsNormalized = { ...defaultWaveSettings, ...waveSettings }

    if (typeof waveSettingsNormalized.points === "number") {
      waveSettingsNormalized.points = Array.from(
        {
          length: waveSettingsNormalized.points,
        },
        () =>
          randomBetween(waveSettingsNormalized.min, waveSettingsNormalized.max)
      )
    }

    return waveSettingsNormalized as IWaveSettingsNormalized
  }

  return (
    <div
      data-slot="wave-divider"
      className={className}
      style={{ backgroundColor }}
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 100 100"
        width="100%"
        height="100%"
        preserveAspectRatio="none"
      >
        <path d={path} fill={shapeColor} />
      </svg>
    </div>
  )
}

function randomBetween(min: number, max: number): number {
  const range = max + 1 - min

  return min + Math.floor(Math.random() * range)
}

export default WaveDivider
