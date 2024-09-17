import { useMutation } from 'react-query'
import { CacheKeys } from 'src/constants'
import TradeHistoryPrice from 'src/services/api/TradeHistoryPrice'
import type { GetTradeHistoryPriceService } from 'src/services/api/TradeHistoryPrice/types'

export const useTradeHistoryPrice = () => {
  const { mutate, data, isLoading } = useMutation({
    mutationKey: CacheKeys.TRADE_HISTORY_PRICE,
    mutationFn: ({ from, to }: GetTradeHistoryPriceService) =>
      TradeHistoryPrice.getTradeHistoryPrice({ from, to }),
  })

  return {
    mutate,
    data: data ?? [],
    isLoading,
  }
}
