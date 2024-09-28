import styled from 'styled-components'

import Skeleton from 'src/components/Skeleton'

export const RoadContainer = styled.div`
  z-index: 1;
  position: absolute;
  top: 50%;
  left: 50%;
  translate: -50% -50%;
`

export const StyledSkeleton = styled(Skeleton)`
  width: 100%;
  height: 100%;
`

export const IconContainer = styled.div`
  position: absolute;

  background-position: center;
  background-repeat: no-repeat;

  justify-content: center;
  align-items: center;

  display: flex;
  width: 24px;
  height: 24px;
  translate: -50% -50%;
  cursor: pointer;
  transition: scale 0.2s ease;

  &:hover {
    z-index: 99;
    scale: 1.2;

    & > .advancementsText {
      display: flex;
    }
  }
`

export const Title = styled.div`
  padding: 4px 10px 4px 30px;

  p {
    width: 100%;
    font-size: 8px;
    font-family: 'Minecraft', sans-serif;

    text-shadow:
      0px 0px 0px #000000,
      0px 0px 0px #000000,
      1px 1px 1px rgba(0, 0, 0, 0.8);
  }
`

export const Description = styled.div`
  background-color: #212121;
  padding: 3px 3px;
  border: 0.5px solid #555555;
  border-top: none;

  @media screen and (max-width: 390px) {
    padding: 8px 3px 3px 3px;
  }

  p {
    width: 100%;
    font-size: 8px;
    font-family: 'Minecraft', sans-serif;
  }
`

export const ContainerImage = styled.div`
  background-repeat: no-repeat;
  background-size: contain;
  width: 16px;
  height: 16px;

  & > svg {
    position: absolute;
    top: 50%;
    left: 50%;
    translate: -50% -50%;
    z-index: -1;
  }
`
