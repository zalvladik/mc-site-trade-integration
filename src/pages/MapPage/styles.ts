import styled from 'styled-components'

export const Container = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  width: 95%;
  height: 95%;
  padding-top: 80px;
  transform: translate(-50%, -50%);

  & > iframe {
    border-radius: 12px;
    overflow: hidden;
  }
`
