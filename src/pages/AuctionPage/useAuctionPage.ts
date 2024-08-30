import { useAuction } from 'src/contexts/AuctionProvider/useAuction'

export const useAuctionPage = () => {
  const {
    auctionFragment,
    setAuctionFragment,
    mutateByeLotsHandleButton,
    searchValue,
    setSearchValue,
    isLoadingByeLots,
    isFragment,
    isCanNewFetchGetByeLots,
    isCanNewFetchGetEnchantItems,
    mutateEnchantLotsHandleButton,
  } = useAuction()

  return {
    auctionFragment,
    setAuctionFragment,
    isFragment,
    mutateByeLotsHandleButton,
    searchValue,
    setSearchValue,
    isLoadingByeLots,
    isCanNewFetchGetByeLots,
    isCanNewFetchGetEnchantItems,
    mutateEnchantLotsHandleButton,
  }
}
