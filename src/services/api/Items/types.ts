import type { LotT } from '../Lot/types'

export type ItemT = {
  id: number
  amount: number
  type: string
  display_name: string
  description: string[] | null
  enchants: string[] | null
  durability: string | null
  categories: string[]
  lot: LotT | null
}

export type ItemTicketT = {
  id: number
}

export type UserMoneyT = {
  money: number
}
