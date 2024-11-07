import type { CrystalItemTypeEnum, CrystalTypeEnum } from 'src/constants'

export type CrystalT = {
  id: number
  customModelData: number
  type: CrystalTypeEnum
  itemType: CrystalItemTypeEnum
}
