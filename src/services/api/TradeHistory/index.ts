import { api } from 'src/configs/ky'
import { FetchEndpoint } from 'src/constants'

import type {
  GetBuyerTradeHistoryResponse,
  GetSellerTradeHistoryReponse,
} from './types'

class TradeHistory {
  async getSellerTradeHistory(): Promise<GetSellerTradeHistoryReponse> {
    return api(`${FetchEndpoint.TRADE_HISTORY}?isSeller=true`).json()
  }

  async getBuyerTradeHistory(): Promise<GetBuyerTradeHistoryResponse> {
    return api(`${FetchEndpoint.TRADE_HISTORY}?isSeller=false`).json()
  }
}

export default new TradeHistory()
