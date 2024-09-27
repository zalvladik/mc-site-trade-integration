import { useEffect, useState } from 'react'
import { useGetWorldExpansion } from 'src/hooks/useGetWorldExpansion'
import type { WorldEnum } from 'src/types'

export const useWorldExpansionCategory = (worldType: WorldEnum) => {
  const [currentWorldExpansionLvl, setCurrentWorldExpansionLvl] = useState<number>(1)

  const { isLoading: isLoadingGetWorldExpansion, data: dataGetWorldExpansion } =
    useGetWorldExpansion(worldType)

  useEffect(() => {
    if (dataGetWorldExpansion.length) {
      setCurrentWorldExpansionLvl(dataGetWorldExpansion.length)
    }
  }, [isLoadingGetWorldExpansion])

  const currentWorldExpansion = dataGetWorldExpansion[currentWorldExpansionLvl - 1]

  return {
    currentWorldExpansionLvl,
    setCurrentWorldExpansionLvl,
    isLoadingGetWorldExpansion,
    dataGetWorldExpansion,
    currentWorldExpansion,
  }
}
