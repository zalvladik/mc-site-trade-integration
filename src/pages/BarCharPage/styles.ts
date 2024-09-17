import styled from 'styled-components'

export const Container = styled.div`
  padding: 90px 40px 0px 120px;
  position: absolute;
  display: flex;

  justify-content: center;

  top: 50%;
  left: 50%;
  width: 100%;
  height: 95%;
  transform: translate(-50%, -50%);
`

export const CharContainer = styled.div`
  height: 90%;
  width: 100%;
  max-width: 1600px;
`

export const CharFooter = styled.div`
  display: flex;
  justify-content: space-between;
  margin-top: 20px;
`

export const MoneyTransactionInfo = styled.div`
  display: flex;
  gap: 36px;

  background-color: gray;

  padding: 0px 16px;
  border-radius: 6px;

  border: 1px solid gray;
  background: rgba(50, 50, 50, 0.5);

  align-items: center;

  & > p {
    white-space: nowrap;

    font-family: 'Minecraft', sans-serif;
    font-weight: 500;
    font-size: 25px;

    text-shadow: 3px 3px 2px rgba(40, 40, 40, 1);

    &:first-child {
      color: rgb(12, 189, 27);
    }

    &:nth-child(2) {
      color: rgb(170, 33, 28);
    }
    &:last-child {
      color: rgb(30, 144, 180);
    }
  }
`

export const ButtonList = styled.div`
  display: flex;
  gap: 20px;
`
