import { BsBoxSeam } from 'react-icons/bs'
import { IoDiamondOutline, IoPersonOutline } from 'react-icons/io5'
import { LuLineChart } from 'react-icons/lu'
import { PiCompassRoseDuotone } from 'react-icons/pi'
import { RiLogoutBoxLine } from 'react-icons/ri'
import { RoutesPath } from 'src/router/routes'

import {
  ButtonBack,
  CatContainer,
  Header,
  HeaderContainer,
  NavEffect,
  NavList,
} from 'src/components/NavbarLeft/styles'
import { useNavbarLeft } from 'src/components/NavbarLeft/useNavbarLeft'

const NavbarLeft = (): JSX.Element => {
  const {
    navigate,
    logoutProfile,
    currentPath,
    isProfilePage,
    isSuccess,
    isLoading,
  } = useNavbarLeft()

  const handleClick = (): void => {
    window.location.href = 'https://vinland-site.vercel.app/'
  }

  return (
    <Header>
      <HeaderContainer>
        <NavEffect />
        <ButtonBack onClick={handleClick} />
        {!isLoading && isSuccess && (
          <NavList>
            <div
              style={{
                opacity: isProfilePage ? 1 : 0.3,
              }}
              aria-disabled
              onClick={() =>
                !isSuccess
                  ? navigate(RoutesPath.SIGN_IN)
                  : isProfilePage
                    ? undefined
                    : navigate(RoutesPath.PROFILE)
              }
            >
              <IoPersonOutline size={46} />
            </div>

            <div
              style={{
                opacity: currentPath === RoutesPath.INVENTORY ? 1 : 0.3,
              }}
              aria-disabled
              onClick={() =>
                currentPath === RoutesPath.INVENTORY
                  ? undefined
                  : navigate(RoutesPath.INVENTORY)
              }
            >
              <BsBoxSeam size={46} />
            </div>

            <div
              style={{
                opacity: currentPath.includes(RoutesPath.AUCTION) ? 1 : 0.3,
              }}
              aria-disabled
              onClick={() =>
                currentPath.includes(RoutesPath.AUCTION)
                  ? undefined
                  : navigate(RoutesPath.AUCTION)
              }
            >
              <IoDiamondOutline size={46} />
            </div>

            <div
              style={{
                opacity: currentPath.includes(RoutesPath.TRADE_CHART) ? 1 : 0.3,
              }}
              aria-disabled
              onClick={() =>
                currentPath.includes(RoutesPath.TRADE_CHART)
                  ? undefined
                  : navigate(RoutesPath.TRADE_CHART)
              }
            >
              <LuLineChart size={46} />
            </div>

            <div
              style={{
                opacity: currentPath === RoutesPath.MAP ? 1 : 0.3,
              }}
              aria-disabled
              onClick={() =>
                currentPath === RoutesPath.MAP ? undefined : navigate(RoutesPath.MAP)
              }
            >
              <PiCompassRoseDuotone size={46} />
            </div>
            <div onClick={logoutProfile}>
              <RiLogoutBoxLine size={46} />
            </div>
          </NavList>
        )}

        <CatContainer />
      </HeaderContainer>
    </Header>
  )
}

export default NavbarLeft
