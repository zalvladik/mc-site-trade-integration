import styled from 'styled-components'

export const Container = styled.div`
  background: radial-gradient(
    circle,
    rgba(30, 67, 89, 0.5) 0%,
    rgba(20, 47, 61, 0.4) 100%
  );

  -webkit-box-shadow:
    inset 0px 0px 40px 28px rgba(0, 0, 0, 0.75),
    0px 0px 14px -5px rgba(255, 255, 255, 1);
  -moz-box-shadow:
    inset 0px 0px 40px 28px rgba(0, 0, 0, 0.75),
    0px 0px 14px -5px rgba(255, 255, 255, 1);
  box-shadow:
    inset 0px 0px 40px 28px rgba(0, 0, 0, 0.75),
    0px 0px 14px -5px rgba(255, 255, 255, 1);

  position: relative;
  border: 1px solid black;
  border-radius: 10px;
  padding: 20px;

  display: flex;
  flex-direction: column;
  gap: 15px;

  & > h1 {
    font-family: 'Minecraft', sans-serif;
    padding-left: 20px;
    font-weight: 500;
  }

  & > div {
    background-color: gray;
    user-select: none;
    position: relative;
    border-radius: 6px;
    padding: 20px;

    cursor: cell;

    display: flex;
    flex-wrap: wrap;

    transition: height 0.5s ease;

    width: 1056px;
    height: 376px;

    background: radial-gradient(
      circle,
      rgba(100, 110, 120, 1) 0%,
      rgba(50, 55, 60, 1) 100%
    );

    -webkit-box-shadow:
      inset 0px 0px 96px 28px rgba(0, 0, 0, 0.75),
      0px 0px 12px -5px rgba(255, 255, 255, 1);
    -moz-box-shadow:
      inset 0px 0px 96px 28px rgba(0, 0, 0, 0.75),
      0px 0px 12px -5px rgba(255, 255, 255, 1);
    box-shadow:
      inset 0px 0px 96px 28px rgba(0, 0, 0, 0.75),
      0px 0px 12px -5px rgba(255, 255, 255, 1);
  }
`

export const CrystalContainer = styled.div`
  position: relative;

  height: 104px;
  width: 104px;

  margin: 4px;

  background-repeat: no-repeat;
  background-size: contain;

  transition: transform 0.3s cubic-bezier(0.075, 0.82, 0.165, 1);

  &:hover {
    z-index: 20;
    transform: scale(1.05);
  }

  &:hover > div.itemCard {
    display: flex;
  }

  & > div {
    position: absolute;
    top: 50%;
    left: 50%;

    translate: -50% -50%;

    width: 64px;
    height: 64px;

    background-repeat: no-repeat;
    background-size: contain;
  }
`

export const EmptySlot = styled.div`
  border: none;

  margin: 4px;
  position: relative;
  z-index: 0;

  width: 104px;
  height: 104px;
  margin: 4px;

  display: inline-block;

  background-size: contain;
  background-repeat: no-repeat;
  background-image: url('/assets/items_for_ui/slot.png');

  background-color: inherit;
  background-size: contain;
  background-repeat: no-repeat;

  opacity: 0.4;
`

export const AreaSelect = styled.div`
  display: none;
  border-radius: 4px;
  position: absolute;
  z-index: 100;
`

export const ItemMiddleware = styled.div`
  display: none;
  top: 0px;
  left: 0px;
  position: absolute;
  width: 100%;
  height: 100%;
  z-index: 998;
`
