import styled from 'styled-components'

export const Container = styled.div`
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
