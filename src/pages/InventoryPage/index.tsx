import { Container } from 'src/pages/InventoryPage/styles'
import { useInventoryPage } from 'src/pages/InventoryPage/useInventoryPage'
import { InventoryPartsEnum } from 'src/types'

import NavBarTop from 'src/components/NavBarTop'
import UserInventory from 'src/components/UserInventory'
import UserItemTickets from 'src/components/UserItemTickets'
import UserShulker from 'src/components/UserShulkers'

const InventoryPage = (): JSX.Element => {
  const { navType, setNavType, buttons, navTypes, showInfoText } = useInventoryPage()

  return (
    <>
      <NavBarTop
        {...{
          navType,
          setNavType,
          buttons,
          navTypes,
          showInfoText,
          strokeDasharray: 164,
        }}
      />
      <Container>
        {navType === InventoryPartsEnum.ITEMS && <UserInventory />}
        {navType === InventoryPartsEnum.SHULKERS && <UserShulker />}
        {navType === InventoryPartsEnum.TICKETS && <UserItemTickets />}
      </Container>
    </>
  )
}

export default InventoryPage
