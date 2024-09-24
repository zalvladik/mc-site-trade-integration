import { romeNumbersObject } from 'src/constants'

import {
  ColoredBorderContainer,
  Container,
  WorldBar,
  WorldBarWrapper,
  WorldLevelList,
} from 'src/components/ExpansionWorldsCategory/styles'
import type { ExpansionWorldsCatetgoryProps } from 'src/components/ExpansionWorldsCategory/types'

const ExpansionWorldsCategory = ({
  colors,
}: ExpansionWorldsCatetgoryProps): JSX.Element => {
  const romeNumbers = Object.keys(romeNumbersObject)

  return (
    <Container>
      <WorldBarWrapper>
        <ColoredBorderContainer colors={colors} showAfter style={{ height: 60 }}>
          <div>
            <WorldBar>
              <div>
                <div />
                <div />
              </div>
            </WorldBar>
          </div>
        </ColoredBorderContainer>
      </WorldBarWrapper>
      <ColoredBorderContainer
        colors={colors}
        showAfter={false}
        style={{ height: '100%' }}
      >
        <div>
          <WorldLevelList>
            {romeNumbers.map(item => (
              <div
                key={item}
                style={{ opacity: romeNumbersObject[item] <= 4 ? 1 : 0.3 }}
              >
                {item}
              </div>
            ))}
          </WorldLevelList>
        </div>
      </ColoredBorderContainer>
    </Container>
  )
}

export default ExpansionWorldsCategory
