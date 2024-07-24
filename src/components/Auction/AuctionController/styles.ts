import styled from 'styled-components'

export const Container = styled.div`
  display: flex;
  flex-direction: column;

  background-color: rgba(15, 25, 35, 1);
  padding: 16px 10px 16px 10px;

  border-top-right-radius: 8px;

  -webkit-box-shadow: inset 0px 0px 16px 12px rgba(0, 0, 0, 0.6);
  -moz-box-shadow: inset 0px 0px 16px 12px rgba(0, 0, 0, 0.6);
  box-shadow: inset 0px 0px 16px 12px rgba(0, 0, 0, 0.6);
`

export const ButtonsContainer = styled.div`
  width: 320px;

  display: flex;
  flex-direction: column;
  gap: 10px;

  & > div {
    margin: 0px auto;

    & > div {
      font-size: 22px;
    }
  }
`
