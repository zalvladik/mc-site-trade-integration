import { styled } from 'styled-components'

export const Header = styled.div`
  width: 100%;
  position: fixed;
  top: 0;
  left: 0;
  background: rgba(0, 0, 0, 0.1);
  backdrop-filter: blur(5px);
  transition: transform 0.3s ease-in-out;
  z-index: 9;

  &.hidden {
    transform: translateY(-100%);
  }
`

export const ButtonBack = styled.div`
  display: flex;
  width: 60px;
  height: 55px;
  transition: scale 0.2s ease;

  @media screen and (max-width: 767px) {
    height: 50px;
    width: 50px;
  }

  @media screen and (max-width: 390px) {
    height: 40px;
    width: 40px;
  }

  &:hover {
    scale: 1.05;
    cursor: pointer;
  }
`

export const HeaderContainer = styled.div`
  padding: 15px 100px;
  justify-content: space-between;
  display: flex;
  align-items: center;

  @media screen and (max-width: 767px) {
    padding: 15px 50px;
  }

  @media screen and (max-width: 390px) {
    padding: 15px 20px;
  }

  & > div {
    display: flex;
    gap: 40px;
  }
`

export const NickNameContainer = styled.div`
  display: flex;

  gap: 40px;

  & > div {
    font-family: 'Minecraft', sans-serif;

    margin: auto 0px;

    color: rgb(255, 255, 255);

    font-weight: 500;
    font-size: 28px;
    transition: opacity 0.1s ease-in-out;
  }
`

export const NavList = styled.div`
  display: flex;

  gap: 20px;

  & > button {
    font-family: 'Minecraft', sans-serif;

    background-color: rgba(0, 0, 0, 0);
    border: none;

    padding: 30px 0px;
    margin: -30px 0px;
    font-weight: 500;
    font-size: 25px;
    transition: opacity 0.1s ease-in-out;

    &:hover {
      cursor: pointer;
    }

    transition: transform 0.3s cubic-bezier(0.075, 0.82, 0.165, 1);

    &:hover {
      cursor: pointer;
      transform: scale(1.05);
    }
  }

  @media screen and (max-width: 767px) {
    & > button + button {
      margin-left: 20px;
    }
  }
`
