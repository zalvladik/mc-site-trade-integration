import { useState } from 'react'
import { GiSmallFire, GiSpikedDragonHead } from 'react-icons/gi'
import { IoEarth } from 'react-icons/io5'
import { WorldEnum } from 'src/types'

export const useExpansionWorldsPage = (): any => {
  const [navType, setNavType] = useState<WorldEnum>(WorldEnum.WORLD)

  const buttons = [
    { iconComponent: <IoEarth size={46} />, navType: WorldEnum.WORLD },
    {
      iconComponent: <GiSmallFire size={46} />,
      navType: WorldEnum.WORLD_NETHER,
    },
    {
      iconComponent: <GiSpikedDragonHead size={46} />,
      navType: WorldEnum.WORLD_THE_END,
    },
  ]

  const navTypes = [WorldEnum.WORLD, WorldEnum.WORLD_NETHER, WorldEnum.WORLD_THE_END]

  const showInfoText = ['Цей розділ створений для розширень територій']

  return { navType, setNavType, showInfoText, navTypes, buttons }
}
