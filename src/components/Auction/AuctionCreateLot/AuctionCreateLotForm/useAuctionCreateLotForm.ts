import { useState } from 'react'
import { CategoryEnum } from 'src/constants'
import { useAuction } from 'src/contexts/AuctionProvider/useAuction'
import { useToast } from 'src/contexts/ToastProvider/useToast'
import { useCreateItemLot } from 'src/hooks/useCreateItemLot'
import { useCreateShulkerLot } from 'src/hooks/useCreateShulkerLot'

export const useAuctionCreateLotForm = () => {
  const { mutateByeLotsHandle } = useAuction()
  const toast = useToast()

  const [itemPrice, setItemPrice] = useState('')

  const afterSuccess = () => {
    mutateByeLotsHandle()
  }

  const handleError = () => {
    toast.error({ message: ['Максимальна ціна: 15552'] })
  }

  const handleChange = (value: string) => {
    if (/^\d*\.?[1-9]{0,1}$/.test(value)) {
      if (value === '0') {
        if (itemPrice === '0.') {
          setItemPrice('')

          return
        }

        setItemPrice('0.')
      } else {
        const numericValue = parseFloat(value)

        if (!Number.isNaN(numericValue) && numericValue <= 15552) {
          setItemPrice(value)
        } else if (value === '') {
          setItemPrice('')
        }
      }
    }
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
    handleError,
  }
}
