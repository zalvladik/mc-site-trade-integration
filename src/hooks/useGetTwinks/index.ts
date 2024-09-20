import { useQuery } from 'react-query'
import { CacheKeys } from 'src/constants'
import Twink from 'src/services/api/Twink'

export const useGetTwinks = () => {
  const { data, isLoading } = useQuery({
    queryKey: CacheKeys.TWINKS,
    queryFn: () => Twink.getTwinks(),
  })

  return { data: data ?? [], isLoading }
}
