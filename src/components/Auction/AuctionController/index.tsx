import AuctionControlletFilter from 'src/components/Auction/AuctionController/AuctionControllerFilter'
import {
  ButtonsContainer,
  Container,
} from 'src/components/Auction/AuctionController/styles'
import { useAuctionController } from 'src/components/Auction/AuctionController/useAuctionController'
import HoverDescription from 'src/components/HoverDescription'

const AuctionController = (): JSX.Element => {
  const { buttons, auctionFragment, setAuctionFragment } = useAuctionController()

  return (
    <Container>
      <ButtonsContainer>
        {buttons.map(({ fragment, icon, text }) => {
          const isCurrentFragment = fragment === auctionFragment

          return (
            <div
              key={fragment}
              style={isCurrentFragment ? { opacity: 1 } : {}}
              onClick={() => {
                if (isCurrentFragment) return

                setAuctionFragment(fragment)
              }}
            >
              <div>{icon}</div>

              <HoverDescription description={text} />
            </div>
          )
        })}
      </ButtonsContainer>

      <AuctionControlletFilter />
    </Container>
  )
}

export default AuctionController
