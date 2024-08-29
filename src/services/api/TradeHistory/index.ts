import { api } from 'src/configs/ky'
import { FetchEndpoint } from 'src/constants'
import type {
  GetBuyerTradeHistoryResponse,
  GetBuyerTradeHistoryService,
  GetSellerTradeHistoryReponse,
  GetSellerTradeHistoryService,
} from 'src/services/api/TradeHistory/types'

class TradeHistory {
  async getSellerTradeHistory({
    page = 1,
  }: GetSellerTradeHistoryService): Promise<GetSellerTradeHistoryReponse> {
    return api(
      `${FetchEndpoint.TRADE_HISTORY}?isSeller=true&page=${encodeURIComponent(page)}`,
    ).json()
  }

  async getBuyerTradeHistory({
    page = 1,
  }: GetBuyerTradeHistoryService): Promise<GetBuyerTradeHistoryResponse> {
    return api(
      `${FetchEndpoint.TRADE_HISTORY}?isSeller=false&page=${encodeURIComponent(page)}`,
    ).json()
  }
}

export default new TradeHistory()
