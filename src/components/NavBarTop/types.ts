import type { HTMLProps } from 'react'

export type NavBarTopProps = {
  showInfoText: string[]
  navType: string
  navTypes: string[]
  setNavType: (value: string) => void
  buttons: { navType: string; iconComponent: JSX.Element; alertCount?: number }[]
} & HTMLProps<HTMLDivElement>
