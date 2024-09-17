export type GetTradeHistoryPriceService = {
  from: Date
  to: Date
}

export type GetTradeHistoryPriceResponse = {
  id: number

  createdAt: Date

  isSeller: boolean

  price: number
}
