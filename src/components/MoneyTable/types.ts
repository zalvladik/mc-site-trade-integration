import type { HTMLProps } from 'react'

export type MoneyTableProps = {
  moneyTitle?: string
  money: number
  fontSize?: number
} & HTMLProps<HTMLUListElement>
