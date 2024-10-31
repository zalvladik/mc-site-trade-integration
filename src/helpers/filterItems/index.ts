import type { FilteredItemsProps } from 'src/helpers/filterItems/types'
import type { ItemT } from 'src/services/api/Items/types'
import type { ShulkerT } from 'src/services/api/Shulker/types'

export const filterItems = ({
  items,
  searchValue,
  selectedCaterogies,
}: FilteredItemsProps): (ItemT | ShulkerT)[] => {
  const sortedById = items.sort((a, b) => {
    return a.id - b.id
  })

  const searchedItems = sortedById.filter(item => {
    const type = item.type.toLowerCase()
    const value = searchValue.toLowerCase()

    return type.includes(value) || item.display_name.toLowerCase().includes(value)
  })

  const itemsWithLot = searchedItems.filter(item => item.lot)
  const itemsWithoutLot = searchedItems.filter(item => !item.lot)

  const sorteredByExistLot = [...itemsWithoutLot, ...itemsWithLot]

  if (!selectedCaterogies.length) return sorteredByExistLot

  const sorteredByCategory = sorteredByExistLot.filter(({ categories }) => {
    return categories.find(category => !!selectedCaterogies.includes(category))
  })

  return sorteredByCategory
}
