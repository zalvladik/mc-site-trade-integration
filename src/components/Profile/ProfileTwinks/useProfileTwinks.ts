import { useState } from 'react'
import { TWINKS_PRICE } from 'src/constants'
import { useToast } from 'src/contexts/ToastProvider/useToast'
import { useUser } from 'src/contexts/UserProvider/useUser'
import { useCreateTwink } from 'src/hooks/useCreateTwink'
import { useGetTwinks } from 'src/hooks/useGetTwinks'

export const useProfileTwinks = () => {
  const [twinkName, setTwinkName] = useState('')

  const { user, decrementUserMoney } = useUser()

  const { data, isLoading: isLoadingGetTwinks } = useGetTwinks()

  const twinksCount = data.length
  const priceMap = [
    TWINKS_PRICE.FIRST_TWINK,
    TWINKS_PRICE.SECOND_TWINK,
    TWINKS_PRICE.THIRD_TWINK,
  ]

  const { mutate, isLoading: isLoadingCreateTwink } = useCreateTwink(() => {
    decrementUserMoney(priceMap[twinksCount])
  })

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

  const createTwink = () => {
    if (twinkName.length > 16 || twinkName.length < 4) return

    mutate(twinkName)
  }

  const canBuyTwink = (() => {
    return user.money >= (priceMap[twinksCount] || TWINKS_PRICE.THIRD_TWINK)
  })()

  return {
    data: data ?? [],
    isLoading: isLoadingGetTwinks || isLoadingCreateTwink,
    isLoadingGetTwinks,
    showInfo,
    user,
    canBuyTwink,
    twinkName,
    setTwinkName,
    createTwink,
  }
}
