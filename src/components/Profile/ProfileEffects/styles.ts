import styled from 'styled-components'

export const Container = styled.div`
  display: flex;
`

export const AddEffectForm = styled.div`
  transition: width 0.5s ease;
  flex: 1;

  border-radius: 8px;

  background-color: rgba(15, 25, 35, 1);

  -webkit-box-shadow:
    inset 0px 0px 16px 12px rgba(0, 0, 0, 0.6),
    0px 0px 12px -5px rgba(255, 255, 255, 1);
  -moz-box-shadow:
    inset 0px 0px 16px 12px rgba(0, 0, 0, 0.6),
    0px 0px 12px -5px rgba(255, 255, 255, 1);
  box-shadow:
    inset 0px 0px 16px 12px rgba(0, 0, 0, 0.6),
    0px 0px 12px -5px rgba(255, 255, 255, 1);

  & > h1 {
    font-family: 'Minecraft', sans-serif;
    font-size: 30px;
    font-weight: 500;

    text-shadow: 2.5px 2.5px 2px rgba(0, 0, 0, 1);

    margin-bottom: 16px;

    text-align: center;
  }
`

export const GalleryContainer = styled.div`
  display: flex;
  overflow-x: auto;
  white-space: nowrap;

  padding: 10px;

  height: 220px;
`

export const GalleryRow = styled.div`
  display: flex;
`

export const GalleryItem = styled.div`
  width: 167px;
  height: 167px;

  background-size: contain;
  background-repeat: no-repeat;

  border-radius: 8px;

  transition:
    transform 0.4s cubic-bezier(0.075, 0.82, 0.165, 1),
    opacity 0.2s ease;

  &:hover {
    cursor: pointer;
    transform: scale(1.05);
  }

  & + & {
    margin-left: 20px;
  }
`

export const EffectStylesContainer = styled.div`
  display: flex;
  justify-content: space-around;
  flex-wrap: nowrap;

  margin-bottom: 60px;

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
      transform: scale(1.05);
    }
  }
`

export const EffectInfoContainer = styled.div`
  background: rgb(78, 78, 78);
  background: linear-gradient(
    137deg,
    rgba(78, 78, 78, 1) 0%,
    rgba(68, 68, 68, 1) 18%,
    rgba(60, 60, 60, 1) 30%,
    rgba(73, 73, 73, 1) 42%,
    rgba(66, 66, 66, 1) 55%,
    rgba(60, 60, 60, 1) 66%,
    rgba(59, 59, 59, 1) 82%,
    rgba(91, 91, 91, 1) 100%
  );

  -webkit-box-shadow:
    inset 0px 0px 32px 8px rgba(0, 0, 0, 1),
    0px 0px 12px -5px rgba(255, 255, 255, 1);
  -moz-box-shadow:
    inset 0px 0px 32px 8px rgba(0, 0, 0, 1),
    0px 0px 12px -5px rgba(255, 255, 255, 1);
  box-shadow:
    inset 0px 0px 32px 8px rgba(0, 0, 0, 1),
    0px 0px 12px -5px rgba(255, 255, 255, 1);

  position: relative;
  border-radius: 8px;
  border: 2px solid rgba(50, 50, 50, 1);

  padding: 20px;

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

export const EffectsList = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  gap: 16px;

  width: 380px;

  & > div {
    background-color: rgba(25, 35, 45, 1);

    width: 100%;
  }
`

export const EffectListContainer = styled.div`
  display: flex;

  border: 4px solid #9c9c9c;
  border-radius: 16px;

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
    width: 160px;
    height: 160px;
    background-repeat: no-repeat;
    background-size: contain;

    border: 2px solid whitesmoke;
    border-radius: 8px;
  }

  & > div:last-child {
    opacity: 0;

    width: 180px;
    height: 180px;

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

export const AddNewEffectContainer = styled.div`
  display: flex;

  border: 4px solid grey;
  border-radius: 16px;

  padding: 14px;

  overflow: hidden;
  gap: 20px;

  justify-content: center;

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
`

export const AddNewEffect = styled.div`
  display: flex;
  align-items: center;

  & > div {
    font-family: 'Minecraft', sans-serif;
    font-size: 30px;
    font-weight: 500;

    text-shadow: 2.5px 2.5px 2px rgba(0, 0, 0, 1);
    white-space: nowrap;
  }
`

export const EffectContainer = styled.div``

export const StyleContainer = styled.div``
