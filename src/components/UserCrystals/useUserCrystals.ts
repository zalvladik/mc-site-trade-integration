import { useCallback, useState } from 'react'
import { useToast } from 'src/contexts/ToastProvider/useToast'
import { useGetUserCrystals } from 'src/hooks/useGetUserCrystals'

export const useUserCrystals = () => {
  const toast = useToast()

  const [selectedItems, setSelectedItems] = useState<number[]>([])
  const [searchValue, setSearchValue] = useState('')

  const [page, setPage] = useState(1)

  const { data: items, isLoading } = useGetUserCrystals()

  const showInfo = () => {
    toast.info({
      message: [
        'Щоб забрати преедмети,',
        'виберіть і натисніть забрати.',
        'Потім заберіть їх за допомогою квитка',
        '/trade предмети(забрати) id-квитка ',
      ],
      autoHideDuration: 8,
      fontSize: 20,
    })
  }

  const selectToogle = useCallback(
    (value: number[]) => {
      const selectToogleArrayFilter = (value: number[]): number[] => {
        if (!selectedItems.length) return [...value]

        const oldIds = selectedItems.filter(itemId => value.includes(itemId))

        if (!oldIds.length) return [...selectedItems, ...value]

        const newIdsArray = Array.from(new Set([...value, ...selectedItems]))

        return newIdsArray.filter(itemId => !oldIds.includes(itemId))
      }

      if (Array.isArray(value)) {
        const itemsIds27count = selectToogleArrayFilter(value).slice(0, 27)

        setSelectedItems(itemsIds27count)
      }
    },
    [selectedItems],
  )

  const styleForItemBorder = (id: number) => {
    return {
      backgroundImage: selectedItems.find(item => Number(item) === Number(id))
        ? 'url(/assets/items_for_ui/slot_green.png)'
        : 'url(/assets/items_for_ui/slot.png)',
    }
  }

  const maxPage = Math.ceil(items.length / 27)

  const getItemsForPage = () => {
    const firstItemInPage = 27 * (page - 1)
    const lastItemInPage = firstItemInPage + 27

    return items.slice(firstItemInPage, lastItemInPage)
  }

  const itemsOnPage = getItemsForPage()

  if (!itemsOnPage.length && items.length) setPage(page - 1)

  const searchFilter = (value: string) => {
    setSearchValue(value)

    if (maxPage === 1) return

    if (page > 1) setPage(1)
  }

  const itemListProps = {
    isLoading,
    items: itemsOnPage,
    styleForItemBorder,
    selectToogle,
  }

  const paginationTabProps = {
    page,
    setPage,
    maxPage,
  }

  return {
    searchFilter,
    paginationTabProps,
    itemListProps,
    searchValue,
    showInfo,
    selectedItemsLength: selectedItems.length,
    isLoading,
  }
}
