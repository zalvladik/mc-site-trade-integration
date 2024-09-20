import { Outlet } from 'react-router-dom'
import ProvideModals from 'src/contexts/ModalProvider'
import { useUser } from 'src/contexts/UserProvider/useUser'
import {
  Container,
  MoneyInfoContainer,
  NickNameInfoContainer,
} from 'src/layouts/AuthLayout/styles'

import MoneyTable from 'src/components/MoneyTable'
import Navbar from 'src/components/Navbar'

const ModalLayout = (): JSX.Element => {
  const { user } = useUser()

  return (
    <ProvideModals>
      <Container>
        <Navbar />
        <Outlet />

        <NickNameInfoContainer>
          <div>{user.username}</div>
        </NickNameInfoContainer>

        <MoneyInfoContainer>
          <MoneyTable
            fontSize={30}
            money={user.money}
            style={{ flexDirection: 'row', gap: 60 }}
          />
        </MoneyInfoContainer>
      </Container>
    </ProvideModals>
  )
}

export default ModalLayout
