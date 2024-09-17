import { api } from 'src/configs/ky'
import { FetchEndpoint } from 'src/constants'
import type {
  GetTradeHistoryPriceResponse,
  GetTradeHistoryPriceService,
} from 'src/services/api/TradeHistoryPrice/types'

class TradeHistory {
  async getTradeHistoryPrice({
    from,
    to,
  }: GetTradeHistoryPriceService): Promise<GetTradeHistoryPriceResponse[]> {
    return api(`${FetchEndpoint.TRADE_HISTORY_PRICE}?from=${from}&to=${to}`).json()
  }
}

export default new TradeHistory()
