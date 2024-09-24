import { TWINKS_COUNT } from 'src/constants'

import DefaultButton from 'src/components/DefaultButton'
import InformationButton from 'src/components/InformationButton'
import DefaultInput from 'src/components/inputs/DefaultInput'
import {
  Container,
  DescriptionPrice,
  FormAddTwink,
  StyledSkeleton,
  TwinkUserNameList,
} from 'src/components/Profile/ProfileTwinks/styles'
import { useProfileTwinks } from 'src/components/Profile/ProfileTwinks/useProfileTwinks'

const ProfileTwinks = (): JSX.Element => {
  const {
    data,
    isLoading,
    showInfo,
    canBuyTwink,
    twinkName,
    setTwinkName,
    createTwink,
  } = useProfileTwinks()

  const twinkCountText = `${data.length}/${TWINKS_COUNT}`
  const isMaxTwinks = data.length >= TWINKS_COUNT
  const buttonText = isMaxTwinks
    ? 'Максимум твінків'
    : canBuyTwink
      ? 'Купити твінка'
      : 'Недостатньо коштів'

  return (
    <Container className="heartbeat-outline">
      <StyledSkeleton
        isLoading={isLoading}
        isDataExist={data.length}
        skeletonLength={3}
        emptyText="Твінки відсутні"
        size={30}
      >
        <TwinkUserNameList>
          {!isLoading && data.length
            ? data.map(item => <div key={item.id}>{item.username}</div>)
            : null}
          <div>{twinkCountText}</div>
        </TwinkUserNameList>
      </StyledSkeleton>

      <hr />

      <FormAddTwink>
        <DefaultInput
          style={{ width: 460 }}
          rightIcon={false}
          value={twinkName}
          onChange={e => {
            if (e.target.value.length > 16) return

            setTwinkName(e.target.value)
          }}
        />
        <DefaultButton
          style={{ width: 400 }}
          disabled={
            isLoading ||
            !canBuyTwink ||
            twinkName.length > 16 ||
            twinkName.length < 3
          }
          isLoading={isLoading}
          onClick={() => {
            createTwink()
          }}
        >
          {buttonText}
        </DefaultButton>
      </FormAddTwink>

      <DescriptionPrice>
        {[1, 2, 3].map((num, idx) => (
          <div
            key={idx}
            style={{ textDecoration: data.length >= num ? 'line-through' : '' }}
          >
            {num === 1
              ? `Перший = 2 стаки`
              : num === 2
                ? `Другий = 3 стаки`
                : `Третій = 4 стаки`}
          </div>
        ))}
      </DescriptionPrice>

      <InformationButton
        onClick={showInfo}
        style={{ left: '50%', bottom: '-100px' }}
      />
    </Container>
  )
}

export default ProfileTwinks
