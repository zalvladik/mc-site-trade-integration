import { useEffect, useState } from 'react'
import { useToast } from 'src/contexts/ToastProvider/useToast'
import { useGetWorldExpansion } from 'src/hooks/useGetWorldExpansion'
import type { WorldEnum } from 'src/types'

export const useWorldExpansionCategory = (worldType: WorldEnum) => {
  const [currentWorldExpansionLvl, setCurrentWorldExpansionLvl] = useState<number>(1)
  const toast = useToast()

  const [value, setValue] = useState('')

  const { isLoading: isLoadingGetWorldExpansion, data: dataGetWorldExpansion } =
    useGetWorldExpansion(worldType)

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
  }
}
