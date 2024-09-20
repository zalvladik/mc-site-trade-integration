import { useState } from 'react'
import { useToast } from 'src/contexts/ToastProvider/useToast'
import { MapPartsEnum } from 'src/types'

export const useMapPage = () => {
  const [navMap, setNavMap] = useState<MapPartsEnum>(MapPartsEnum.MAP)

  const toast = useToast()

  const showInfo = () => {
    toast.info({
      message: [
        'Щоб добавити регіон, будівлю або арт,',
        'вам потрібно звернутись до Адміністрації',
      ],
      autoHideDuration: 8,
      fontSize: 20,
    })
  }

  const showInfoArt = () => {
    toast.error({
      message: ['Покищо розділ для артів відутній.'],
      autoHideDuration: 8,
      fontSize: 20,
    })
  }

  return { navMap, setNavMap, showInfo, showInfoArt }
}
