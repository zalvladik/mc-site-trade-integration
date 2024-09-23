import { styled } from 'styled-components'

export const Header = styled.div`
  height: 100%;

  position: fixed;
  top: 0;
  left: 0;
  background: rgb(0, 150, 170);
  background: linear-gradient(
    180deg,
    rgba(0, 150, 170, 1) 0%,
    rgba(28, 106, 116, 1) 5%,
    rgba(36, 74, 79, 1) 10%,
    rgba(38, 58, 61, 1) 15%,
    rgba(30, 30, 30, 1) 25%,
    rgba(20, 20, 20, 1) 80%,
    rgba(0, 0, 0, 1) 100%
  );

  backdrop-filter: blur(5px);
  transition: transform 0.3s ease-in-out;
  z-index: 9;

  border-right: 1px solid rgba(200, 200, 200, 0.4);

  &.hidden {
    transform: translateY(-100%);
  }
`

export const CatContainer = styled.div`
  position: absolute;
  bottom: -70px;
  right: 0px;

  opacity: 0.8;

  translate: -20% -92%;
  width: 70px;
  height: 80px;
  background-image: url('/assets/gifs/nav-cat.gif');
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center;
`

export const NavEffect = styled.div`
  background: linear-gradient(
    0deg,
    rgba(255, 255, 255, 0) 0%,
    rgba(150, 150, 150, 0.9) 50%,
    rgba(255, 255, 255, 0) 100%
  );

  height: 150px;
  width: 3px;
  translate: 100% 0%;
  position: absolute;
  animation: rotate 5s linear forwards infinite;

  right: 0px;
  transform-origin: top center;
  animation: moveUpDown 6s ease-in-out infinite;

  @keyframes moveUpDown {
    0% {
      top: -20%;
    }
    50% {
      top: 100%;
    }
    100% {
      top: -20%;
    }
  }
`

export const ButtonBack = styled.div`
  position: absolute;

  top: 30px;
  left: 50%;

  translate: -50% 0%;

  width: 64px;
  height: 64px;

  transition: scale 0.2s ease;

  background-color: rgba(30, 30, 30, 1);

  border-radius: 25%;
  overflow: hidden;

  background-image: url('/assets/nav_logo.png');
  background-size: contain;
  background-repeat: no-repeat;

  &:hover {
    scale: 1.05;
    cursor: pointer;
  }
`

export const HeaderContainer = styled.div`
  height: 100%;
  display: flex;

  flex-direction: column;
`

export const NavList = styled.div`
  display: flex;
  flex-direction: column;

  margin: auto;

  & > div {
    padding: 20px 20px;

    background-repeat: no-repeat;
    background-size: cover;

    &:hover {
      cursor: pointer;
    }

    transition: transform 0.3s cubic-bezier(0.075, 0.82, 0.165, 1);

    &:hover {
      cursor: pointer;
      transform: scale(1.05);
    }
  }
`
