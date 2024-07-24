import { useEffect, useRef, useState } from 'react'
import { enchantTranslations } from 'src/constants'
import type { EnchantsEnum } from 'src/types'

export const useMinorEnchants = () => {
  const [selected, setSelected] = useState<boolean>(false)
  const [secondMinorEnchants, setSecondMinorEnchants] = useState<EnchantsEnum[]>([])

  const overflowRef = useRef<HTMLDivElement>(null)
  const minorEnchantsRef = useRef<HTMLDivElement>(null)
  const mainContainerRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    if (overflowRef.current && minorEnchantsRef.current) {
      if (selected) {
        const { height } = minorEnchantsRef.current.getBoundingClientRect()
        overflowRef.current.style.height = `${height}px`
      } else {
        overflowRef.current.style.height = '0px'
      }
    }
  }, [selected])

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        mainContainerRef.current &&
        !mainContainerRef.current.contains(event.target as Node)
      ) {
        setSelected(false)
      }
    }

    window.addEventListener('click', handleClickOutside)

    return () => {
      window.removeEventListener('click', handleClickOutside)
    }
  }, [selected])

  return {
    selected,
    setSelected,
    overflowRef,
    minorEnchantsRef,
    mainContainerRef,
    enchantTranslations,
    secondMinorEnchants,
    setSecondMinorEnchants,
  }
}
