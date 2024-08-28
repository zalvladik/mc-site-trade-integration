import { useMutation } from 'react-query'
import { CacheKeys } from 'src/constants'
import TradeHistory from 'src/services/api/TradeHistory'

export const useGetSellerTradeHistory = () => {
  const { mutate, data, isLoading } = useMutation({
    mutationKey: CacheKeys.SELLER_TRADE_HISTORY,
    mutationFn: TradeHistory.getSellerTradeHistory,
  })

  return {
    mutate,
    data: data?.lots ?? [],
    totalPage: data?.totalPages,
    isLoading,
  }
}
