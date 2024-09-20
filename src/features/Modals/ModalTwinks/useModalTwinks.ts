import { useEffect, useState } from 'react'
import { TWINKS_PRICE } from 'src/constants'
import { useToast } from 'src/contexts/ToastProvider/useToast'
import { useUser } from 'src/contexts/UserProvider/useUser'
import { useCreateTwink } from 'src/hooks/useCreateTwink'
import { useGetTwinks } from 'src/hooks/useGetTwinks'

export const useModalTwinks = () => {
  const [twinkName, setTwinkName] = useState('')

  const { data, isLoading: isLoadingGetTwinks } = useGetTwinks()
  const { mutate, isLoading: isLoadingCreateTwink, isSuccess } = useCreateTwink()
  const { user, updateUserMoney } = useUser()

  const twinksCount = data.length
  const priceMap = [
    TWINKS_PRICE.FIRST_TWINK,
    TWINKS_PRICE.SECOND_TWINK,
    TWINKS_PRICE.THIRD_TWINK,
  ]

  const toast = useToast()

  const showInfo = () => {
    toast.info({
      message: [
        'Твінки купляються назавжди,',
        'за кожен наступний вам прийдеться заплатити',
        'більше аніж за попереднього',
      ],
      autoHideDuration: 8,
      fontSize: 20,
    })
  }

  useEffect(() => {
    if (isSuccess) {
      updateUserMoney(user.money - priceMap[twinksCount])
    }
  }, [isSuccess])

  const createTwink = () => {
    mutate(twinkName)
  }

  const canBuyTwink = (() => {
    return user.money >= (priceMap[twinksCount] || TWINKS_PRICE.THIRD_TWINK)
  })()

  return {
    data: data ?? [],
    isLoading: isLoadingGetTwinks || isLoadingCreateTwink,
    showInfo,
    user,
    canBuyTwink,
    twinkName,
    setTwinkName,
    createTwink,
  }
}
