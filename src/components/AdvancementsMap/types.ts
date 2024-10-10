export type AdvancementsMapProps = {
  userId: number
}

export type Advancement = {
  top: number
  left: number
  figure?: string
  itemIcon: string
  title: string
  description: string
  isDone?: boolean
}
