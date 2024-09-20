import { WL_END_COST } from 'src/constants'
import { useToast } from 'src/contexts/ToastProvider/useToast'
import { useUser } from 'src/contexts/UserProvider/useUser'
import { useByeWlEnd } from 'src/hooks/useByeWlEnd'
import { useGetWlEnd } from 'src/hooks/useGetWlEnd'

export const useModalEnd = () => {
  const toast = useToast()
  const { user } = useUser()

  const { data, isLoading } = useGetWlEnd()
  const { mutate, isLoading: isloadingByeWlEnd } = useByeWlEnd()

  const isBought = data.find(({ username }) => username === user.username)

  const isCanBye = user.money >= WL_END_COST

  const showInfo = () => {
    toast.info({
      message: data.map(item => item.username),
      autoHideDuration: 8,
      fontSize: 20,
    })
  }

  return {
    isBought,
    isLoading: isLoading || isloadingByeWlEnd,
    mutate,
    isCanBye,
    data,
    showInfo,
  }
}
