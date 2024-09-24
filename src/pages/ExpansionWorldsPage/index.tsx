import { Container } from 'src/pages/ExpansionWorldsPage/styles'
import { useExpansionWorldsPage } from 'src/pages/ExpansionWorldsPage/useExpansionWorldsPage'
import { ExpansionWorldsEnum } from 'src/types'

import ExpansionWorldsCategory from 'src/components/ExpansionWorldsCategory'
import NavBarTop from 'src/components/NavBarTop'

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
        {navType === ExpansionWorldsEnum.WORLD && (
          <ExpansionWorldsCategory colors={['#0e230e', '#2ef00f']} />
        )}
        {navType === ExpansionWorldsEnum.WORLD_NETHER && (
          <ExpansionWorldsCategory colors={['#240f0f', '#f00f0f']} />
        )}
        {navType === ExpansionWorldsEnum.WORLD_END && (
          <ExpansionWorldsCategory colors={['#240f1d', '#f00fbf']} />
        )}
      </Container>
    </>
  )
}

export default ExpansionWorldsPage
