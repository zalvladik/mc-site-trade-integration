import { useState } from 'react'
import { HiOutlineBuildingOffice2 } from 'react-icons/hi2'
import { IoBrushOutline, IoMapOutline } from 'react-icons/io5'
import { MapPartsEnum } from 'src/types'

export const useMapPage = (): any => {
  const [navType, setNavType] = useState<MapPartsEnum>(MapPartsEnum.MAP)

  const buttons = [
    { iconComponent: <IoMapOutline size={46} />, navType: MapPartsEnum.MAP },
    {
      iconComponent: <HiOutlineBuildingOffice2 size={46} />,
      navType: MapPartsEnum.BUILDS,
    },
    { iconComponent: <IoBrushOutline size={46} />, navType: MapPartsEnum.ARTS },
  ]

  const navTypes = [MapPartsEnum.MAP, MapPartsEnum.BUILDS, MapPartsEnum.ARTS]

  const showInfoText = [
    'Щоб добавити регіон, будівлю або арт,',
    'вам потрібно звернутись до Адміністрації',
  ]

  return { navType, setNavType, showInfoText, navTypes, buttons }
}
