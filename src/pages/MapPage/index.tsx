import { Container } from 'src/pages/MapPage/styles'

const MapPage = (): JSX.Element => {
  return (
    <Container>
      <iframe
        title="map"
        src="https://map.uk-land.space/"
        width="100%"
        height="100%"
      />
    </Container>
  )
}

export default MapPage
