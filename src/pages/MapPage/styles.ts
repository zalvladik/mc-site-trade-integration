import styled from 'styled-components'

export const ContainerMap = styled.div`
  padding: 70px 40px 0px 120px;
  position: absolute;
  top: 50%;
  left: 50%;
  width: 100%;
  height: 95%;
  transform: translate(-50%, -50%);

  & > iframe {
    border-radius: 12px;
    overflow: hidden;
  }
`

export const ContainerBuilds = styled.div`
  padding: 110px 150px 80px 200px;
`

export const BuildImage = styled.div`
  background-repeat: no-repeat;
  background-size: contain;

  min-width: 400px;
  min-height: 400px;
`

export const BuildInfo = styled.div``

export const BuildTitle = styled.div`
  margin-bottom: 20px;
  font-family: 'Minecraft', sans-serif;
  font-weight: 500;
  font-size: 32px;
  text-align: center;

  text-shadow: 3px 3px 2px rgba(40, 40, 40, 1);
`

export const BuildPasport = styled.div`
  display: flex;
  flex-direction: column;
  gap: 12px;

  & > div {
    text-align: center;
    font-family: 'Minecraft', sans-serif;
    font-weight: 500;
    font-size: 20px;
    color: rgb(255, 255, 255);

    text-shadow: 3px 3px 2px rgba(40, 40, 40, 1);

    white-space: nowrap;
  }
`

export const BuildDescription = styled.div`
  font-family: 'Minecraft', sans-serif;
  font-weight: 500;
  font-size: 24px;
  color: rgb(150, 150, 150);

  text-shadow: 3px 3px 2px rgba(40, 40, 40, 1);

  & + & {
    margin-top: 12px;
  }
`

export const BuildsList = styled.div`
  & > div {
    display: flex;
    align-items: center;
    gap: 50px;
  }
`

export const MapNavContainer = styled.div`
  display: flex;

  z-index: 99;

  position: absolute;
  left: 50%;
  top: 14px;

  border: 1px solid gray;
  border-radius: 8px;

  background: radial-gradient(
    circle,
    rgba(40, 45, 50, 1) 70%,
    rgba(40, 45, 50, 1) 100%
  );

  -webkit-box-shadow:
    inset 0px 0px 10px 1px rgba(0, 0, 0, 0.75),
    0px 0px 12px -5px rgba(255, 255, 255, 1);
  -moz-box-shadow:
    inset 0px 0px 10px 1px rgba(0, 0, 0, 0.75),
    0px 0px 12px -5px rgba(255, 255, 255, 1);
  box-shadow:
    inset 0px 0px 10px 1px rgba(0, 0, 0, 0.75),
    0px 0px 12px -5px rgba(255, 255, 255, 1);

  & > div:not(:last-child) {
    padding: 10px 20px;

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
