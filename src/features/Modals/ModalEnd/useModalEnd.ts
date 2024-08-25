import { WL_END_COST } from 'src/constants'
import { useUser } from 'src/contexts/UserProvider/useUser'
import { useByeWlEnd } from 'src/hooks/useByeWlEnd'
import { useGetWlEnd } from 'src/hooks/useGetWlEnd'

export const useModalEnd = () => {
  const { user } = useUser()

  const { data, isLoading } = useGetWlEnd()
  const { mutate, isLoading: isloadingByeWlEnd } = useByeWlEnd()

  const isBought = data.find(({ username }) => username === user.username)

  const isCanBye = user.money >= WL_END_COST

  return { isBought, isLoading: isLoading || isloadingByeWlEnd, mutate, isCanBye }
}
