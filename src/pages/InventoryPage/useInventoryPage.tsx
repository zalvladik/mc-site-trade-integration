import { useState } from 'react'
import { BsBox } from 'react-icons/bs'
import { IoTicketOutline } from 'react-icons/io5'
import { PiTreasureChest } from 'react-icons/pi'
import { useGetItemsFromUser } from 'src/hooks/useGetItemsFromUser'
import { useGetUserItemTickets } from 'src/hooks/useGetUserItemTickets'
import { useGetUserShulkers } from 'src/hooks/useGetUserShulkers'
import { InventoryPartsEnum } from 'src/types'

export const useInventoryPage = (): any => {
  const [navType, setNavType] = useState<InventoryPartsEnum>(
    InventoryPartsEnum.ITEMS,
  )

  const { data: dataItems, isLoading: isLoadingItems } = useGetItemsFromUser()
  const { data: dataShulkers, isLoading: isLoadingShulkers } = useGetUserShulkers()
  const { data: dataTickets, isLoading: isLoadingTickets } = useGetUserItemTickets()

  const buttons = [
    {
      iconComponent: <PiTreasureChest size={46} />,
      navType: InventoryPartsEnum.ITEMS,
      alertCount: dataItems.length,
    },
    {
      iconComponent: <BsBox size={46} />,
      navType: InventoryPartsEnum.SHULKERS,
      alertCount: dataShulkers.length,
    },
    {
      iconComponent: <IoTicketOutline size={46} />,
      navType: InventoryPartsEnum.TICKETS,
      alertCount: dataTickets.length,
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

  return {
    navType,
    setNavType,
    showInfoText,
    navTypes,
    buttons,
    isLoading: isLoadingItems || isLoadingShulkers || isLoadingTickets,
  }
}
