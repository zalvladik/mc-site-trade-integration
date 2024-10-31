import type { ItemT } from '../Items/types'
import type { LotT } from '../Lot/types'

export type ShulkerT = {
  id: number
  display_name: string
  type: string
  categories: string[]
  items: ItemT[]
  amount: number
  description: string[] | null
  enchants: string[] | null
  durability: string | null
  lot: LotT | null
}
