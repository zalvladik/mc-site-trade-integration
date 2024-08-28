import { AuctionFragment } from 'src/constants'
import { useAuction } from 'src/contexts/AuctionProvider/useAuction'

export const useAuctionController = () => {
  const { auctionFragment, setAuctionFragment } = useAuction()

  const buttonsTexts = [
    { fragment: AuctionFragment.BUY_LOTS, text: 'Купити лот', styles: {} },
    { fragment: AuctionFragment.USER_LOTS, text: 'Ваші лоти', styles: {} },
    { fragment: AuctionFragment.CREATE_LOTS, text: 'Створити лот', styles: {} },
    { fragment: AuctionFragment.ENCHANT_LOTS, text: 'Зачарування', styles: {} },
    {
      fragment: AuctionFragment.TRADE_HISTORY,
      text: 'Історія',
      styles: { marginTop: 264 },
    },
  ]

  return {
    buttonsTexts,
    auctionFragment,
    setAuctionFragment,
  }
}
