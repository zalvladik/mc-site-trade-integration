import styled from 'styled-components'

export const Container = styled.div`
  padding: 0px 40px 0px 120px;
  position: absolute;
  top: 50%;
  left: 50%;
  width: 100%;
  height: 90%;

  transform: translate(-50%, -50%);
  display: flex;
  align-items: center;
  flex-wrap: wrap;

  justify-content: center;
`

export const UserInventoryWrapper = styled.div`
  display: flex;
  width: max-content;
  flex-direction: column;
  gap: 25px;
`
