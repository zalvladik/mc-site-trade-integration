import { Role } from 'src/constants'
import { formatDateToUK } from 'src/helpers/formatVipExprirationDate'

import HoverDescription from 'src/components/HoverDescription'
import {
  CatContainer,
  Container,
  PlayerRoleImage,
  PlayerRoleImageWrapper,
  SkinContainer,
  VipDateInfo,
  VipDateInfoContainer,
  VipImage,
} from 'src/components/Profile/ProfileComponent/styles'
import { useProfileComponent } from 'src/components/Profile/ProfileComponent/useProfileComponent'
import Skeleton from 'src/components/Skeleton'

const ProfileComponent = (): JSX.Element => {
  const { isLoading, showRoleInfo, canvasRef, role, roleUa, user } =
    useProfileComponent()

  return (
    <Container className="heartbeat-outline">
      <Skeleton
        isLoading={isLoading}
        isDataExist={1}
        emptyText="Скін не знайдено"
        size={80}
      >
        <SkinContainer>
          <CatContainer />
          <canvas ref={canvasRef} id="canvas" />
          {role !== Role.USER && (
            <PlayerRoleImageWrapper>
              <div>
                <PlayerRoleImage
                  style={{
                    backgroundImage: `url('/assets/roles/${role}.webp')`,
                  }}
                  onClick={() => showRoleInfo()}
                />

                <HoverDescription
                  style={{
                    translate: '-50% -120%',
                    top: '0%',
                    left: '50%',
                    fontSize: 22,
                  }}
                  description={[roleUa]}
                />
              </div>
            </PlayerRoleImageWrapper>
          )}
        </SkinContainer>
      </Skeleton>

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
    </Container>
  )
}

export default ProfileComponent
