import { useEffect, useState } from 'react'
import { useToast } from 'src/contexts/ToastProvider/useToast'
import { useUser } from 'src/contexts/UserProvider/useUser'
import { useGetWorldExpansion } from 'src/hooks/useGetWorldExpansion'
import { useUpgradeWorldExpansion } from 'src/hooks/useUpgradeWorldExpansion'
import type { WorldEnum } from 'src/types'

export const useWorldExpansionCategory = (worldType: WorldEnum) => {
  const { user, decrementUserMoney } = useUser()
  const [currentWorldExpansionLvl, setCurrentWorldExpansionLvl] = useState<number>(1)
  const toast = useToast()

  const [value, setValue] = useState('')

  const { isLoading: isLoadingGetWorldExpansion, data: dataGetWorldExpansion } =
    useGetWorldExpansion(worldType)

  const {
    mutate: mutateUpgradeWorldExpansion,
    isLoading: isLoadingUpgradeWorldExpansion,
  } = useUpgradeWorldExpansion(worldType, decrementUserMoney, value)

  useEffect(() => {
    if (dataGetWorldExpansion.length) {
      setCurrentWorldExpansionLvl(dataGetWorldExpansion.length)
    }
  }, [isLoadingGetWorldExpansion])

  const currentWorldExpansion = dataGetWorldExpansion[currentWorldExpansionLvl - 1]

  const howMuchNeed =
    Number(currentWorldExpansion?.cost ?? 0) -
    Number(currentWorldExpansion?.moneyStorage ?? 0)

  const handleError = () => {
    toast.error({ message: [`Максимальна кількість: ${Number(howMuchNeed)}`] })
  }

  const handleChangeValue = (newValue: string): void => {
    if (/^\d*\.?[1-9]{0,1}$/.test(newValue)) {
      if (newValue === '0') {
        if (value === '0.') {
          setValue('')

          return
        }

        setValue('0.')
      } else {
        const numericValue = parseFloat(newValue)

        if (!Number.isNaN(numericValue)) {
          setValue(newValue)
        } else if (newValue === '') {
          setValue('')
        }
      }
    }
  }

  const handleExpansion = () => {
    mutateUpgradeWorldExpansion({ worldType, money: Number(value) })
  }

  return {
    currentWorldExpansionLvl,
    setCurrentWorldExpansionLvl,
    isLoadingGetWorldExpansion,
    dataGetWorldExpansion,
    currentWorldExpansion,
    handleChangeValue,
    value,
    handleError,
    howMuchNeed,
    user,
    handleExpansion,
    isLoadingUpgradeWorldExpansion,
  }
}
