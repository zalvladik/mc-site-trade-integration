import { IoDiamondOutline } from 'react-icons/io5'
import styled from 'styled-components'

export const StyledIoDiamondOutline = styled(IoDiamondOutline)`
  stroke: #0ad7ec;

  & > path {
    stroke-width: 20;
    fill: rgba(10, 215, 236, 0.3);
  }
`

export const Container = styled.div`
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
