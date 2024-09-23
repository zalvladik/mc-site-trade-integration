import { useNavigate } from 'react-router-dom'
import { useCheckAuth } from 'src/hooks/useCheckAuth'
import { useGetUser } from 'src/hooks/useGetUser'
import { RoutesPath } from 'src/router/routes'

export const useNavbarLeft = () => {
  const navigate = useNavigate()
  const { isSuccess, isLoading } = useCheckAuth()
  const { isUserLoading } = useGetUser(isSuccess)

  const currentPath = window.location.pathname
  const isProfilePage =
    currentPath === RoutesPath.PROFILE || currentPath === RoutesPath.SIGN_IN

  return {
    navigate,
    currentPath,
    isProfilePage,
    isSuccess,
    isLoading: isLoading || isUserLoading,
  }
}
