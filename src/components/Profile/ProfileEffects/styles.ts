import styled, { keyframes } from 'styled-components'
import type { Keyframes } from 'styled-components/dist/types'

export const Container = styled.div`
  position: relative;
  margin-top: 200px;
  display: flex;
  flex-direction: column;

  width: 1000px;

  gap: 24px;
`

export const AddEffectForm = styled.div`
  transition: width 0.5s ease;

  padding: 32px;

  border-radius: 8px;

  background: radial-gradient(
    circle,
    rgba(10, 40, 40, 0.6) 0%,
    rgba(10, 40, 40, 0.5) 100%
  );

  -webkit-box-shadow:
    inset 0px 0px 20px 10px rgba(0, 0, 0, 0.75),
    0px 0px 8px -2px rgba(255, 255, 255, 1);
  -moz-box-shadow:
    inset 0px 0px 20px 10px rgba(0, 0, 0, 0.75),
    0px 0px 8px -2px rgba(255, 255, 255, 1);
  box-shadow:
    inset 0px 0px 20px 10px rgba(0, 0, 0, 0.75),
    0px 0px 8px -2px rgba(255, 255, 255, 1);
`

export const GalleryRow = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;

  gap: 20px;
`

export const GalleryItem = styled.div`
  width: 86px;
  height: 86px;

  background-size: contain;
  background-repeat: no-repeat;

  border-radius: 8px;

  transition:
    transform 0.4s cubic-bezier(0.075, 0.82, 0.165, 1),
    opacity 0.1s ease;

  &:hover {
    z-index: 99;
    cursor: pointer;
    transform: scale(2.5);
  }
`

export const PageButtonsList = styled.div`
  display: flex;
  gap: 20px;

  margin-top: 20px;

  justify-content: center;

  & > div {
    cursor: pointer;
    display: flex;
    align-items: center;
    justify-content: center;

    height: 50px;
    width: 50px;

    border: 1px solid gray;
    border-radius: 4px;
    background-color: rgba(40, 40, 40, 0.6);

    font-family: 'Minecraft', sans-serif;
    font-size: 30px;
    font-weight: 500;

    text-shadow: 2.5px 2.5px 2px rgba(0, 0, 0, 1);
  }
`

export const EffectStylesContainer = styled.div`
  display: flex;
  justify-content: space-between;
  flex-wrap: nowrap;

  & > div {
    width: 140px;
    height: 140px;
    background-size: contain;
    background-repeat: no-repeat;

    border-radius: 8px;

    transition:
      transform 0.4s cubic-bezier(0.075, 0.82, 0.165, 1),
      opacity 0.2s ease;

    &:hover {
      cursor: pointer;
      transform: scale(1.2);
    }
  }
`

export const EffectInfoContainer = styled.div`
  position: absolute;

  top: -0%;
  left: 50%;

  translate: -50% -120%;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 15px;

  & > h1 {
    font-family: 'Minecraft', sans-serif;
    font-size: 30px;
    font-weight: 500;

    text-shadow: 2.5px 2.5px 2px rgba(0, 0, 0, 1);

    margin-bottom: 10px;

    text-align: center;
  }
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

export const EffectsList = styled.div`
  position: relative;
  display: flex;

  justify-content: center;

  gap: 16px;
  width: 100%;

  & > div {
    background-color: rgba(30, 30, 30, 0.6);
    flex: 1;

    transition: scale 0.4s ease;

    &:nth-child(1) {
      animation: ${floatAnimation(20)} 6s ease-in-out infinite;
    }

    &:nth-child(2) {
      animation: ${floatAnimation(16)} 4s ease-in-out infinite;
    }

    &:nth-child(3) {
      animation: ${floatAnimation(24)} 8s ease-in-out infinite;
    }
  }
`

export const EffectListContainer = styled.div`
  display: flex;

  border: 1px solid #9c9c9c;
  border-radius: 16px;

  max-width: 322.5px;

  justify-content: space-around;

  padding: 14px;

  overflow: hidden;
  gap: 20px;

  -webkit-box-shadow:
    inset 0px 0px 32px 8px rgba(0, 0, 0, 0.5),
    0px 0px 12px -5px rgba(255, 255, 255, 0.5);
  -moz-box-shadow:
    inset 0px 0px 32px 8px rgba(0, 0, 0, 0.5),
    0px 0px 12px -5px rgba(255, 255, 255, 0.5);
  box-shadow:
    inset 0px 0px 32px 8px rgba(0, 0, 0, 0.5),
    0px 0px 12px -5px rgba(255, 255, 255, 0.5);

  transition:
    transform 0.4s cubic-bezier(0.075, 0.82, 0.165, 1),
    opacity 0.2s ease;

  &:hover {
    cursor: pointer;
    transform: scale(1.03);
  }

  & > div:not(:last-child) {
    width: 120px;
    height: 120px;
    background-repeat: no-repeat;
    background-size: contain;

    border: 1px solid whitesmoke;
    border-radius: 8px;
  }

  & > div:last-child {
    opacity: 0;

    width: 120px;
    height: 120px;

    position: absolute;
    left: 50%;
    top: 50%;

    translate: -50% -50%;

    background-image: url('/assets/items_for_ui/barrier.png');
    background-size: contain;
    background-repeat: no-repeat;

    transition:
      transform 0.3s cubic-bezier(0.075, 0.82, 0.165, 1),
      opacity 0.2s ease;
  }

  &:hover > div:last-child {
    opacity: 0.6;
  }
`
