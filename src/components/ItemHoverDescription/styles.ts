import styled from 'styled-components'

export const ItemHoverDescriptionContainer = styled.div`
  z-index: 1200;

  transition: opacity 200ms ease-in-out;

  padding: 0px;
  gap: 16px;

  flex-direction: column;

  border: 3px solid rgba(0, 0, 0, 0);

  display: flex;
  flex-direction: column;

  gap: 20px;

  border-radius: 6px;
  pointer-events: none;

  background-color: rgba(18, 3, 18, 0.97);
`

export const Title = styled.div`
  p {
    white-space: nowrap;
    font-size: 24px;
    font-family: 'Minecraft', sans-serif;

    text-shadow: 3px 3px 1px rgb(168, 168, 168, 0.7);
  }
`

export const Description = styled.ul`
  display: flex;
  flex-direction: column;

  & > li {
    & > p {
      white-space: nowrap;

      font-size: 24px;
      font-family: 'Minecraft', sans-serif;
      text-shadow: '3px 3px #292929';
    }
  }
`

export const Text = styled.p`
  color: rgba(255, 255, 255, 0.7);
  font-size: 20px;
  font-style: normal;
  font-weight: 400;
  display: flex;
  line-height: normal;

  @media screen and (max-width: 390px) {
    font-size: 14px;
    font-weight: 300;
  }
`
