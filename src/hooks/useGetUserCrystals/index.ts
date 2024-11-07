import { useQuery } from 'react-query'
import { CacheKeys } from 'src/constants'
import Crystal from 'src/services/api/Crystal'

export const useGetUserCrystals = () => {
  const { data, isLoading } = useQuery({
    queryFn: Crystal.get,
    queryKey: CacheKeys.USER_CRYSTALS,
  })

  return {
    data: data ?? [],
    isLoading,
  }
}
