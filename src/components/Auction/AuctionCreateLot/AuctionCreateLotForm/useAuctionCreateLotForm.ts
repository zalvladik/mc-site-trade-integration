import { useState } from 'react'
import { CategoryEnum } from 'src/constants'
import { useAuction } from 'src/contexts/AuctionProvider/useAuction'
import { useCreateItemLot } from 'src/hooks/useCreateItemLot'
import { useCreateShulkerLot } from 'src/hooks/useCreateShulkerLot'

export const useAuctionCreateLotForm = () => {
  const { mutateByeLotsHandle } = useAuction()
  const [itemPrice, setItemPrice] = useState('')

  const afterSuccess = () => {
    mutateByeLotsHandle()
  }

  const handleChange = (value: string) => {
    if (/^[0-9]*$/.test(value)) setItemPrice(value)
  }

  const { isLoading: isLoadingCreateItemLot, mutate: mutateCreateItemLot } =
    useCreateItemLot(afterSuccess)
  const { isLoading: isLoadingCreateShulkerLot, mutate: mutateCreateShulkerLot } =
    useCreateShulkerLot(afterSuccess)

  const createLotHanlder = (itemCategories?: string[], id?: number) => {
    const price = Number(itemPrice)

    if (price <= 0) return

    if (!id) return

    if (itemCategories?.includes(CategoryEnum.SHULKERS)) {
      mutateCreateShulkerLot({ shulkerId: id, price })

      return
    }

    mutateCreateItemLot({ itemId: id, price })
  }

  return {
    itemPrice,
    setItemPrice: handleChange,
    createLotHanlder,
    isLoading: isLoadingCreateItemLot || isLoadingCreateShulkerLot,
  }
}
