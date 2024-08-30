import { RoutesPath } from 'src/router/routes'

import {
  ButtonBack,
  Header,
  HeaderContainer,
  NavList,
  NickNameContainer,
} from 'src/components/Navbar/styles'
import { useNavBar } from 'src/components/Navbar/useNavbar'

import MoneyTable from '../MoneyTable'

const Navbar = (): JSX.Element => {
  const {
    user,
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
        <div>
          <ButtonBack onClick={handleClick}>
            <img src="/assets/logo.svg" alt="header logo" />
          </ButtonBack>
          <NickNameContainer>
            <div>{user.username} </div>
            <div>
              <MoneyTable
                money={user.money}
                style={{ flexDirection: 'row', gap: 60 }}
                fontSize={28}
              />
            </div>
          </NickNameContainer>
        </div>

        {!isLoading && isSuccess && (
          <NavList>
            <button
              style={{
                opacity: isProfilePage ? 1 : 0.5,
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
              Кабінет
            </button>

            <button
              style={{ opacity: currentPath === RoutesPath.INVENTORY ? 1 : 0.5 }}
              aria-disabled
              onClick={() =>
                currentPath === RoutesPath.INVENTORY
                  ? undefined
                  : navigate(RoutesPath.INVENTORY)
              }
            >
              Інвентар
            </button>

            <button
              style={{
                opacity: currentPath.includes(RoutesPath.AUCTION) ? 1 : 0.5,
              }}
              aria-disabled
              onClick={() =>
                currentPath.includes(RoutesPath.AUCTION)
                  ? undefined
                  : navigate(RoutesPath.AUCTION)
              }
            >
              Торгівля
            </button>

            <button
              style={{ opacity: currentPath === RoutesPath.MAP ? 1 : 0.5 }}
              aria-disabled
              onClick={() =>
                currentPath === RoutesPath.MAP ? undefined : navigate(RoutesPath.MAP)
              }
            >
              Карта
            </button>

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
