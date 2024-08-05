import { Container } from 'src/pages/MapPage/styles'

const MapPage = (): JSX.Element => {
  return (
    <Container>
      <iframe
        title="map"
        src="http://51.75.74.159:25602/"
        width="100%"
        height="100%"
      />
    </Container>
  )
}

export default MapPage
