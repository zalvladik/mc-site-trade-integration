import { useUserAdvancements } from 'src/hooks/useUserAdvancements'

import schema from 'src/components/AdvancementsMap/schema.json'
import type { Advancement } from 'src/components/AdvancementsMap/types'

export const useAdvancementsMap = (username: string) => {
  const { data, isLoading } = useUserAdvancements(username)

  const schemaAdvancements: Record<string, Advancement> = schema

  const advancements = data?.advancements ?? []

  advancements.forEach((item: string) => {
    if (schemaAdvancements[item.split('_').join('')]) {
      schemaAdvancements[item.split('_').join('')].isDone = true
    }
  })

  const userAdvancements = Object.values(schemaAdvancements)

  const body = document.querySelector('body')
  const screenWidth = body ? body.offsetWidth : 0

  const initialPositionX = screenWidth / 2 - 500

  return {
    userAdvancements,
    isLoading,
    screenWidth,
    initialPositionX,
  }
}
