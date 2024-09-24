import {
  ITEMS_COUNT,
  LOTS_COUNT,
  SHULKERS_COUNT,
  vipMultipliers,
  vipPrice,
} from 'src/constants'
import { VipEnum } from 'src/types'

import DefaultButton from 'src/components/DefaultButton'
import InformationButton from 'src/components/InformationButton'
import {
  Container,
  DisabledVipType,
  VipInfo,
  VipInfoContainer,
  VipTypeIcons,
} from 'src/components/Profile/ProfileVip/styles'
import { useProfileVip } from 'src/components/Profile/ProfileVip/useProfileVip'

const ProfileVip = (): JSX.Element => {
  const {
    toogleVip,
    showInfo,
    selectedVipType,
    setSelectedVipType,
    isLoading,
    buttonText,
    user,
  } = useProfileVip()

  return (
    <Container>
      <VipTypeIcons>
        {Object.values(VipEnum).map(item => {
          const isDisalbed = vipPrice[user.vip as VipEnum] >= vipPrice[item]
          const isSelected = selectedVipType === item

          return (
            <div
              key={item}
              onClick={() => {
                setSelectedVipType(item)
              }}
              style={{
                backgroundImage: `url(/assets/items_for_ui/${item}_block.webp)`,
                opacity: isDisalbed ? 0.4 : isSelected ? 1 : 0.4,
                pointerEvents: isDisalbed ? 'none' : 'auto',
              }}
            >
              {isDisalbed && <DisabledVipType />}
            </div>
          )
        })}
      </VipTypeIcons>

      <VipInfoContainer className="heartbeat-outline">
        <VipInfo>
          <div>
            Ціна: {vipPrice[selectedVipType]} <div />
          </div>
          <div>
            <span>Предметів:</span> {ITEMS_COUNT * vipMultipliers[selectedVipType]}
          </div>
          <div>
            <span>Шалкери:</span> {SHULKERS_COUNT * vipMultipliers[selectedVipType]}
          </div>
          <div>
            <span>Лоти:</span> {LOTS_COUNT * vipMultipliers[selectedVipType]}
          </div>
        </VipInfo>

        <DefaultButton
          disabled={
            !selectedVipType ||
            vipPrice[selectedVipType] > user.money ||
            selectedVipType === user.vip ||
            isLoading
          }
          isLoading={isLoading}
          style={{ width: 400, margin: '0px auto' }}
          onClick={() => {
            toogleVip()
          }}
        >
          {buttonText()}
        </DefaultButton>
      </VipInfoContainer>

      <InformationButton
        onClick={showInfo}
        style={{ left: '50%', bottom: '-100px' }}
      />
    </Container>
  )
}

export default ProfileVip
