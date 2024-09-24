import {
  BuildDescription,
  BuildImage,
  BuildInfo,
  BuildPasport,
  BuildsList,
  BuildTitle,
  ContainerBuilds,
  ContainerMap,
} from 'src/pages/MapPage/styles'
import { MapPartsEnum } from 'src/types'

import NavBarTop from 'src/components/NavBarTop'

import { useMapPage } from './useMapPage'

const MapPage = (): JSX.Element => {
  const { navType, setNavType, showInfoText, navTypes, buttons } = useMapPage()

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

      {navType === MapPartsEnum.MAP && (
        <ContainerMap>
          <iframe
            title="map"
            src="https://map.vinland.space/"
            width="100%"
            height="100%"
          />
        </ContainerMap>
      )}

      {navType === MapPartsEnum.BUILDS && (
        <ContainerBuilds>
          <BuildsList>
            <div>
              <BuildImage
                style={{
                  backgroundImage: 'url(/assets/builds/Mausoleum.png)',
                }}
              />
              <BuildInfo>
                <BuildTitle style={{ textAlign: 'start' }}>
                  Мавзолей Героям
                </BuildTitle>
                <BuildDescription>І вам слава, сині гори,</BuildDescription>
                <BuildDescription>І вам, лицарі великі,</BuildDescription>
                <BuildDescription>Борітеся — поборете!</BuildDescription>

                <BuildDescription>Вам Бог помагає!</BuildDescription>
                <BuildDescription>За вас правда, за вас слава</BuildDescription>
                <BuildDescription>І воля святая!</BuildDescription>
              </BuildInfo>
              <BuildPasport>
                <div>Автор - ByLbA</div>
                <div>x: 1900 y: -1600</div>
              </BuildPasport>
            </div>
            <div>
              <BuildImage
                style={{
                  backgroundImage: 'url(/assets/builds/dianessa_tample.png)',
                }}
              />
              <BuildInfo>
                <BuildTitle>Архів похоті</BuildTitle>
                <BuildDescription>
                  В світі Vinland, дуже давно жила міфічна Богиня Діанесса. Хоть вона
                  і була Богинею похоті, але віддана була тільки одному.
                </BuildDescription>
                <BuildDescription>
                  Нажаль, він був простим смертним і через це її щастя тривало
                  недовго. Невдовзі його не стало, а Богиня Діанесса втратила
                  розсудок і її поглинула глибока печаль і тьма.
                </BuildDescription>
                <BuildDescription>
                  Ми не знаєм де вона зараз, але на землях vinland ходить її
                  реінкарнація, сосуд... Ну як мінімум так кажуть жителі цих земель.
                </BuildDescription>
              </BuildInfo>

              <BuildPasport>
                <div>Автор - France</div>
                <div>x: 100 y: 70</div>
              </BuildPasport>
            </div>
          </BuildsList>
        </ContainerBuilds>
      )}
    </>
  )
}

export default MapPage
