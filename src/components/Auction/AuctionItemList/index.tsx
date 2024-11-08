import { moneyCalculator, sliceText } from 'src/helpers'

import { Container } from 'src/components/Auction/AuctionItemList/styles'
import { useAuctionItemList } from 'src/components/Auction/AuctionItemList/useAuctionItemList'
import {
  ItemDesriptionContainer,
  ItemPriceContainer,
  StyledSkeleton,
  TbodyContainer,
  TheadContainer,
} from 'src/components/Auction/styles'
import ItemSlotIcon from 'src/components/ItemSlotIcon'

const AuctionItemList = (): JSX.Element => {
  const { openModal, itemSlotIconProps, user, isLoading, data } =
    useAuctionItemList()

  return (
    <Container>
      <TheadContainer>
        {['Предмет', 'Ціна'].map(item => (
          <div key={item}>
            <p>{item}</p>
            <div />
          </div>
        ))}
      </TheadContainer>

      <StyledSkeleton
        isLoading={isLoading}
        isDataExist={data.length}
        skeletonLength={8}
        emptyText="Предмет не знайдено"
        size={40}
      >
        <TbodyContainer>
          {data.map(lot => {
            const { id, price, username } = lot

            const lotElement = (lot?.shulker || lot?.item)!

            return (
              <div
                key={id}
                onClick={() => openModal(lot)}
                style={{ opacity: user.username === username ? 0.3 : 1 }}
              >
                <div>
                  <ItemSlotIcon
                    {...itemSlotIconProps}
                    {...lotElement}
                    fontSize={18}
                  />

                  <ItemDesriptionContainer>
                    <div>
                      <div>{sliceText(lotElement.display_name, 28)}</div>
                    </div>
                  </ItemDesriptionContainer>
                </div>

                <div />

                <ItemPriceContainer>
                  <div>{moneyCalculator(price)}</div>
                  <div />
                </ItemPriceContainer>
              </div>
            )
          })}
        </TbodyContainer>
      </StyledSkeleton>
    </Container>
  )
}

export default AuctionItemList
