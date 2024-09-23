import { useEffect, useRef, useState } from 'react'
import { useToast } from 'src/contexts/ToastProvider/useToast'

export const useNavBarTop = (showInfoText: string[]) => {
  const [strokeDasharrayLine, setStrokeDasharrayLine] = useState<number>(0)

  const refContainerWrapper = useRef<HTMLDivElement>(null)
  const toast = useToast()

  const showInfo = () => {
    toast.info({
      message: showInfoText,
      autoHideDuration: 8,
      fontSize: 20,
    })
  }

  useEffect(() => {
    if (refContainerWrapper.current) {
      const width =
        refContainerWrapper.current.offsetWidth +
          refContainerWrapper.current.offsetHeight || 0

      setStrokeDasharrayLine(width / 2 - 4)
    }
  }, [])

  return { showInfo, refContainerWrapper, strokeDasharrayLine }
}
