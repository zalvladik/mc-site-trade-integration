import type { Dispatch, SetStateAction } from 'react'
import { useEffect, useMemo, useRef, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { AuctionFragment } from 'src/constants'
import { AuctionContext } from 'src/contexts'
import type {
  AuctionContextDataT,
  AuctionProviderT,
} from 'src/contexts/AuctionProvider/types'
import { auctionUrlQueryParams } from 'src/helpers'
import { useGetEnchantLots } from 'src/hooks/useGetEnchantLots'
import { useGetLots } from 'src/hooks/useGetLots'
import { useGetUserLots } from 'src/hooks/useGetUserLots'
import { useLotsSearchParams } from 'src/hooks/useLotsSearchParams'
import type { LotT } from 'src/services/api/Lot/types'

const AuctionProvider = ({ children }: AuctionProviderT): JSX.Element => {
  const navigate = useNavigate()

  const [auctionFragment, setAuctionFragment] = useState<AuctionFragment>(
    AuctionFragment.BUY_LOTS,
  )

  const {
    newByeLotsSearchParams,
    updateFilterListParams,
    updatePrevByeLotsSearchParams,
    updatePrevEnchantSearchParams,
    updateNewByeLotsSearchParams,
    isCanNewFetchGetByeLots,
    filterListParams,
    newEnchantSearchParams,
    updateEnchantSearchParams,
    isCanNewFetchGetEnchantItems,
    updateNewEnchantSearchParams,
  } = useLotsSearchParams()

  const {
    category: currentByeLotsCategory,
    page: currentByeLotPage,
    display_nameOrType: currentByeLotDisplay_nameOrType,
  } = newByeLotsSearchParams

  const {
    page: currentEnchantLotPage,
    itemType: currenEnchantLotDisplay_nameOrType,
  } = newEnchantSearchParams

  const isFirstRender = useRef(true)

  const [currentPageUserLots, setCurrentPageUserLots] = useState(1)

  const [searchValueUserLots, setSearchValueUserLots] = useState('')

  const [storageTotalPagesByeLots, setStorageTotalPagesByeLots] = useState(1)
  const [storageTotalPagesEnchantLots, setStorageTotalPagesEnchantLots] = useState(1)

  const [didShowEnchantControlPanel, setDidShowEnchantControlPanel] = useState(true)

  const { data: dataUserLots, isLoading: isLoadingUserLots } = useGetUserLots()

  const isFragment = {
    isBuyFragment: AuctionFragment.BUY_LOTS === auctionFragment,
    isCreateLotFragment: AuctionFragment.CREATE_LOTS === auctionFragment,
    isUserLotsFragment: AuctionFragment.USER_LOTS === auctionFragment,
    isEnchantFinderFragment: AuctionFragment.ENCHANT_LOTS === auctionFragment,
  }

  const { isBuyFragment, isEnchantFinderFragment } = isFragment

  const {
    mutate: mutateByeLots,
    data: dataByeLots,
    totalPage: totalPageByeLots,
    isLoading: isLoadingByeLots,
  } = useGetLots()

  const {
    mutate: mutateEnchantLots,
    data: dataEnchantLots,
    totalPage: totalPageEnchantLots,
    isLoading: isLoadingEnchantLots,
  } = useGetEnchantLots()

  const mutateByeLotsHandle = (): void => {
    mutateByeLots({ ...newByeLotsSearchParams, ...filterListParams })
  }

  const mutateEnchantLotsHandle = (): void => {
    mutateEnchantLots({ ...newEnchantSearchParams, ...filterListParams })
  }

  useEffect(() => {
    if (isFirstRender.current) {
      isFirstRender.current = false

      return
    }

    mutateByeLots({
      page: 1,
      category: currentByeLotsCategory,
      display_nameOrType: currentByeLotDisplay_nameOrType,
      ...filterListParams,
    })

    updatePrevByeLotsSearchParams()
    updateNewByeLotsSearchParams({ page: 1 })
    navigate(
      auctionUrlQueryParams(
        currentByeLotsCategory,
        1,
        currentByeLotDisplay_nameOrType,
      ),
    )
  }, [currentByeLotsCategory])

  useEffect(() => {
    if (isFirstRender.current) {
      isFirstRender.current = false

      return
    }

    mutateByeLots({ ...newByeLotsSearchParams, ...filterListParams })

    updatePrevByeLotsSearchParams()
    navigate(
      auctionUrlQueryParams(
        currentByeLotsCategory,
        currentByeLotPage,
        currentByeLotDisplay_nameOrType,
      ),
    )
  }, [currentByeLotPage])

  useEffect(() => {
    if (isFirstRender.current) {
      isFirstRender.current = false

      return
    }

    mutateEnchantLotsHandle()
    updatePrevEnchantSearchParams({})
  }, [currentEnchantLotPage])

  useEffect(() => {
    if (isFirstRender.current) {
      isFirstRender.current = false

      return
    }

    if (totalPageByeLots && totalPageByeLots !== storageTotalPagesByeLots) {
      setStorageTotalPagesByeLots(totalPageByeLots)
    }

    if (
      totalPageEnchantLots &&
      totalPageEnchantLots !== storageTotalPagesEnchantLots
    ) {
      setStorageTotalPagesEnchantLots(totalPageEnchantLots)
    }
  }, [totalPageByeLots, totalPageEnchantLots])

  const filteredUserLots = dataUserLots.filter(lot => {
    const lotElement = (lot?.shulker || lot?.item)!

    return (
      lotElement?.display_name
        .toLowerCase()
        .includes(searchValueUserLots.toLowerCase()) ||
      lotElement?.type.toLowerCase().includes(searchValueUserLots.toLowerCase())
    )
  })

  const totalPageUserLots = Math.ceil(filteredUserLots.length / 8)

  const getUserLotsForPage = (): LotT[] => {
    const firstLotInPage = 8 * (currentPageUserLots - 1)
    const lastLotInPage = firstLotInPage + 8

    return filteredUserLots.slice(firstLotInPage, lastLotInPage)
  }

  const getCurrentPage = (): number => {
    if (isBuyFragment) return newByeLotsSearchParams.page

    if (isEnchantFinderFragment) return newEnchantSearchParams.page

    return currentPageUserLots
  }

  const getSetCurrentPage = (): Dispatch<SetStateAction<any>> => {
    if (isBuyFragment)
      return (value: number) => {
        updateNewByeLotsSearchParams({ page: value })
      }

    if (isEnchantFinderFragment)
      return (value: number) => {
        updateNewEnchantSearchParams({ page: value })
      }

    return setCurrentPageUserLots
  }

  const getTotalPages = (): number => {
    if (isBuyFragment) return storageTotalPagesByeLots

    if (isEnchantFinderFragment) return storageTotalPagesEnchantLots

    return totalPageUserLots
  }

  const getSearchValue = (): string => {
    if (isBuyFragment) return newByeLotsSearchParams.display_nameOrType

    return searchValueUserLots
  }

  const getSetSearchValue = (): Dispatch<SetStateAction<any>> => {
    if (isBuyFragment)
      return (value: string) => {
        updateNewByeLotsSearchParams({ display_nameOrType: value })
      }

    return setSearchValueUserLots
  }

  const mutateByeLotsHandleButton = (): void => {
    if (!isCanNewFetchGetByeLots) return

    updatePrevByeLotsSearchParams()

    mutateByeLots({ ...newByeLotsSearchParams, ...filterListParams, page: 1 })

    navigate(
      auctionUrlQueryParams(
        currentByeLotsCategory,
        1,
        currentByeLotDisplay_nameOrType,
      ),
    )
  }

  const mutateEnchantLotsHandleButton = (): void => {
    if (!isCanNewFetchGetEnchantItems) return

    updatePrevEnchantSearchParams({})

    mutateEnchantLots({ ...newEnchantSearchParams, ...filterListParams, page: 1 })

    setDidShowEnchantControlPanel(false)

    navigate(auctionUrlQueryParams(undefined, 1, currenEnchantLotDisplay_nameOrType))
  }

  const providerValue: AuctionContextDataT = useMemo(
    () => ({
      isCanNewFetchGetEnchantItems,
      isCanNewFetchGetByeLots,
      auctionFragment,
      currentPage: getCurrentPage(),
      totalPages: getTotalPages(),
      searchValue: getSearchValue(),
      selectedCategory: currentByeLotsCategory,
      dataUserLots: getUserLotsForPage(),
      dataByeLots,
      dataEnchantLots,
      isLoadingByeLots,
      isLoadingUserLots,
      isLoadingEnchantLots,
      isFragment,
      newEnchantSearchParams,
      filterListParams,
      didShowEnchantControlPanel,
      setDidShowEnchantControlPanel,
      updatePrevEnchantSearchParams,
      setAuctionFragment,
      updateFilterListParams,
      setStorageTotalPagesByeLots,
      setStorageTotalPagesEnchantLots,
      updateEnchantSearchParams,
      mutateByeLotsHandle,
      mutateEnchantLotsHandle,
      mutateByeLotsHandleButton,
      mutateEnchantLotsHandleButton,
      setCurrentPage: getSetCurrentPage(),
      setSearchValue: getSetSearchValue(),
      setSelectedCategory: (value: string) => {
        updateNewByeLotsSearchParams({ category: value })
      },
    }),
    [
      auctionFragment,
      mutateByeLotsHandleButton,
      setAuctionFragment,
      currentByeLotsCategory,
      dataUserLots,
      isLoadingByeLots,
      isLoadingUserLots,
      dataByeLots,
      storageTotalPagesByeLots,
      isCanNewFetchGetEnchantItems,
      newEnchantSearchParams,
    ],
  )

  return (
    <AuctionContext.Provider value={providerValue}>
      {children}
    </AuctionContext.Provider>
  )
}

export default AuctionProvider
