import { useQuery } from 'react-query'
import { CacheKeys } from 'src/constants'
import WlEnd from 'src/services/api/WlEnd'

export const useGetWlEnd = () => {
  const { data, isLoading } = useQuery({
    queryFn: WlEnd.getWlEndListPlayers,
    queryKey: CacheKeys.WL_END,
  })

  return {
    data: data ?? [],
    isLoading,
  }
}
