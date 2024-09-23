import styled from 'styled-components'

import Skeleton from 'src/components/Skeleton'

export const TitleContainer = styled.div`
  background-color: rgba(25, 35, 45, 1);

  border: 1px solid gray;
  text-align: center;

  width: 80%;

  padding: 5px 10px;
  margin: 0px auto;
  margin-bottom: 16px;

  border-radius: 4px;

  & > p {
    font-family: 'Minecraft', sans-serif;
    font-size: 20px;
    font-weight: 500;
  }
`

export const TheadContainer = styled.div`
  font-family: 'Minecraft', sans-serif;
  font-size: 20px;
  font-weight: 500;

  display: flex;

  position: relative;

  margin-bottom: 10px;

  & > div {
    border: 0.5px solid white;
    border-radius: 4px;

    height: 40px;

    align-items: center;

    text-align: center;

    background-color: rgba(25, 35, 45, 1);

    -webkit-box-shadow: inset 0px 0px 15px 5px rgba(0, 0, 0, 0.6);
    -moz-box-shadow: inset 0px 0px 15px 5px rgba(0, 0, 0, 0.6);
    box-shadow: inset 0px 0px 15px 5px rgba(0, 0, 0, 0.6);

    display: flex;
    margin: 0px auto;
    gap: 5px;

    justify-content: center;

    & > p {
      font-family: 'Minecraft', sans-serif;
      font-size: 20px;
      font-weight: 500;

      text-shadow: 2px 2px 1px rgba(120, 120, 120, 1);
    }

    & > div {
      width: 32px;
      height: 32px;
      background-repeat: no-repeat;
      background-size: contain;
    }

    &:nth-child(1) {
      width: 58%;

      & > div {
        background-image: url('/assets/items_for_ui/name_tag.png');
      }
    }

    &:nth-child(2) {
      width: 38%;

      & > div {
        background-image: url('/assets/items_for_ui/diamond.png');
      }
    }
  }
`

export const TbodyContainer = styled.div`
  flex: 1;

  display: flex;
  flex-direction: column;

  padding: 10px;

  gap: 9.3px;

  border-radius: 6px;

  background: radial-gradient(
    circle,
    rgba(0, 50, 60, 0.4) 0%,
    rgba(30, 35, 40, 1) 100%
  );

  -webkit-box-shadow:
    inset 0px 0px 96px 28px rgba(0, 0, 0, 0.6),
    0px 0px 12px -5px rgba(255, 255, 255, 1);
  -moz-box-shadow:
    inset 0px 0px 96px 28px rgba(0, 0, 0, 0.6),
    0px 0px 12px -5px rgba(255, 255, 255, 1);
  box-shadow:
    inset 0px 0px 96px 28px rgba(0, 0, 0, 0.6),
    0px 0px 12px -5px rgba(255, 255, 255, 1);

  & > div {
    display: flex;
    justify-content: space-around;

    align-items: center;

    padding: 4px 0px;

    border-radius: 6px;
    background-color: rgba(200, 200, 200, 0.1);

    transition:
      background-color 0.3s ease,
      transform 0.3s cubic-bezier(0.075, 0.82, 0.165, 1);

    &:hover {
      cursor: pointer;
      background-color: rgba(200, 200, 200, 0.2);
      transform: scale(1.01);
    }

    & > div {
      &:nth-child(1) {
        display: flex;
        gap: 20px;

        width: 58%;
      }

      &:nth-child(2) {
        width: 1%;
        height: 90%;
        width: 2px;
        background-color: lightgray;
      }

      &:nth-child(3) {
        width: 38%;
      }
    }
  }
`

export const StyledSkeleton = styled(Skeleton)`
  display: flex;
  flex-direction: column;

  gap: 7px;

  padding: 10px;
  flex: 1;

  border-radius: 6px;

  background: radial-gradient(
    circle,
    rgba(100, 110, 120, 1) 0%,
    rgba(30, 35, 40, 1) 100%
  );

  -webkit-box-shadow:
    inset 0px 0px 96px 28px rgba(0, 0, 0, 0.6),
    0px 0px 12px -5px rgba(255, 255, 255, 1);
  -moz-box-shadow:
    inset 0px 0px 96px 28px rgba(0, 0, 0, 0.6),
    0px 0px 12px -5px rgba(255, 255, 255, 1);
  box-shadow:
    inset 0px 0px 96px 28px rgba(0, 0, 0, 0.6),
    0px 0px 12px -5px rgba(255, 255, 255, 1);

  & > .loadingContainer {
    height: 66px;
  }
`

export const ItemDesriptionContainer = styled.div`
  display: flex;
  align-items: center;

  margin: 0px auto;

  & > div {
    & > div {
      text-align: center;

      font-family: 'Minecraft', sans-serif;
      font-size: 20px;
      font-weight: 500;

      text-shadow:
        0px 0px 25px #000000,
        0px 0px 25px #000000,
        2px 2px 1px rgba(0, 0, 0, 1);
    }
  }
`

export const ItemPriceContainer = styled.div`
  display: flex;
  justify-content: center;

  gap: 10px;

  & > div {
    font-family: 'Minecraft', sans-serif;
    font-size: 25px;
    font-weight: 500;

    text-shadow:
      0px 0px 25px #000000,
      0px 0px 25px #000000,
      2px 2px 1px rgba(0, 0, 0, 1);
  }

  & > div:last-child {
    width: 40px;
    height: 40px;

    background-image: url('/assets/items_for_ui/deepslate_diamond_ore.png');
    background-size: contain;
    background-repeat: no-repeat;
  }
`
