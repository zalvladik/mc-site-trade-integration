import { styled } from 'styled-components'

export const Header = styled.div`
  height: 100%;

  position: fixed;
  top: 0;
  left: 0;
  background: rgba(40, 40, 60, 0.1);
  backdrop-filter: blur(5px);
  transition: transform 0.3s ease-in-out;
  z-index: 9;

  border-right: 1px solid rgba(100, 100, 100, 0.2);

  &.hidden {
    transform: translateY(-100%);
  }
`

export const ButtonBack = styled.div`
  position: absolute;

  top: 30px;
  left: 50%;

  translate: -50% 0%;

  width: 60px;
  height: 55px;

  transition: scale 0.2s ease;

  background-image: url('/assets/logo.svg');
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

  gap: 40px;

  & > div {
    margin: -20px -20px -20px -20px;

    padding: 20px 40px;

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
