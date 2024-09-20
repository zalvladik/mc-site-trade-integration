import { TWINKS_COUNT } from 'src/constants'

import ButtonModalClose from 'src/components/ButtonModalClose'
import DefaultButton from 'src/components/DefaultButton'
import InformationButton from 'src/components/InformationButton'
import DefaultInput from 'src/components/inputs/DefaultInput'

import {
  Container,
  DescriptionPrice,
  FormAddTwink,
  TwinkUserNameList,
} from 'src/features/Modals/ModalTwinks/styles'
import type { ModalTwinksProps } from 'src/features/Modals/ModalTwinks/types'
import { useModalTwinks } from 'src/features/Modals/ModalTwinks/useModalTwinks'
import SettingsModalsLayout from 'src/features/Modals/SettingsModalsLayout'

const ModalTwinks = ({
  isOpen,
  closeModal,
  handleContainerClick,
}: ModalTwinksProps): JSX.Element => {
  const {
    data,
    isLoading,
    showInfo,
    canBuyTwink,
    twinkName,
    setTwinkName,
    createTwink,
  } = useModalTwinks()

  const twinkCountText = `${data.length}/${TWINKS_COUNT}`
  const isMaxTwinks = data.length >= TWINKS_COUNT
  const buttonText = isMaxTwinks
    ? 'Максимум твінків'
    : canBuyTwink
      ? 'Купити твінка'
      : 'Недостатньо коштів'

  return (
    <SettingsModalsLayout
      isOpen={isOpen}
      closeModal={closeModal}
      style={{ backgroundColor: 'rgba(0, 0, 0, 0.92)' }}
    >
      <ButtonModalClose onClose={closeModal} />
      <Container onClick={handleContainerClick}>
        <TwinkUserNameList>
          {!isLoading && data.length
            ? data.map(item => <div key={item.id}>{item.username}</div>)
            : null}
          <div>{twinkCountText}</div>
        </TwinkUserNameList>

        <hr className="divider" />

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

        <InformationButton onClick={showInfo} style={{ left: -64, top: 16 }} />
      </Container>
    </SettingsModalsLayout>
  )
}

export default ModalTwinks
