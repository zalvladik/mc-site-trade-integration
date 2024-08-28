import { useMutation } from 'react-query'
import { CacheKeys } from 'src/constants'
import TradeHistory from 'src/services/api/TradeHistory'

export const useGetBuyerTradeHistory = () => {
  const { mutate, data, isLoading } = useMutation({
    mutationKey: CacheKeys.BUYER_TRADE_HISTORY,
    mutationFn: TradeHistory.getBuyerTradeHistory,
  })

  return {
    mutate,
    data: data?.lots ?? [],
    totalPage: data?.totalPages,
    isLoading,
  }
}
