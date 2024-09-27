import { Container } from 'src/pages/ExpansionWorldsPage/styles'
import { useExpansionWorldsPage } from 'src/pages/ExpansionWorldsPage/useExpansionWorldsPage'
import { WorldEnum } from 'src/types'

import NavBarTop from 'src/components/NavBarTop'
import WorldExpansionCategory from 'src/components/WorldExpansionCategory'

const ExpansionWorldsPage = (): JSX.Element => {
  const { navType, setNavType, showInfoText, navTypes, buttons } =
    useExpansionWorldsPage()

  return (
    <>
      <NavBarTop
        {...{
          navType,
          setNavType,
          buttons,
          navTypes,
          showInfoText,
        }}
      />
      <Container>
        {navType === WorldEnum.WORLD && (
          <WorldExpansionCategory
            key={WorldEnum.WORLD}
            worldType={WorldEnum.WORLD}
            colors={['#0e230e', '#2ef00f']}
          />
        )}
        {navType === WorldEnum.WORLD_NETHER && (
          <WorldExpansionCategory
            key={WorldEnum.WORLD_NETHER}
            worldType={WorldEnum.WORLD_NETHER}
            colors={['#240f0f', '#f00f0f']}
          />
        )}
        {navType === WorldEnum.WORLD_THE_END && (
          <WorldExpansionCategory
            key={WorldEnum.WORLD_THE_END}
            worldType={WorldEnum.WORLD_THE_END}
            colors={['#240f1d', '#f00fbf']}
          />
        )}
      </Container>
    </>
  )
}

export default ExpansionWorldsPage
