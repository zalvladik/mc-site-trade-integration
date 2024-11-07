import { Container } from 'src/pages/InventoryPage/styles'
import { useInventoryPage } from 'src/pages/InventoryPage/useInventoryPage'
import { InventoryPartsEnum } from 'src/types'

import NavBarTop from 'src/components/NavBarTop'
import Skeleton from 'src/components/Skeleton'
import UserCrystals from 'src/components/UserCrystals'
import UserInventory from 'src/components/UserInventory'
import UserItemTickets from 'src/components/UserItemTickets'
import UserShulker from 'src/components/UserShulkers'

const InventoryPage = (): JSX.Element => {
  const { navType, setNavType, buttons, navTypes, showInfoText, isLoading } =
    useInventoryPage()

  return (
    <>
      <NavBarTop
        {...{
          navType,
          setNavType,
          buttons,
          navTypes,
          showInfoText,
        }}
      />

      <Container>
        <Skeleton
          style={{ padding: '120px 0px 40px 40px' }}
          isLoading={isLoading}
          isDataExist={1}
        >
          {navType === InventoryPartsEnum.ITEMS && <UserInventory />}
          {navType === InventoryPartsEnum.SHULKERS && <UserShulker />}
          {navType === InventoryPartsEnum.TICKETS && <UserItemTickets />}
          {navType === InventoryPartsEnum.CRYSTALS && <UserCrystals />}
        </Skeleton>
      </Container>
    </>
  )
}

export default InventoryPage
