import InformationButton from 'src/components/InformationButton'
import Skeleton from 'src/components/Skeleton'
import {
  Container,
  ShulkerIdWrapper,
  StyledIoDiamondOutline,
} from 'src/components/UserShulkers/styles'
import { useShulkers } from 'src/components/UserShulkers/useShulkers'

const UserShulker = (): JSX.Element => {
  const { data, isLoading, showInfo, shulkerIconRefs, openModal, vipShulkerCount } =
    useShulkers()

  const size = 80 + 160 / data.length
  const fontSize = 30 + 30 / data.length

  return (
    <Container className={`itemTicket${data.length}`}>
      <Skeleton
        isDataExist={data.length}
        isLoading={isLoading}
        emptyText="Шалкери відсутні"
      >
        {data.map(({ id, type, display_name, lot }, index) => {
          const isExistLot = lot ? !lot?.isSold : false

          return (
            <button
              ref={el => {
                shulkerIconRefs.current[index] = el
              }}
              key={id}
              onClick={() => openModal(id)}
              style={{
                backgroundImage: `url(/assets/shulkers/${type}.webp)`,
                width: size,
                height: size,
                whiteSpace: 'nowrap',
              }}
              data-display-name={display_name}
            >
              <ShulkerIdWrapper>
                <div style={{ fontSize }}>{id}</div>
              </ShulkerIdWrapper>

              {isExistLot && (
                <div
                  style={{
                    position: 'absolute',
                    left: '84%',
                    top: '16%',
                    translate: '-50% -50%',
                  }}
                >
                  <StyledIoDiamondOutline size={size * 0.5} />
                </div>
              )}
            </button>
          )
        })}

        <h1>
          {data.length}/{vipShulkerCount}
        </h1>
      </Skeleton>

      <InformationButton
        onClick={showInfo}
        style={{ left: '50%', bottom: '-100px' }}
      />
    </Container>
  )
}

export default UserShulker
