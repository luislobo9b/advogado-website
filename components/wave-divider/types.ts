type CurveType = "hermite" | "catmullRom" | "bezier" | "spline"
type FourNumbers = [number, number, number, number]

interface IWaveSettings {
  points?: number | number[]
  min?: number
  max?: number
  backgroundColor?: string
  shapeColor?: string
  softStart?: boolean
  softEnd?: boolean
  curveType?: CurveType
}

interface IWaveSettingsNormalized {
  points: number[]
  min: number
  max: number
  backgroundColor: string
  shapeColor: string
  softStart: boolean
  softEnd: boolean
  curveType: CurveType
}

export type { CurveType, FourNumbers, IWaveSettings, IWaveSettingsNormalized }
