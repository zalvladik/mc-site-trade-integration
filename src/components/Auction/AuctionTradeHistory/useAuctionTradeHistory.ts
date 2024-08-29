import { useEffect, useRef, useState } from 'react'
import { useModals } from 'src/contexts/ModalProvider/useModals'
import { useGetBuyerTradeHistory } from 'src/hooks/useGetBuyerTradeHistory'
import { useGetSellerTradeHistory } from 'src/hooks/useGetSellerTradeHistory'
import type { TradeHistory } from 'src/services/api/TradeHistory/types'

import { Modals } from 'src/features/Modals/constants'

export const useAuctionTradeHistory = () => {
  const [totalBuyerLots, setTotalBuyerLots] = useState<TradeHistory[]>([])
  const [totalSellerLots, setTotalSellerLots] = useState<TradeHistory[]>([])

  const [pageBuyer, setPageBuyer] = useState<number>(1)
  const [pageSeller, setPageSeller] = useState<number>(1)

  const containerSellerRef = useRef<HTMLDivElement>(null)
  const containerBuyerRef = useRef<HTMLDivElement>(null)

  const [hasMoreBuyer, setHasMoreBuyer] = useState(true)
  const [hasMoreSeller, setHasMoreSeller] = useState(true)

  const { onOpen } = useModals()

  const {
    mutateAsync: mutateAsyncSeller,
    totalPage: totalPageSeller,
    isLoading: isLoadingSeller,
  } = useGetSellerTradeHistory()

  const {
    mutateAsync: mutateAsyncBuyer,
    totalPage: totalPageBuyer,
    isLoading: isLoadingBuyer,
  } = useGetBuyerTradeHistory()

  // Initial data fetch
  useEffect(() => {
    const fetchInitialData = async () => {
      const initialBuyerData = await mutateAsyncBuyer({ page: 1 })
      setTotalBuyerLots(initialBuyerData.lots)
      setPageBuyer(prevPage => prevPage + 1)

      const initialSellerData = await mutateAsyncSeller({ page: 1 })
      setTotalSellerLots(initialSellerData.lots)
      setPageSeller(prevPage => prevPage + 1)
    }

    fetchInitialData()
  }, [mutateAsyncBuyer, mutateAsyncSeller])

  // Scroll handler for buyer
  useEffect(() => {
    const handleScroll = () => {
      if (pageBuyer > totalPageBuyer || !hasMoreBuyer) return

      const container = containerBuyerRef.current

      if (container) {
        const { scrollTop, scrollHeight, clientHeight } = container

        if (scrollTop + clientHeight >= scrollHeight - 10) {
          mutateAsyncBuyer({ page: pageBuyer }).then(newData => {
            setTotalBuyerLots(prevData => [...prevData, ...newData.lots])
            setPageBuyer(prevPage => prevPage + 1)
          })
        }
      }
    }

    const container = containerBuyerRef.current

    if (container) {
      container.addEventListener('scroll', handleScroll)
    }

    return () => {
      if (container) {
        container.removeEventListener('scroll', handleScroll)
      }
    }
  }, [pageBuyer, totalPageBuyer, hasMoreBuyer, mutateAsyncBuyer])

  // Scroll handler for seller
  useEffect(() => {
    const handleScroll = () => {
      if (pageSeller > totalPageSeller || !hasMoreSeller) return

      const container = containerSellerRef.current

      if (container) {
        const { scrollTop, scrollHeight, clientHeight } = container

        if (scrollTop + clientHeight >= scrollHeight - 10) {
          mutateAsyncSeller({ page: pageSeller }).then(newData => {
            setTotalSellerLots(prevData => [...prevData, ...newData.lots])
            setPageSeller(prevPage => prevPage + 1)
          })
        }
      }
    }

    const container = containerSellerRef.current

    if (container) {
      container.addEventListener('scroll', handleScroll)
    }

    return () => {
      if (container) {
        container.removeEventListener('scroll', handleScroll)
      }
    }
  }, [pageSeller, totalPageSeller, hasMoreSeller, mutateAsyncSeller])

  // Update hasMore state
  useEffect(() => {
    setHasMoreBuyer(pageBuyer <= totalPageBuyer)
  }, [totalBuyerLots, pageBuyer, totalPageBuyer])

  useEffect(() => {
    setHasMoreSeller(pageSeller <= totalPageSeller)
  }, [totalSellerLots, pageSeller, totalPageSeller])

  const openShulkerModal = (shulkerId: number) => {
    onOpen({ name: Modals.SHULKER_ITEMS, data: { shulkerId } })
  }

  const itemSlotIconProps = { containerSize: 64, itemSize: 46 }

  return {
    isLoadingSeller,
    isLoadingBuyer,
    totalBuyerLots,
    totalSellerLots,
    itemSlotIconProps,
    openShulkerModal,
    containerSellerRef,
    containerBuyerRef,
  }
}
