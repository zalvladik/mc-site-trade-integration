import { ppEffects, ppStyles } from 'src/constants'

import DefaultButton from 'src/components/DefaultButton'
import InformationButton from 'src/components/InformationButton'
import {
  AddEffectForm,
  Container,
  EffectInfoContainer,
  EffectListContainer,
  EffectsList,
  EffectStylesContainer,
  GalleryItem,
  GalleryRow,
  PageButtonsList,
} from 'src/components/Profile/ProfileEffects/styles'

import { useProfileEffects } from './useProfileEffects'

const ProfileEffects = (): JSX.Element => {
  const {
    // user,
    data,
    isLoading,
    deleteEffect,
    // isLoadingDeletePp,
    showInfo,
    effectStyle,
    selectedEffect,
    setEffectStyle,
    setSelectedEffect,
    addEffect,
    isLoadingCreatePpp,
    ppEffectsPage,
    changePpEffectsPage,
  } = useProfileEffects()

  return (
    <Container>
      <AddEffectForm className="heartbeat-outline">
        <EffectStylesContainer>
          {ppStyles.map(item => (
            <div
              key={item}
              style={{
                backgroundImage: `url(/assets/effect_styles/${item}.gif)`,
                border:
                  effectStyle === item
                    ? '4px solid #40e533'
                    : '1px solid whitesmoke',
              }}
              onClick={() => {
                setEffectStyle(item)
              }}
            />
          ))}
        </EffectStylesContainer>

        <div
          style={{
            border: '4px solid rgba(0,0,0,0.6)',
            borderRadius: '8px',
            margin: '20px 0px',
          }}
        />

        <GalleryRow>
          {ppEffects
            .slice(ppEffectsPage * 18 - 18, ppEffectsPage * 18)
            .map((image, index) => (
              <GalleryItem
                key={index}
                style={{
                  backgroundImage: `url(/assets/effects/${image}.png)`,
                  border:
                    selectedEffect === image
                      ? '4px solid #40e533'
                      : '1px solid whitesmoke',
                }}
                onClick={() => {
                  setSelectedEffect(image)
                }}
              />
            ))}
        </GalleryRow>

        <PageButtonsList>
          {Array.from({ length: 4 }).map((_, i) => (
            <div
              key={i}
              style={{
                opacity: ppEffectsPage === i + 1 ? 1 : 0.3,
                pointerEvents: ppEffectsPage === i + 1 ? 'none' : 'auto',
              }}
              onClick={() => {
                changePpEffectsPage(i + 1)
                setSelectedEffect('')
              }}
            >
              {i + 1}
            </div>
          ))}
        </PageButtonsList>
      </AddEffectForm>

      <DefaultButton
        style={{ width: 360, margin: '0px auto' }}
        disabled={!effectStyle || !selectedEffect || isLoadingCreatePpp}
        onClick={() => {
          addEffect()
        }}
      >
        Добавити ефект
      </DefaultButton>

      <InformationButton
        onClick={showInfo}
        style={{ left: '50%', bottom: '-80px' }}
      />

      <EffectInfoContainer>
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
                <div
                  style={{
                    backgroundImage: `url(/assets/effects/${item.effect}.png)`,
                  }}
                />
                <div
                  style={{
                    backgroundImage: `url(/assets/effect_styles/${item.style}.gif)`,
                  }}
                />
                <div />
              </EffectListContainer>
            ))}
        </EffectsList>
      </EffectInfoContainer>
    </Container>
  )
}

export default ProfileEffects
