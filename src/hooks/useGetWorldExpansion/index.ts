import { useQuery } from 'react-query'
import { CacheKeys } from 'src/constants'
import WorldExpansion from 'src/services/api/WorldExpansion'
import type { WorldEnum } from 'src/types'

export const useGetWorldExpansion = (worldType: WorldEnum) => {
  const { isLoading, data } = useQuery({
    queryKey: [CacheKeys.WORLD_EXPANSION, worldType],
    queryFn: () => WorldExpansion.getWorldExpansion({ worldType }),
    staleTime: 1000 * 60 * 5,
    cacheTime: 1000 * 60 * 10,
    refetchOnWindowFocus: false,
    refetchOnReconnect: false,
  })

  return {
    isLoading,
    data: data ?? [],
  }
}
