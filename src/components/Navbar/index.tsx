import { BsBoxSeam } from 'react-icons/bs'
import { IoDiamondOutline, IoMapOutline, IoPersonOutline } from 'react-icons/io5'
import { LuLineChart } from 'react-icons/lu'
import { RoutesPath } from 'src/router/routes'

import {
  ButtonBack,
  Header,
  HeaderContainer,
  NavList,
} from 'src/components/Navbar/styles'
import { useNavBar } from 'src/components/Navbar/useNavbar'

const Navbar = (): JSX.Element => {
  const {
    navigate,
    isScrollingUp,
    currentPath,
    isProfilePage,
    isSuccess,
    isLoading,
  } = useNavBar()

  const handleClick = (): void => {
    window.location.href = 'https://uk-land-site.vercel.app/'
  }

  return (
    <Header className={isScrollingUp ? '' : 'header hidden'}>
      <HeaderContainer>
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
              <IoMapOutline size={46} />
            </div>

            {/* {isSuccess && (
                <button
                  style={{ opacity: currentPath === RoutesPath.WIKI ? 1 : 0.5 }}
                  onClick={() =>
                    currentPath === RoutesPath.WIKI
                      ? undefined
                      : navigate(RoutesPath.WIKI)
                  }
                >
                  Wiki
                </button>
              )} */}
          </NavList>
        )}
      </HeaderContainer>
    </Header>
  )
}

export default Navbar
