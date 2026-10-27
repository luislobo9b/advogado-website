import { CurveType, FourNumbers } from "./types"

function generateCurvesPath(points: number[], curveType: CurveType): string {
  const widthPerPoint = 100 / (points.length - 1)
  const path = [`M0, ${points[0]}`]

  for (let i = 1; i < points.length; i++) {
    const [x1, x2] = [widthPerPoint * (i - 1), widthPerPoint * i],
      [y1, y2] = [points[i - 1], points[i]],
      [ctrlX1, ctrlY1, ctrlX2, ctrlY2] = generateControlPoints(
        x1,
        x2,
        y1,
        y2,
        curveType
      )

    path.push(`C ${ctrlX1}, ${ctrlY1} ${ctrlX2}, ${ctrlY2} ${x2}, ${y2}`)
  }

  path.push("L 100, 100 L 0, 100 Z")

  return path.join(" ")
}

function generateControlPoints(
  x1: number,
  x2: number,
  y1: number,
  y2: number,
  curveType: CurveType
): FourNumbers {
  const curveTypes: Record<CurveType, () => FourNumbers> = {
    hermite: () => [x1 + (x2 - x1) / 2, y1, x1 + (x2 - x1) / 2, y2],
    catmullRom: () => [x1 + (x2 - x1) / 3, y1, x1 + (2 * (x2 - x1)) / 3, y2],
    bezier: () => [x1 + (x2 - x1) / 4, y1, x1 + (3 * (x2 - x1)) / 4, y2],
    spline: () => [x1 + (x2 - x1) / 2, y1, x1 + (3 * (x2 - x1)) / 4, y2],
  }

  return curveTypes[curveType]()
}

export { generateCurvesPath }
