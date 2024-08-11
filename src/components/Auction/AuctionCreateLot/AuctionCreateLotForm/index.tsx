import { AuctionCreateLotFormContainer } from 'src/components/Auction/AuctionCreateLot/AuctionCreateLotForm/styles'
import type { AuctionCreateLotFormT } from 'src/components/Auction/AuctionCreateLot/AuctionCreateLotForm/types'
import { useAuctionCreateLotForm } from 'src/components/Auction/AuctionCreateLot/AuctionCreateLotForm/useAuctionCreateLotForm'
import DefaultButton from 'src/components/DefaultButton'
import DefaultInput from 'src/components/inputs/DefaultInput'

const AuctionCreateLotForm = ({
  currentItemId,
  itemCategories,
}: AuctionCreateLotFormT): JSX.Element => {
  const { itemPrice, setItemPrice, createLotHanlder, isLoading } =
    useAuctionCreateLotForm()

  return (
    <AuctionCreateLotFormContainer>
      <DefaultInput
        style={{ textAlign: 'center', width: 290 }}
        rightIconUrl="items_for_ui/deepslate_diamond_ore.png"
        rightIconSize={40}
        placeholder="Ціна"
        value={itemPrice}
        onChange={e => {
          const value = Number(e.target.value)

          if (value < 0 || value > 15552) return '15552'

          setItemPrice(e.target.value)
        }}
      />
      <DefaultButton
        isLoading={isLoading}
        style={{ width: 290 }}
        disabled={
          isLoading ||
          !Number(itemPrice) ||
          !currentItemId ||
          Number(itemPrice) > 15552
        }
        onClick={() => createLotHanlder(itemCategories, currentItemId)}
      >
        Створити Лот
      </DefaultButton>
    </AuctionCreateLotFormContainer>
  )
}

export default AuctionCreateLotForm
