import type { CrystalT } from 'src/services/api/Crystal/types'
import type { CSSProperties } from 'styled-components'

export type CrystalListProps = {
  items: CrystalT[]
  selectToogle: (id: number[]) => void
  isLoading: boolean
  styleForItemBorder: (id: number) => CSSProperties
}
