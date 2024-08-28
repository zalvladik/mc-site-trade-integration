import { AuctionFragment } from 'src/constants'
import { useAuction } from 'src/contexts/AuctionProvider/useAuction'
import { useUser } from 'src/contexts/UserProvider/useUser'
import { getVipParams } from 'src/helpers/getVipParams'
import { useGetUserLots } from 'src/hooks/useGetUserLots'

export const useAuctionPagination = () => {
  const {
    currentPage,
    setCurrentPage,
    auctionFragment,
    dataUserLots,
    dataByeLots,
    dataEnchantLots,
    totalPages,
    isLoadingByeLots,
    isLoadingEnchantLots,
    isFragment,
    didShowEnchantControlPanel,
  } = useAuction()

  const { user } = useUser()

  const { data } = useGetUserLots()

  const {
    isUserLotsFragment,
    isCreateLotFragment,
    isBuyFragment,
    isEnchantFinderFragment,
    isTradeHistoryFragment,
  } = isFragment

  const didShowUserLotsCount = isUserLotsFragment || isCreateLotFragment

  const didVanishPagesInfo = () => {
    if (isCreateLotFragment || isTradeHistoryFragment) return true

    if (isEnchantFinderFragment) {
      return didShowEnchantControlPanel
        ? true
        : (!dataEnchantLots.length && !isLoadingEnchantLots) || totalPages <= 1
    }

    if (isUserLotsFragment) return !dataUserLots.length || totalPages <= 1

    if (isBuyFragment) {
      return (!dataByeLots.length && !isLoadingByeLots) || totalPages <= 1
    }
  }

  const { vipLotCount } = getVipParams(user.vip)

  return {
    currentUserLots: data.length,
    currentPage,
    setCurrentPage,
    totalPages,
    vipLotCount,
    didShowUserLotsCount,
    didVanishPagesInfo: Boolean(didVanishPagesInfo()),
    isByeFragment: auctionFragment === AuctionFragment.BUY_LOTS,
    isEnchantFinderFragment,
  }
}
