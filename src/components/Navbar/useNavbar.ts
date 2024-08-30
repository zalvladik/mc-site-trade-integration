import { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { useUser } from 'src/contexts/UserProvider/useUser'
import { useCheckAuth } from 'src/hooks/useCheckAuth'
import { useGetUser } from 'src/hooks/useGetUser'
import { RoutesPath } from 'src/router/routes'

export const useNavBar = () => {
  const navigate = useNavigate()
  const { isSuccess, isLoading } = useCheckAuth()
  const { isUserLoading } = useGetUser(isSuccess)

  const { user } = useUser()

  const [isScrollingUp, setIsScrollingUp] = useState(true)
  const [prevScrollPos, setPrevScrollPos] = useState(window.scrollY)
  const currentPath = window.location.pathname
  const isProfilePage =
    currentPath === RoutesPath.PROFILE || currentPath === RoutesPath.SIGN_IN

  const handleScroll = () => {
    const currentScrollPos = window.scrollY
    const isScrollingUp = prevScrollPos > currentScrollPos

    if (currentScrollPos < 100) {
      setIsScrollingUp(true)

      return
    }

    setIsScrollingUp(isScrollingUp)
    setPrevScrollPos(currentScrollPos)
  }

  useEffect(() => {
    window.addEventListener('scroll', handleScroll)

    return () => {
      window.removeEventListener('scroll', handleScroll)
    }
  }, [prevScrollPos])

  return {
    navigate,
    isScrollingUp,
    currentPath,
    isProfilePage,
    isSuccess,
    isLoading: isLoading || isUserLoading,
    user,
  }
}
