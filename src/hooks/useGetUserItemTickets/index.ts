import { useQuery } from 'react-query'
import { CacheKeys } from 'src/constants'
import ItemTicket from 'src/services/api/ItemTicket'

export const useGetUserItemTickets = () => {
  const { data, isLoading, refetch, isRefetching } = useQuery({
    queryKey: CacheKeys.USER_ITEM_TICKETS,
    queryFn: ItemTicket.getItemTickets,
  })

  return { data: data ?? [], isLoading, refetch, isRefetching }
}
