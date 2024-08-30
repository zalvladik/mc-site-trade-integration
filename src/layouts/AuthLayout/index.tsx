import { Outlet } from 'react-router-dom'
import ProvideItemHoverDescription from 'src/contexts/ItemHoverDescriptionProvider'
import ProvideModals from 'src/contexts/ModalProvider'
import UserProvider from 'src/contexts/UserProvider'
import { useCheckAuth } from 'src/hooks/useCheckAuth'
import { useGetUser } from 'src/hooks/useGetUser'
import {
  Container,
  MoneyInfoContainer,
  NickNameInfoContainer,
} from 'src/layouts/AuthLayout/styles'
import LoadingPage from 'src/pages/LoadingPage'

import MoneyTable from 'src/components/MoneyTable'
import Navbar from 'src/components/Navbar'

const AuthLayout = (): JSX.Element | null => {
  const { isLoading, isSuccess } = useCheckAuth()

  const { isUserLoading, user } = useGetUser(isSuccess)

  if (isLoading || isUserLoading) return <LoadingPage />

  return (
    <UserProvider user={user}>
      <ProvideItemHoverDescription>
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
      </ProvideItemHoverDescription>
    </UserProvider>
  )
}

export default AuthLayout
