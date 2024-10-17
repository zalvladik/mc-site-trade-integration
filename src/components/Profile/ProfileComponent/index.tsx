import { Role } from 'src/constants'
import { millisecondsToTime } from 'src/helpers'
import { formatDateToUK } from 'src/helpers/formatVipExprirationDate'

import HoverDescription from 'src/components/HoverDescription'
import {
  CatContainer,
  Container,
  PlayerRoleImage,
  PlayerRoleImageWrapper,
  PlayTimeStats,
  SkinContainer,
  VipDateInfo,
  VipDateInfoContainer,
  VipImage,
} from 'src/components/Profile/ProfileComponent/styles'
import { useProfileComponent } from 'src/components/Profile/ProfileComponent/useProfileComponent'
import Skeleton from 'src/components/Skeleton'

const ProfileComponent = (): JSX.Element => {
  const {
    isLoading,
    showRoleInfo,
    canvasRef,
    role,
    roleUa,
    user,
    dataUserPlayTime,
  } = useProfileComponent()

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
      <div style={{ textAlign: 'center' }}>
        {(() => {
          if (!dataUserPlayTime?.playTime) return <></>

          const { days, hours, minutes } = millisecondsToTime(
            Number(dataUserPlayTime?.playTime) * 1000,
          )

          return (
            <PlayTimeStats>
              <span>{'Зіграно: '}</span>
              {Number(days) ? `${Number(days)}д. ` : ''}
              {Number(hours) ? `${Number(hours)}г. ` : ''}
              {Number(minutes) ? `${Number(minutes)}хв. ` : ''}
            </PlayTimeStats>
          )
        })()}

        {(() => {
          if (!dataUserPlayTime?.afkTime) return <></>

          const { days, hours, minutes } = millisecondsToTime(
            Number(dataUserPlayTime?.afkTime) * 1000,
          )

          return (
            <PlayTimeStats>
              <span>{'AFK: '}</span>
              {Number(days) ? `${Number(days)}д. ` : ''}
              {Number(hours) ? `${Number(hours)}г. ` : ''}
              {Number(minutes) ? `${Number(minutes)}хв. ` : ''}
            </PlayTimeStats>
          )
        })()}

        {(() => {
          if (!dataUserPlayTime?.playTime || !dataUserPlayTime?.afkTime) return <></>

          const { days, hours, minutes } = millisecondsToTime(
            (Number(dataUserPlayTime?.playTime) -
              Number(dataUserPlayTime?.afkTime)) *
              1000,
          )

          return (
            <PlayTimeStats>
              <span>{'Жива гра: '}</span>
              {Number(days) ? `${Number(days)}д. ` : ''}
              {Number(hours) ? `${Number(hours)}г. ` : ''}
              {Number(minutes) ? `${Number(minutes)}хв. ` : ''}
            </PlayTimeStats>
          )
        })()}
      </div>

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
