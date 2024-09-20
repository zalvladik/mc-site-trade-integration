import ProvideItemHoverDescription from 'src/contexts/ItemHoverDescriptionProvider'
import UserProvider from 'src/contexts/UserProvider'
import { useCheckAuth } from 'src/hooks/useCheckAuth'
import { useGetUser } from 'src/hooks/useGetUser'
import LoadingPage from 'src/pages/LoadingPage'

import ModalLayout from '../ModalLayout'

const AuthLayout = (): JSX.Element | null => {
  const { isLoading, isSuccess } = useCheckAuth()

  const { isUserLoading, user } = useGetUser(isSuccess)

  if (isLoading || isUserLoading) return <LoadingPage />

  return (
    <UserProvider user={user}>
      <ProvideItemHoverDescription>
        <ModalLayout />
      </ProvideItemHoverDescription>
    </UserProvider>
  )
}

export default AuthLayout
