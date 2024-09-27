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
    setCurrentWorldExpansionLvl,
    isLoadingGetWorldExpansion,
    dataGetWorldExpansion,
    currentWorldExpansion,
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
                      opacity: i + 1 <= dataGetWorldExpansion.length ? 1 : 0.3,
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

                    const {
                      stack: stackMoneyStorage,
                      restMoney: restMoneyMoneyStorage,
                    } = moneyCalculator(currentWorldExpansion.moneyStorage)
                    const { stack: stackCost, restMoney: restMoneyCost } =
                      moneyCalculator(currentWorldExpansion.cost)

                    const howMuchNeed =
                      currentWorldExpansion.cost - currentWorldExpansion.moneyStorage

                    const {
                      stack: stackhowMuchNeed,
                      restMoney: restMoneyhowMuchNeed,
                    } = moneyCalculator(howMuchNeed)

                    return (
                      <MoneyStorage>
                        <div>
                          {`${currentWorldExpansion.moneyStorage} / ${currentWorldExpansion.cost}`}
                        </div>
                        <div>
                          {`${stackMoneyStorage}ст.${restMoneyMoneyStorage}шт. / ${stackCost}ст.${restMoneyCost}шт.`}
                        </div>
                        <div>
                          {`Залишилось ${howMuchNeed} [${stackhowMuchNeed}ст.${restMoneyhowMuchNeed}шт.]`}
                        </div>
                      </MoneyStorage>
                    )
                  })()}
                </MoneyStorageContainer>
                <DonationContainer>
                  <DefaultInput
                    style={{ width: 320 }}
                    containerStyle={{ width: 'max-content' }}
                    rightIcon={false}
                  />
                  <DefaultButton style={{ width: 320 }}>Допомогти</DefaultButton>
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
