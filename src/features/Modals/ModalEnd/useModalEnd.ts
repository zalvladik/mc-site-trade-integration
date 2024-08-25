import { useUser } from 'src/contexts/UserProvider/useUser'
import { useByeWlEnd } from 'src/hooks/useByeWlEnd'
import { useGetWlEnd } from 'src/hooks/useGetWlEnd'

export const useModalEnd = () => {
  const { user } = useUser()

  const { data, isLoading } = useGetWlEnd()
  const { mutate, isLoading: isloadingByeWlEnd } = useByeWlEnd()

  const isBought = data.find(({ username }) => username === user.username)

  return { isBought, isLoading: isLoading || isloadingByeWlEnd, mutate }
}
