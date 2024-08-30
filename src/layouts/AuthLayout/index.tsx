import { Outlet } from 'react-router-dom'
import ProvideItemHoverDescription from 'src/contexts/ItemHoverDescriptionProvider'
import ProvideModals from 'src/contexts/ModalProvider'
import UserProvider from 'src/contexts/UserProvider'
import { useCheckAuth } from 'src/hooks/useCheckAuth'
import { useGetUser } from 'src/hooks/useGetUser'
import { Container } from 'src/layouts/AuthLayout/styles'
import LoadingPage from 'src/pages/LoadingPage'

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
          </Container>
        </ProvideModals>
      </ProvideItemHoverDescription>
    </UserProvider>
  )
}

export default AuthLayout
