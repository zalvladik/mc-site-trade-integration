import styled, { keyframes } from 'styled-components'
import type { Keyframes } from 'styled-components/dist/types'

export const Container = styled.div`
  position: relative;
`

export const DisabledVipType = styled.div`
  position: absolute;

  top: 50%;
  left: 50%;

  translate: -50% -50%;

  width: 80%;
  height: 80%;

  background-image: url('/assets/items_for_ui/barrier.png');
  background-size: contain;
  background-repeat: no-repeat;
`

const floatAnimation = (distance: number): Keyframes => keyframes`
  0% {
    transform: translateY(0px);
  }
  50% {
    transform: translateY(-${distance}px);
  }
  100% {
    transform: translateY(0px);
  }
`

export const VipTypeIcons = styled.div`
  display: flex;
  padding: 20px;
  gap: 20px;

  & > div {
    width: 120px;
    height: 120px;

    background-size: contain;
    background-repeat: no-repeat;

    cursor: pointer;

    transition: scale 0.4s ease;

    &:hover {
      scale: 1.2;
    }

    &:nth-child(1) {
      animation: ${floatAnimation(20)} 6s ease-in-out infinite;
    }

    &:nth-child(2) {
      animation: ${floatAnimation(16)} 4s ease-in-out infinite;
    }

    &:nth-child(3) {
      animation: ${floatAnimation(24)} 8s ease-in-out infinite;
    }

    &:nth-child(4) {
      animation: ${floatAnimation(22)} 5s ease-in-out infinite;
    }
  }
`

export const VipInfoContainer = styled.div`
  padding: 20px;
  border-radius: 8px;
  border: 1px solid gray;

  background-color: rgba(20, 20, 20, 0.6);

  -webkit-box-shadow:
    inset 0px 0px 32px 8px rgba(0, 0, 0, 0.5),
    0px 0px 12px -5px rgba(255, 255, 255, 0.5);
  -moz-box-shadow:
    inset 0px 0px 32px 8px rgba(0, 0, 0, 0.5),
    0px 0px 12px -5px rgba(255, 255, 255, 0.5);
  box-shadow:
    inset 0px 0px 32px 8px rgba(0, 0, 0, 0.5),
    0px 0px 12px -5px rgba(255, 255, 255, 0.5);
`

export const VipInfo = styled.div`
  margin-bottom: 20px;
  & > div {
    font-family: 'Minecraft', sans-serif;
    font-size: 20px;
    font-weight: 500;

    text-shadow: 2.5px 2.5px 2px rgba(0, 0, 0, 1);
    text-align: center;

    & > span {
      font-family: 'Minecraft', sans-serif;
      font-size: 20px;
      font-weight: 500;

      text-shadow: 2.5px 2.5px 2px rgba(0, 0, 0, 1);
      text-align: center;

      color: rgb(150, 150, 150);
    }

    &:nth-child(1) {
      margin-bottom: 20px;
      font-size: 30px;
      padding-right: 40px;

      & > div {
        position: absolute;

        width: 48px;
        height: 48px;

        top: 50%;
        right: 180px;

        translate: 0% -50%;

        background-image: url('/assets/items_for_ui/deepslate_diamond_ore.png');
        background-size: contain;
        background-repeat: no-repeat;
      }
    }
  }
`
