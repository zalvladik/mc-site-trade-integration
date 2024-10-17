import { useQuery } from 'react-query'
import { CacheKeys } from 'src/constants'
import Advancements from 'src/services/api/Stats'

export const useGetUserPlayTime = (userId: number) => {
  const { isLoading, data } = useQuery({
    queryKey: [CacheKeys.USER_PLAY_TIME, userId],
    queryFn: () => Advancements.getUserPlayTimeApi(),
  })

  return { isLoading, data: data ?? { playTime: 0, afkTime: 0 } }
}
