import { formatDateToUK } from 'src/helpers/formatVipExprirationDate'

import {
  Container,
  HistoryListContainer,
  ItemTextInfoContainer,
  StickyData,
} from 'src/components/Auction/AuctionTradeHistory/styles'
import { useAuctionTradeHistory } from 'src/components/Auction/AuctionTradeHistory/useAuctionTradeHistory'
import ItemSlotIcon from 'src/components/ItemSlotIcon'

const AuctionTradeHistory = (): JSX.Element => {
  const {
    totalBuyerLots,
    totalSellerLots,
    itemSlotIconProps,
    openShulkerModal,
    containerSellerRef,
    containerBuyerRef,
  } = useAuctionTradeHistory()

  return (
    <Container>
      <div>
        <h1>Покупки</h1>

        <HistoryListContainer className="scroll-y" ref={containerBuyerRef}>
          {totalBuyerLots.map(({ lot, id, createdAt }, i) => {
            const lotElement = (lot?.shulker || lot?.item)!

            const { day, month, hours, minutes, seconds } = formatDateToUK(createdAt)

            let isSameDate = false

            if (i) {
              const { day: dayPrevLot, month: monthPrevLot } = formatDateToUK(
                totalBuyerLots[i - 1].createdAt,
              )

              isSameDate = `${day} ${month}` === `${dayPrevLot} ${monthPrevLot}`
            }

            return (
              <>
                {!isSameDate && (
                  <StickyData id={day + month}>
                    <ItemTextInfoContainer style={{ margin: '0px auto' }}>
                      <div>
                        <div style={{ fontSize: 26, color: 'rgb(23, 118, 173)' }}>
                          {day} {month}
                        </div>
                      </div>
                    </ItemTextInfoContainer>
                  </StickyData>
                )}
                <div key={id}>
                  <ItemTextInfoContainer>
                    <div>
                      <div style={{ color: 'rgb(230, 14, 14)', margin: '0px 16px' }}>
                        -{lot.price}
                      </div>
                    </div>
                  </ItemTextInfoContainer>
                  <div>
                    <ItemSlotIcon
                      style={{ cursor: lot?.shulker ? 'pointer' : 'default' }}
                      {...itemSlotIconProps}
                      {...lotElement}
                      fontSize={18}
                      onClick={() => {
                        if (lot?.shulker) {
                          openShulkerModal(lotElement.id)
                        }
                      }}
                    />
                  </div>
                  <ItemTextInfoContainer style={{ marginLeft: 20 }}>
                    <div>
                      <div>
                        {hours} : {minutes} : {seconds}
                      </div>
                    </div>
                  </ItemTextInfoContainer>
                </div>
              </>
            )
          })}
        </HistoryListContainer>
      </div>
      <div>
        <h1>Продажі</h1>
        <HistoryListContainer className="scroll-y" ref={containerSellerRef}>
          {totalSellerLots.map(({ lot, id, createdAt }, i) => {
            const lotElement = (lot?.shulker || lot?.item)!

            const { day, month, hours, minutes, seconds } = formatDateToUK(createdAt)

            let isSameDate = false

            if (i) {
              const { day: dayPrevLot, month: monthPrevLot } = formatDateToUK(
                totalSellerLots[i - 1].createdAt,
              )

              isSameDate = `${day} ${month}` === `${dayPrevLot} ${monthPrevLot}`
            }

            return (
              <>
                {!isSameDate && (
                  <StickyData id={day + month}>
                    <ItemTextInfoContainer style={{ margin: '0px auto' }}>
                      <div>
                        <div style={{ fontSize: 26, color: 'rgb(23, 118, 173)' }}>
                          {day} {month}
                        </div>
                      </div>
                    </ItemTextInfoContainer>
                  </StickyData>
                )}
                <div key={id}>
                  <ItemTextInfoContainer>
                    <div>
                      <div
                        style={{
                          color: 'rgb(14, 230, 68)',
                          margin: '0px 16px',
                        }}
                      >
                        +{lot.price}
                      </div>
                    </div>
                    <ItemSlotIcon
                      style={{ cursor: lot?.shulker ? 'pointer' : 'default' }}
                      {...itemSlotIconProps}
                      {...lotElement}
                      fontSize={18}
                      onClick={() => {
                        if (lot?.shulker) {
                          openShulkerModal(lotElement.id)
                        }
                      }}
                    />
                  </ItemTextInfoContainer>
                  <ItemTextInfoContainer style={{ marginLeft: 20 }}>
                    <div>
                      <div>
                        {hours} : {minutes} : {seconds}
                      </div>
                    </div>
                  </ItemTextInfoContainer>
                </div>
              </>
            )
          })}
        </HistoryListContainer>
      </div>
    </Container>
  )
}

export default AuctionTradeHistory
