import { romeNumbersObject } from 'src/constants'
import { moneyCalculator } from 'src/helpers'

import {
  BodyContainer,
  ColoredBorderContainer,
  Container,
  DonationContainer,
  MoneyStorage,
  MoneyStorageContainer,
  StyledSkeleton,
  WorldBar,
  WorldBarWrapper,
  WorldLevelList,
} from 'src/components/WorldExpansionCategory/styles'
import type { WorldExpansionCatetgoryProps } from 'src/components/WorldExpansionCategory/types'

import { useWorldExpansionCategory } from './useWorldExpansionCategory'

import DefaultButton from '../DefaultButton'
import DefaultInput from '../inputs/DefaultInput'

const WorldExpansionCategory = ({
  worldType,
  colors,
}: WorldExpansionCatetgoryProps): JSX.Element => {
  const {
    currentWorldExpansionLvl,
    setCurrentWorldExpansionLvl,
    isLoadingGetWorldExpansion,
    dataGetWorldExpansion,
    currentWorldExpansion,
    isLoadingUpgradeWorldExpansion,
    value,
    handleChangeValue,
    handleError,
    handleExpansion,
    howMuchNeed,
    user,
  } = useWorldExpansionCategory(worldType)

  return (
    <Container>
      <StyledSkeleton
        isLoading={isLoadingGetWorldExpansion}
        isDataExist={dataGetWorldExpansion.length}
        skeletonLength={1}
        emptyText=""
        size={160}
      >
        <>
          <WorldBarWrapper>
            <ColoredBorderContainer colors={colors} showAfter style={{ height: 60 }}>
              {!isLoadingGetWorldExpansion && (
                <div>
                  <WorldBar>
                    {(() => {
                      const procentOne =
                        (currentWorldExpansion.moneyStorage /
                          currentWorldExpansion.cost) *
                        100

                      return (
                        <div>
                          <div
                            style={{
                              width: `${procentOne}%`,
                            }}
                          />
                          <div style={{ width: `${100 - procentOne}%` }} />
                        </div>
                      )
                    })()}
                  </WorldBar>
                </div>
              )}
            </ColoredBorderContainer>
          </WorldBarWrapper>

          <ColoredBorderContainer
            colors={colors}
            showAfter={false}
            style={{ height: '100%' }}
          >
            <div>
              <WorldLevelList>
                {Array.from({ length: 10 }).map((_, i) => (
                  <div
                    key={i + 1}
                    style={{
                      opacity: i + 1 <= dataGetWorldExpansion.length ? 1 : 0.2,
                      color:
                        currentWorldExpansionLvl === i + 1 ? '#03dddd' : 'white',
                      textShadow:
                        currentWorldExpansionLvl === i + 1
                          ? '0px 0px 4px rgb(214, 214, 214)'
                          : '3px 3px 1px rgba(120, 120, 120, 1)',
                    }}
                    onClick={() => {
                      if (i + 1 > dataGetWorldExpansion.length) return

                      setCurrentWorldExpansionLvl(i + 1)
                    }}
                  >
                    {romeNumbersObject[i + 1]}
                  </div>
                ))}
              </WorldLevelList>

              <BodyContainer>
                <MoneyStorageContainer>
                  <div />
                  {(() => {
                    if (!dataGetWorldExpansion.length) return <div />

                    return (
                      <MoneyStorage>
                        <div>
                          {`${+currentWorldExpansion.moneyStorage} / ${+currentWorldExpansion.cost}`}
                        </div>
                        <div>
                          {`${moneyCalculator(currentWorldExpansion.moneyStorage)} / ${moneyCalculator(currentWorldExpansion.cost)}`}
                        </div>
                        <div>
                          {`Залишилось ${howMuchNeed} [${moneyCalculator(howMuchNeed)}]`}
                        </div>
                      </MoneyStorage>
                    )
                  })()}
                </MoneyStorageContainer>
                <DonationContainer>
                  <DefaultInput
                    style={{ width: 320 }}
                    containerStyle={{ width: 'max-content' }}
                    rightIconUrl="items_for_ui/deepslate_diamond_ore.png"
                    rightIconSize={40}
                    value={value}
                    onChange={e => {
                      const value = Number(e.target.value)

                      if (value < 0) return

                      if (value > howMuchNeed) handleError()

                      handleChangeValue(e.target.value)
                    }}
                  />
                  <DefaultButton
                    style={{ width: 320 }}
                    disabled={
                      isLoadingGetWorldExpansion ||
                      !Number(value) ||
                      Number(value) > Number(howMuchNeed) ||
                      Number(value) > user.money ||
                      isLoadingUpgradeWorldExpansion
                    }
                    isLoading={isLoadingUpgradeWorldExpansion}
                    onClick={handleExpansion}
                  >
                    Закинути
                  </DefaultButton>
                </DonationContainer>
              </BodyContainer>
            </div>
          </ColoredBorderContainer>
        </>
      </StyledSkeleton>
    </Container>
  )
}

export default WorldExpansionCategory
