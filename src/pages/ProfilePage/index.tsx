import { formatDateToUK } from 'src/helpers/formatVipExprirationDate'
import {
  ButtonList,
  Container,
  PlayerInfo,
  VipDateInfo,
  VipDateInfoContainer,
  VipImage,
} from 'src/pages/ProfilePage/styles'
import useProfilePage from 'src/pages/ProfilePage/useProfilePage'

import DefaultButton from 'src/components/DefaultButton'
import SkinComponent from 'src/components/SkinComponent'

const ProfilePage = (): JSX.Element => {
  const {
    user,
    isLoading,
    logout,
    // openAdvancementsModal,
    openVipModal,
    openEffectsModal,
    // openEndModal,
    openTwinksModal,
  } = useProfilePage()

  return (
    <Container>
      <SkinComponent />
      <PlayerInfo>
        <ButtonList>
          {/* <DefaultButton onClick={openAdvancementsModal}>Досягнення</DefaultButton> */}

          <DefaultButton disabled={isLoading} onClick={openEffectsModal}>
            Ефекти
          </DefaultButton>

          <DefaultButton disabled={isLoading} onClick={openVipModal}>
            VIP
          </DefaultButton>

          {/* <DefaultButton disabled={isLoading} onClick={openEndModal}>
            Енд
          </DefaultButton> */}

          <DefaultButton disabled={isLoading} onClick={openTwinksModal}>
            Твінки
          </DefaultButton>

          <DefaultButton disabled={isLoading} onClick={logout}>
            Вийти
          </DefaultButton>
          {(() => {
            if (!user.vipExpirationDate) return <></>

            const { day, month, hours, minutes, seconds } = formatDateToUK(
              user.vipExpirationDate,
            )

            return (
              <VipDateInfoContainer>
                <VipImage
                  style={{
                    backgroundImage: `url(/assets/items_for_ui/${user.vip}_block.webp)`,
                  }}
                />
                <h3>Тривалість VIP</h3>
                {user.vipExpirationDate && (
                  <VipDateInfo>
                    <div>
                      до {day} {month}
                    </div>
                    |
                    <div>
                      {hours} : {minutes} : {seconds}
                    </div>
                  </VipDateInfo>
                )}
              </VipDateInfoContainer>
            )
          })()}
        </ButtonList>
      </PlayerInfo>
    </Container>
  )
}

export default ProfilePage
