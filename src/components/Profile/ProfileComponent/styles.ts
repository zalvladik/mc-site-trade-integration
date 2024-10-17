import styled from 'styled-components'

export const Container = styled.div`
  width: 348px;
  height: 518px;

  background-color: rgba(20, 20, 20, 0.6);

  border: 1px solid gray;

  border-radius: 8px;
  -webkit-box-shadow:
    inset 0px 0px 20px 10px rgba(10, 10, 10, 0.75),
    0px 0px 12px -5px rgba(255, 255, 255, 1);
  -moz-box-shadow:
    inset 0px 0px 20px 10px rgba(10, 10, 10, 0.75),
    0px 0px 12px -5px rgba(255, 255, 255, 1);
  box-shadow:
    inset 0px 0px 20px 10px rgba(10, 10, 10, 0.75),
    0px 0px 12px -5px rgba(255, 255, 255, 1);
`

export const CatContainer = styled.div`
  position: absolute;
  top: 0px;
  right: 0px;

  translate: -20% -80%;
  width: 80px;
  height: 80px;
  background-image: url('/assets/gifs/cute-cat-white.gif');
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center;
`

export const PlayerRoleImageWrapper = styled.div`
  z-index: 1;

  width: 100px;
  height: 100px;

  position: absolute;
  top: 0px;
  left: 0px;

  translate: -50% -50%;

  &:hover {
    z-index: 999;
  }

  & > div {
    position: relative;

    &:hover > div.hover_description {
      display: flex;
    }
  }
`

export const SkinContainer = styled.div`
  position: relative;
`

export const PlayTimeStats = styled.div`
  font-family: 'Minecraft', sans-serif;
  font-weight: 500;
  font-size: 24px;

  text-shadow: 3px 3px 2px rgba(0, 0, 0, 1);

  & > span {
    font-family: 'Minecraft', sans-serif;
    font-weight: 500;
    font-size: 28px;

    color: gray;

    text-shadow: 3px 3px 2px rgba(0, 0, 0, 1);
  }
`

export const PlayerRoleImage = styled.div`
  width: 100px;
  height: 100px;

  background-size: contain;
  background-repeat: no-repeat;

  &:hover {
    cursor: help;
  }

  animation: animation_PlayerRoleImage 8s infinite ease-in-out;

  @keyframes animation_PlayerRoleImage {
    0% {
      transform: rotate(-4deg) translateY(0px);
    }
    50% {
      transform: rotate(4deg) translateY(10px);
    }
    100% {
      transform: rotate(-4deg) translateY(0px);
    }
  }
`

export const VipDateInfoContainer = styled.div`
  position: relative;

  background-color: rgba(30, 30, 30, 0.8);

  padding: 20px 0px;
  border-radius: 6px;

  border: 2px solid rgba(50, 50, 50, 1);

  text-align: center;

  -webkit-box-shadow:
    inset 0px 0px 10px 4px rgba(0, 0, 0, 1),
    0px 0px 8px 0px rgba(255, 255, 255, 0.4);
  -moz-box-shadow:
    inset 0px 0px 10px 4px rgba(0, 0, 0, 1),
    0px 0px 8px 0px rgba(255, 255, 255, 0.4);
  box-shadow:
    inset 0px 0px 10px 4px rgba(0, 0, 0, 1),
    0px 0px 8px 0px rgba(255, 255, 255, 0.4);

  & > h3 {
    font-family: 'Minecraft', sans-serif;
    font-weight: 500;
    font-size: 24px;

    text-shadow: 3px 3px 2px rgba(0, 0, 0, 1);
  }
`

export const VipImage = styled.div`
  position: absolute;
  top: 10%;

  translate: 40% -60%;

  right: 0px;
  width: 50px;
  height: 50px;

  background-repeat: no-repeat;
  background-size: contain;
`

export const VipDateInfo = styled.div`
  display: flex;
  gap: 6px;

  margin: 0px auto;
  margin-top: 10px;

  width: max-content;

  font-weight: 900;
  font-size: 14px;
  text-shadow: 3px 3px 2px rgba(0, 0, 0, 1);
  color: white;

  & > div {
    font-family: 'Minecraft', sans-serif;
    font-weight: 500;
    font-size: 16px;

    text-shadow: 3px 3px 2px rgba(0, 0, 0, 1);
  }
`
