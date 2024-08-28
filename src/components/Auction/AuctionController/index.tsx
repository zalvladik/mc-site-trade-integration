import AuctionControlletFilter from 'src/components/Auction/AuctionController/AuctionControllerFilter'
import {
  ButtonsContainer,
  Container,
} from 'src/components/Auction/AuctionController/styles'
import { useAuctionController } from 'src/components/Auction/AuctionController/useAuctionController'
import DefaultButton from 'src/components/DefaultButton'

const AuctionController = (): JSX.Element => {
  const { buttonsTexts, auctionFragment, setAuctionFragment } =
    useAuctionController()

  return (
    <Container>
      <ButtonsContainer>
        {buttonsTexts.map(({ fragment, text, styles }) => {
          const isCurrentFragment = fragment === auctionFragment

          return (
            <DefaultButton
              onClick={() => setAuctionFragment(fragment)}
              style={{ width: '100%', ...styles }}
              key={fragment}
              disabled={isCurrentFragment}
            >
              {text}
            </DefaultButton>
          )
        })}
      </ButtonsContainer>

      <AuctionControlletFilter />
    </Container>
  )
}

export default AuctionController
