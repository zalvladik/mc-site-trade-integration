import styled from 'styled-components'

export const ContainerMap = styled.div`
  padding: 70px 40px 0px 120px;
  position: absolute;
  top: 50%;
  left: 50%;
  width: 100%;
  height: 90%;
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
