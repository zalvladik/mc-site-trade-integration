import { useQuery } from 'react-query'
import { CacheKeys } from 'src/constants'
import Pp from 'src/services/api/Pp'

export const useGetPp = () => {
  const { data, isLoading } = useQuery({
    queryFn: Pp.getPpParticle,
    queryKey: CacheKeys.PP,
  })

  return {
    data: data ?? [],
    isLoading,
  }
}
