import { useMutation } from 'react-query'
import { CacheKeys } from 'src/constants'
import TradeHistory from 'src/services/api/TradeHistory'
import type { GetSellerTradeHistoryService } from 'src/services/api/TradeHistory/types'

export const useGetSellerTradeHistory = () => {
  const { mutateAsync, data, isLoading } = useMutation({
    mutationKey: CacheKeys.SELLER_TRADE_HISTORY,
    mutationFn: ({ page }: GetSellerTradeHistoryService) =>
      TradeHistory.getSellerTradeHistory({ page }),
  })

  return {
    mutateAsync,
    data: data?.lots ?? [],
    totalPage: data?.totalPages ?? 0,
    isLoading,
  }
}
