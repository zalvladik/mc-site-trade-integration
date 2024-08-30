import { Container, UserInventoryWrapper } from 'src/pages/InventoryPage/styles'

import UserInventory from 'src/components/UserInventory'
import UserItemTicket from 'src/components/UserTickets'

const InventoryPage = (): JSX.Element => {
  return (
    <Container>
      <UserInventoryWrapper>
        <UserInventory />
      </UserInventoryWrapper>
      <UserItemTicket />
    </Container>
  )
}

export default InventoryPage
