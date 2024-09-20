import { HiOutlineBuildingOffice2 } from 'react-icons/hi2'
import { IoBrushOutline, IoMapOutline } from 'react-icons/io5'
import {
  BuildDescription,
  BuildImage,
  BuildInfo,
  BuildPasport,
  BuildsList,
  BuildTitle,
  ContainerBuilds,
  ContainerMap,
  MapNavContainer,
} from 'src/pages/MapPage/styles'
import { MapPartsEnum } from 'src/types'

import InformationButton from 'src/components/InformationButton'

import { useMapPage } from './useMapPage'

const MapPage = (): JSX.Element => {
  const { setNavMap, navMap, showInfo, showInfoArt } = useMapPage()

  return (
    <>
      <MapNavContainer>
        <div
          style={{
            opacity: navMap === MapPartsEnum.MAP ? 1 : 0.3,
          }}
          onClick={() => {
            setNavMap(MapPartsEnum.MAP)
          }}
        >
          <IoMapOutline size={46} />
        </div>
        <div
          style={{
            opacity: navMap === MapPartsEnum.BUILDS ? 1 : 0.3,
          }}
          onClick={() => {
            setNavMap(MapPartsEnum.BUILDS)
          }}
        >
          <HiOutlineBuildingOffice2 size={46} />
        </div>
        <div
          style={{
            opacity: navMap === MapPartsEnum.ARTS ? 1 : 0.3,
          }}
          onClick={showInfoArt}
        >
          <IoBrushOutline style={{ color: 'red' }} size={46} />
        </div>
        <InformationButton onClick={showInfo} style={{ right: -60, top: 22 }} />
      </MapNavContainer>

      {navMap === MapPartsEnum.MAP && (
        <ContainerMap>
          <iframe
            title="map"
            src="https://map.uk-land.space/"
            width="100%"
            height="100%"
          />
        </ContainerMap>
      )}

      {navMap === MapPartsEnum.BUILDS && (
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
                <BuildDescription>І воля святая!"</BuildDescription>
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
                  В світі UK-land, дуже давно жила міфічна Богиня Діанесса. Хоть вона
                  і була Богинею похоті, але віддана була тільки одному.
                </BuildDescription>
                <BuildDescription>
                  Нажаль, він був простим смертним і через це її щастя тривало
                  недовго. Невдовзі його не стало, а Богиня Діанесса втратила
                  розсудок і її поглинула глибока печаль і тьма.
                </BuildDescription>
                <BuildDescription>
                  Ми не знаєм де вона зараз, але на землях UK-land ходить її
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
