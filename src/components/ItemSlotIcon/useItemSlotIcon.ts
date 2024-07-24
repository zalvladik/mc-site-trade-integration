import { useEffect, useRef } from 'react'
import { useItemHoverDescription } from 'src/contexts/ItemHoverDescriptionProvider/useItemHoverDescription'

import type { UseItemSlotIconProps } from 'src/components/ItemSlotIcon/types'

export const useItemSlotIcon = ({
  description = null,
  display_name,
  durability = null,
  didShowDescription,
}: UseItemSlotIconProps) => {
  const { onVisible, offVisible } = useItemHoverDescription()
  const itemSlotIconRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    if (!didShowDescription) return

    const handleMouseEnter = () => {
      const element = itemSlotIconRef.current

      if (!element || !display_name) return

      const { top, left, width, height } = element.getBoundingClientRect()

      onVisible({
        description,
        title: display_name,
        isVisible: true,
        topSlotIcon: top,
        leftSlotIcon: left,
        heightSlotIcon: height,
        widthSlotIcon: width,
        durability,
      })
    }

    const handleMouseLeave = () => {
      offVisible()
    }

    const element = itemSlotIconRef.current

    if (element) {
      element.addEventListener('mouseenter', handleMouseEnter)
      element.addEventListener('mouseleave', handleMouseLeave)
    }

    return () => {
      if (element) {
        element.removeEventListener('mouseenter', handleMouseEnter)
        element.removeEventListener('mouseleave', handleMouseLeave)
      }
    }
  }, [description, display_name])

  return { itemSlotIconRef }
}
