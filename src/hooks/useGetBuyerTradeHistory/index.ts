import { useMutation } from 'react-query'
import { CacheKeys } from 'src/constants'
import TradeHistory from 'src/services/api/TradeHistory'
import type { GetBuyerTradeHistoryService } from 'src/services/api/TradeHistory/types'

export const useGetBuyerTradeHistory = () => {
  const { data, isLoading, mutateAsync } = useMutation({
    mutationKey: CacheKeys.BUYER_TRADE_HISTORY,
    mutationFn: ({ page }: GetBuyerTradeHistoryService) =>
      TradeHistory.getBuyerTradeHistory({ page }),
  })

  return {
    mutateAsync,
    data: data?.lots ?? [],
    totalPage: data?.totalPages ?? 0,
    isLoading,
  }
}
