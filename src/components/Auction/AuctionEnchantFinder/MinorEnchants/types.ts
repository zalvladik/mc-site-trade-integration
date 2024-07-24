import type { HTMLProps } from 'react'
import type { EnchantsWithMaxLvlT } from 'src/contexts/AuctionProvider/types'
import type { EnchantsEnum } from 'src/types'

export type MinorEnchantsProps = {
  enchants: (EnchantsEnum | EnchantsEnum[])[]
  selectedEnchants: EnchantsWithMaxLvlT
  setEnchantLvl: (value: EnchantsEnum) => void
  setSelectedMinorEnchantsToggle: (
    value1: EnchantsEnum,
    value2?: EnchantsEnum | EnchantsEnum[],
  ) => void
} & HTMLProps<HTMLDivElement>
