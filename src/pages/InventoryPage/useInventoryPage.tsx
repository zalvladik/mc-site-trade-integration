import { useState } from 'react'
import { BsBox } from 'react-icons/bs'
import { IoTicketOutline } from 'react-icons/io5'
import { PiTreasureChest } from 'react-icons/pi'
import { InventoryPartsEnum } from 'src/types'

export const useInventoryPage = (): any => {
  const [navType, setNavType] = useState<InventoryPartsEnum>(
    InventoryPartsEnum.ITEMS,
  )

  const buttons = [
    {
      iconComponent: <PiTreasureChest size={46} />,
      navType: InventoryPartsEnum.ITEMS,
    },
    {
      iconComponent: <BsBox size={46} />,
      navType: InventoryPartsEnum.SHULKERS,
    },
    {
      iconComponent: <IoTicketOutline size={46} />,
      navType: InventoryPartsEnum.TICKETS,
    },
  ]

  const navTypes = [
    InventoryPartsEnum.ITEMS,
    InventoryPartsEnum.SHULKERS,
    InventoryPartsEnum.TICKETS,
  ]

  const showInfoText = [
    'Цей розділ призначений для ваших',
    'предметів, шалкерів і квитків',
  ]

  return { navType, setNavType, showInfoText, navTypes, buttons }
}
