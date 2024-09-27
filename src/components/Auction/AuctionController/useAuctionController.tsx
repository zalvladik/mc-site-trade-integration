import { FaList, FaRegPlusSquare } from 'react-icons/fa'
import { GiEvilBook } from 'react-icons/gi'
import { MdOutlineHistory } from 'react-icons/md'
import { TbZoomMoney } from 'react-icons/tb'
import { AuctionFragment } from 'src/constants'
import { useAuction } from 'src/contexts/AuctionProvider/useAuction'

export const useAuctionController = (): {
  buttons: {
    fragment: AuctionFragment
    icon: JSX.Element
    text: string[]
  }[]
  auctionFragment: AuctionFragment
  setAuctionFragment: (value: AuctionFragment) => void
} => {
  const { auctionFragment, setAuctionFragment } = useAuction()

  const buttons = [
    {
      fragment: AuctionFragment.BUY_LOTS,
      icon: <TbZoomMoney size={46} />,
      text: ['Купити лот'],
    },
    {
      fragment: AuctionFragment.USER_LOTS,
      icon: <FaList size={46} />,
      text: ['Ваші лоти'],
    },
    {
      fragment: AuctionFragment.CREATE_LOTS,
      icon: <FaRegPlusSquare size={46} />,
      text: ['Створити лот'],
    },
    {
      fragment: AuctionFragment.ENCHANT_LOTS,
      icon: <GiEvilBook size={46} />,
      text: ['Зачарування'],
    },
    {
      fragment: AuctionFragment.TRADE_HISTORY,
      icon: <MdOutlineHistory size={46} />,
      text: ['Історія'],
    },
  ]

  return {
    buttons,
    auctionFragment,
    setAuctionFragment,
  }
}
