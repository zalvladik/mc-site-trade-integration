import { useState } from 'react'
import { vipPrice } from 'src/constants'
import { useToast } from 'src/contexts/ToastProvider/useToast'
import { useUser } from 'src/contexts/UserProvider/useUser'
import { useByeVip } from 'src/hooks/useByeVip'
import { useUpgradeVip } from 'src/hooks/useUpgradeVip'
import { VipEnum } from 'src/types'

export const useProfileVip = () => {
  const { user } = useUser()
  const isByeVip = !!user.vipExpirationDate

  const getUserVipTypeForSelectedVipType = (): VipEnum => {
    const vipEnumsArray = Object.values(VipEnum)

    return user.vip === VipEnum.NETHERITE
      ? VipEnum.IRON
      : vipEnumsArray[user.vip ? vipEnumsArray.indexOf(user.vip) + 1 : 0]
  }

  const [selectedVipType, setSelectedVipType] = useState<VipEnum>(
    getUserVipTypeForSelectedVipType(),
  )

  const { isLoading: isLoadingByeVip, mutate: mutateByeVip } = useByeVip()
  const { isLoading: isLoadingUpgradeVip, mutate: mutateUpgradeVip } =
    useUpgradeVip()
  const toast = useToast()

  const toogleVip = () => {
    if (!selectedVipType) return

    if (!isByeVip) {
      mutateByeVip(selectedVipType)

      return
    }

    mutateUpgradeVip(selectedVipType)
  }

  const showInfo = () => {
    toast.info({
      message: [
        'Завдяки VIP, ви збільшуєте кількість:',
        'лотів, предметів, шалкерів.',
        'Він триває 7 днів',
        'VIP можна покращити після покупки',
      ],
      autoHideDuration: 8,
      fontSize: 20,
    })
  }

  const getButtonText = (): string => {
    if (!isByeVip) {
      if (user.money < vipPrice[selectedVipType as VipEnum]) {
        return 'Недостатньо коштів'
      }

      if (!selectedVipType) return 'Виберіть VIP'

      return 'Купити'
    }

    if (user.vip === VipEnum.NETHERITE) {
      return 'У вас максимальний VIP'
    }

    if (!selectedVipType) return 'Виберіть VIP'

    if (user.money < vipPrice[selectedVipType as VipEnum]) {
      return 'Недостатньо коштів'
    }

    return 'Покращити'
  }

  return {
    toogleVip,
    showInfo,
    selectedVipType,
    setSelectedVipType,
    isLoading: isLoadingByeVip || isLoadingUpgradeVip,
    buttonText: getButtonText,
    user,
  }
}
