import { useState } from 'react'
import { GiSmallFire, GiSpikedDragonHead } from 'react-icons/gi'
import { IoEarth } from 'react-icons/io5'
import { ExpansionWorldsEnum } from 'src/types'

export const useExpansionWorldsPage = (): any => {
  const [navType, setNavType] = useState<ExpansionWorldsEnum>(
    ExpansionWorldsEnum.WORLD,
  )

  const buttons = [
    { iconComponent: <IoEarth size={46} />, navType: ExpansionWorldsEnum.WORLD },
    {
      iconComponent: <GiSmallFire size={46} />,
      navType: ExpansionWorldsEnum.WORLD_NETHER,
    },
    {
      iconComponent: <GiSpikedDragonHead size={46} />,
      navType: ExpansionWorldsEnum.WORLD_END,
    },
  ]

  const navTypes = [
    ExpansionWorldsEnum.WORLD,
    ExpansionWorldsEnum.WORLD_NETHER,
    ExpansionWorldsEnum.WORLD_END,
  ]

  const showInfoText = ['Цей розділ створений для розширень територій']

  return { navType, setNavType, showInfoText, navTypes, buttons }
}
