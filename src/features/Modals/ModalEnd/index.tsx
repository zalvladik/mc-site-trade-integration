import ButtonModalClose from 'src/components/ButtonModalClose'
import DefaultButton from 'src/components/DefaultButton'

import {
  Container,
  FormContainer,
  InfoEndList,
} from 'src/features/Modals/ModalEnd/styles'
import type { ModalEndProps } from 'src/features/Modals/ModalEnd/types'
import { useModalEnd } from 'src/features/Modals/ModalEnd/useModalEnd'
import SettingsModalsLayout from 'src/features/Modals/SettingsModalsLayout'

const ModalEnd = ({
  isOpen,
  closeModal,
  handleContainerClick,
}: ModalEndProps): JSX.Element => {
  const { isBought, isLoading, mutate, isCanBye } = useModalEnd()

  return (
    <SettingsModalsLayout
      isOpen={isOpen}
      closeModal={closeModal}
      style={{ backgroundColor: 'rgba(0, 0, 0, 0.92)' }}
    >
      <ButtonModalClose onClose={closeModal} />
      <Container onClick={handleContainerClick}>
        <FormContainer>
          <InfoEndList>
            <li style={{ color: 'rgb(220, 20, 220)' }}>
              1 вересня (неділя) буде розширення енду до 16к на 16к.
            </li>
            <li>
              Наразі енд 8к на 8к. Приблизно можна буде залутати біля 5-6 шалкерів
              елітр.
            </li>

            <li>
              Але, одразу після розширення енду, 1 годину неможна буде попасти в енд
              гравцям які <span style={{ color: 'rgb(220 40 40)' }}>НЕ</span>{' '}
              оплатять доступ в Енд.
            </li>

            <li>Потрібно оплатити 2 стаки діамантової руди 💎</li>
          </InfoEndList>

          <DefaultButton
            style={{ width: 400, margin: '20px auto 0px auto' }}
            isLoading={isLoading}
            disabled={Boolean(isBought || isLoading || !isCanBye)}
            onClick={() => mutate()}
          >
            {isBought
              ? 'Ви уже придбали доступ'
              : isCanBye
                ? 'Купити доступ'
                : 'Недостатньо коштів'}
          </DefaultButton>
        </FormContainer>
      </Container>
    </SettingsModalsLayout>
  )
}

export default ModalEnd
