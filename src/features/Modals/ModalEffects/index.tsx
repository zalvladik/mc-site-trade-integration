import { ppEffects, ppStyles } from 'src/constants'

import ButtonModalClose from 'src/components/ButtonModalClose'
import DefaultButton from 'src/components/DefaultButton'

import {
  AddEffectForm,
  AddNewEffect,
  AddNewEffectContainer,
  Container,
  EffectContainer,
  EffectInfoContainer,
  EffectListContainer,
  EffectsList,
  EffectStylesContainer,
  GalleryContainer,
  GalleryItem,
  GalleryRow,
  StyleContainer,
} from 'src/features/Modals/ModalEffects/styles'
import type { ModalEffectsProps } from 'src/features/Modals/ModalEffects/types'
import { useModalEffects } from 'src/features/Modals/ModalEffects/useModalEffects'
import SettingsModalsLayout from 'src/features/Modals/SettingsModalsLayout'

const ModalEffects = ({
  isOpen,
  closeModal,
  handleContainerClick,
}: ModalEffectsProps): JSX.Element => {
  const {
    data,
    isLoading,
    deleteEffect,
    isCreateEffect,
    setIsCreateEffect,
    effectStyle,
    selectedEffect,
    setEffectStyle,
    setSelectedEffect,
    addEffect,
    isLoadingCreatePpp,
  } = useModalEffects()

  return (
    <SettingsModalsLayout
      isOpen={isOpen}
      closeModal={closeModal}
      style={{ backgroundColor: 'rgba(0, 0, 0, 0.92)' }}
    >
      <ButtonModalClose onClose={closeModal} />
      <Container onClick={handleContainerClick}>
        <AddEffectForm
          style={{
            width: isCreateEffect ? 1000 : 0,
            border: isCreateEffect ? '2px solid #5f5f5f' : '',
            padding: isCreateEffect ? '26px' : '0px',
            marginRight: isCreateEffect ? '14px' : '0px',
          }}
        >
          {isCreateEffect && (
            <>
              <h1>Виберіть тип еффекту</h1>
              <EffectStylesContainer>
                {ppStyles.map(item => (
                  <div
                    key={item}
                    style={{
                      backgroundImage: `url(/assets/effect_styles/${item}.gif)`,
                      border:
                        effectStyle === item
                          ? '4px solid #40e533'
                          : '2px solid whitesmoke',
                    }}
                    onClick={() => {
                      setEffectStyle(item)
                    }}
                  />
                ))}
              </EffectStylesContainer>

              <h1>Виберіть сам еффект</h1>
              <GalleryContainer className="board-scroll-x">
                <GalleryRow>
                  {ppEffects.map((image, index) => (
                    <GalleryItem
                      key={index}
                      style={{
                        backgroundImage: `url(/assets/effects/${image}.png)`,
                        border:
                          selectedEffect === image
                            ? '4px solid #40e533'
                            : '2px solid whitesmoke',
                      }}
                      onClick={() => {
                        setSelectedEffect(image)
                      }}
                    />
                  ))}
                </GalleryRow>
              </GalleryContainer>

              <DefaultButton
                style={{ width: 360, margin: '50px auto 20px auto' }}
                disabled={!effectStyle || !selectedEffect || isLoadingCreatePpp}
                onClick={() => {
                  addEffect()
                }}
              >
                Добавити еффект
              </DefaultButton>
            </>
          )}
        </AddEffectForm>
        <EffectInfoContainer>
          <h1>Еффекти</h1>

          <EffectsList>
            {data &&
              !isLoading &&
              data.map(item => (
                <EffectListContainer
                  key={item.uuid}
                  onClick={() => {
                    deleteEffect(item.uuid)
                  }}
                >
                  <EffectContainer
                    style={{
                      backgroundImage: `url(/assets/effects/${item.effect}.png)`,
                    }}
                  />
                  <StyleContainer
                    style={{
                      backgroundImage: `url(/assets/effect_styles/${item.style}.gif)`,
                    }}
                  />
                  <div />
                </EffectListContainer>
              ))}

            {Array.from({ length: 3 - data.length }).map((_, i) => (
              <AddNewEffectContainer
                key={i}
                style={{ textAlign: 'center' }}
                onClick={() => {
                  setIsCreateEffect(true)
                }}
              >
                <AddNewEffect style={{ height: 160 }} />
              </AddNewEffectContainer>
            ))}
          </EffectsList>
        </EffectInfoContainer>
      </Container>
    </SettingsModalsLayout>
  )
}

export default ModalEffects
