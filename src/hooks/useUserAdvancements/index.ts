import { useQuery } from 'react-query'
import { CacheKeys } from 'src/constants'
import Advancements from 'src/services/api/Advancements'

export const useUserAdvancements = (userId: number) => {
  const { isLoading, data } = useQuery({
    queryKey: [CacheKeys.USER_ADVANCEMENTS, userId],
    queryFn: () => Advancements.getUserAdvancementsApi(userId),
  })

  return { isLoading, data }
}
