import type { WorldEnum } from 'src/types'

export type WorldExpansionT = {
  id: number

  worldType: WorldEnum

  lvl: number

  moneyStorage: number

  cost: number

  isCompleted: boolean

  createdAt: Date

  completedAt: Date
}

export type GetWorldExpansionProps = {
  worldType: WorldEnum
}
