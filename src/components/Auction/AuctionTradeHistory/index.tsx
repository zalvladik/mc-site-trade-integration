import { formatDateToUK } from 'src/helpers/formatVipExprirationDate'

import {
  BuyerHistoryContainer,
  Container,
  ItemTextInfoContainer,
  SellerHistoryContainer,
} from 'src/components/Auction/AuctionTradeHistory/styles'
import { useAuctionTradeHistory } from 'src/components/Auction/AuctionTradeHistory/useAuctionTradeHistory'
import ItemSlotIcon from 'src/components/ItemSlotIcon'

const AuctionTradeHistory = (): JSX.Element => {
  const {
    // isLoadingSeller,
    // isLoadingBuyer,
    dataSeller,
    dataBuyer,
    itemSlotIconProps,
    openShulkerModal,
  } = useAuctionTradeHistory()

  return (
    <Container>
      <div>
        <h1>Покупки</h1>

        <BuyerHistoryContainer className="scroll-y">
          {dataBuyer.map(({ lot, id, createdAt }, i) => {
            const lotElement = (lot?.shulker || lot?.item)!

            const { day, month, hours, minutes, seconds } = formatDateToUK(createdAt)

            let isSameDate = false

            if (i) {
              const { day: dayPrevLot, month: monthPrevLot } = formatDateToUK(
                dataBuyer[i - 1].createdAt,
              )

              isSameDate = `${day} ${month}` === `${dayPrevLot} ${monthPrevLot}`
            }

            return (
              <>
                {!isSameDate && (
                  <div
                    id={day + month}
                    style={{
                      padding: '10px 0px',
                      margin: '16px 0px 0px 0px',
                      borderTop: i ? '4px solid gray' : '',
                      borderRadius: 10,
                    }}
                  >
                    <ItemTextInfoContainer style={{ margin: '0px auto' }}>
                      <div>
                        <div style={{ fontSize: 26, color: 'rgb(23, 118, 173)' }}>
                          {day} {month}
                        </div>
                      </div>
                    </ItemTextInfoContainer>
                  </div>
                )}
                <div key={id}>
                  <ItemTextInfoContainer>
                    <div>
                      <div style={{ color: 'rgb(230, 14, 14)', marginRight: 20 }}>
                        -{lot.price}
                      </div>
                    </div>
                  </ItemTextInfoContainer>
                  <div>
                    <ItemSlotIcon
                      style={{ cursor: lot?.shulker ? 'pointer' : 'default' }}
                      {...itemSlotIconProps}
                      {...lotElement}
                      fontSize={20}
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
        </BuyerHistoryContainer>
      </div>
      <div>
        <h1>Продажі</h1>
        <SellerHistoryContainer className="scroll-y">
          {dataSeller.map(({ lot, id, createdAt }, i) => {
            const lotElement = (lot?.shulker || lot?.item)!

            const { day, month, hours, minutes, seconds } = formatDateToUK(createdAt)

            let isSameDate = false

            if (i) {
              const { day: dayPrevLot, month: monthPrevLot } = formatDateToUK(
                dataSeller[i - 1].createdAt,
              )

              isSameDate = `${day} ${month}` === `${dayPrevLot} ${monthPrevLot}`
            }

            return (
              <>
                {!isSameDate && (
                  <div
                    id={day + month}
                    style={{
                      padding: '10px 0px',
                      margin: '16px 0px 0px 0px',
                      borderTop: i ? '4px solid gray' : '',
                      borderRadius: 10,
                    }}
                  >
                    <ItemTextInfoContainer style={{ margin: '0px auto' }}>
                      <div>
                        <div style={{ fontSize: 26, color: 'rgb(23, 118, 173)' }}>
                          {day} {month}
                        </div>
                      </div>
                    </ItemTextInfoContainer>
                  </div>
                )}
                <div key={id}>
                  <ItemTextInfoContainer>
                    <div>
                      <div
                        style={{
                          color: 'rgb(14, 230, 68)',
                          marginRight: 20,
                        }}
                      >
                        +{lot.price}
                      </div>
                    </div>
                    <ItemSlotIcon
                      style={{ cursor: lot?.shulker ? 'pointer' : 'default' }}
                      {...itemSlotIconProps}
                      {...lotElement}
                      fontSize={20}
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
        </SellerHistoryContainer>
      </div>
    </Container>
  )
}

export default AuctionTradeHistory
