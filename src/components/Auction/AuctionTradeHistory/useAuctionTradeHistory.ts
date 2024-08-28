import { useEffect } from 'react'
import { useModals } from 'src/contexts/ModalProvider/useModals'
import { useGetBuyerTradeHistory } from 'src/hooks/useGetBuyerTradeHistory'
import { useGetSellerTradeHistory } from 'src/hooks/useGetSellerTradeHistory'

import { Modals } from 'src/features/Modals/constants'

export const useAuctionTradeHistory = () => {
  //   const [pageSeller, setPageSeller] = useState<number>(1)
  //   const [pageBuyer, setPageBuyer] = useState<number>(1)

  const { onOpen } = useModals()

  const {
    mutate: mutateSeller,
    data: dataSeller,
    isLoading: isLoadingSeller,
  } = useGetSellerTradeHistory()

  const {
    mutate: mutateBuyer,
    data: dataBuyer,
    isLoading: isLoadingBuyer,
  } = useGetBuyerTradeHistory()

  useEffect(() => {
    mutateSeller()
    mutateBuyer()
  }, [])

  const openShulkerModal = (shulkerId: number) => {
    onOpen({ name: Modals.SHULKER_ITEMS, data: { shulkerId } })
  }

  const itemSlotIconProps = { containerSize: 64, itemSize: 46 }

  return {
    isLoadingSeller,
    isLoadingBuyer,
    dataSeller,
    dataBuyer,
    itemSlotIconProps,
    openShulkerModal,
  }
}
