import InformationButton from 'src/components/InformationButton'
import { Container, ContainerWrapper } from 'src/components/NavBarTop/styles'
import type { NavBarTopProps } from 'src/components/NavBarTop/types'
import { useNavBarTop } from 'src/components/NavBarTop/useNavBarTop'

const NavBarTop = ({
  buttons,
  navType,
  navTypes,
  showInfoText,
  setNavType,
  ...props
}: NavBarTopProps): JSX.Element => {
  const { showInfo, refContainerWrapper, strokeDasharrayLine } =
    useNavBarTop(showInfoText)

  return (
    <ContainerWrapper {...props} ref={refContainerWrapper}>
      <Container>
        <svg height="100%" width="100%" xmlns="http://www.w3.org/2000/svg">
          <rect
            strokeDasharray={strokeDasharrayLine}
            rx="8"
            ry="8"
            className="line"
            height="100%"
            width="100%"
            stroke-linejoin="round"
          />
        </svg>
        {buttons.map((item, i) => (
          <div
            key={item.navType}
            style={{
              opacity: navType === navTypes[i] ? 1 : 0.3,
            }}
            onClick={() => {
              setNavType(navTypes[i])
            }}
          >
            {item.iconComponent}
          </div>
        ))}
      </Container>
      <div>
        <InformationButton
          onClick={showInfo}
          style={{ right: '-40%', top: '50%' }}
        />
      </div>
    </ContainerWrapper>
  )
}

export default NavBarTop
