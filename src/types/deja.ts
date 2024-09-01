// types.ts

const enum DejaModulesEnum {
  Locos,
  Turnouts,
  Signals,
  Sensors,
  Routes,
  Blocks,
  Automations
}

export type DejaModuleType = keyof typeof DejaModulesEnum

export interface DejaLayout {
  layoutId: string
  owner: string
  name?: string
  modules?: DejaModuleType[]
  color?: string
}

export interface Layout {
  layoutId: string
  owner: string
  name: string
  // modules: DejaModuleType[]
  color: string
}

export interface ConsistLoco {
  address: number
  direction: boolean
  trim: number
}
export interface Loco {
  address: number
  consist: ConsistLoco[]
  functions: LocoFunction[]
}
export interface LocoFunction {
  id: number
  label: string
  icon: string | null | undefined
  isFavorite: boolean | undefined
}

export interface ConsistProps {
  address: number
}

export interface ConsistSettingsProps {
  locos: Loco[]
  loco: Loco
}
