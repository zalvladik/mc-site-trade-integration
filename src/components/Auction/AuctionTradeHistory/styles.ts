import styled from 'styled-components'

export const Container = styled.div`
  display: flex;
  flex-direction: row;
  gap: 16px;

  width: 100%;
  height: 100%;

  background: linear-gradient(
    135deg,
    rgba(15, 50, 70, 1) 0%,
    rgba(15, 50, 70, 0.7) 10%,
    rgba(15, 50, 70, 0.5) 20%,
    rgba(15, 15, 15, 0.3) 30%,
    rgba(15, 15, 15, 1) 50%,
    rgba(15, 15, 15, 0.3) 70%,
    rgba(15, 50, 70, 0.5) 80%,
    rgba(15, 50, 70, 0.7) 90%,
    rgba(15, 50, 70, 1) 100%
  );

  & > div {
    width: 50%;

    padding: 20px;
    border: 1px solid rgb(60, 60, 60);
    border-radius: 8px;

    background-color: rgba(50, 50, 50, 0.5);

    -webkit-box-shadow: inset 0px 0px 26px 8px rgba(0, 0, 0, 1);
    -moz-box-shadow: inset 0px 0px 26px 8px rgba(0, 0, 0, 1);
    box-shadow: inset 0px 0px 26px 8px rgba(0, 0, 0, 1);

    & > h1 {
      padding-bottom: 20px;

      text-align: center;

      font-family: 'Minecraft', sans-serif;
      font-size: 24px;
      font-weight: 500;

      text-shadow: 2.5px 2.5px 1px rgb(200, 200, 200, 0.5);
    }
  }
`

export const StickyData = styled.div`
  padding: 5px 0px;
  margin: 0px 0px 15px 0px;
  background-color: rgb(50, 50, 50);
  border-radius: 12px;
  border: 3px solid rgba(128, 128, 128, 0.5);
  position: sticky;
  z-index: 100;
  top: 5px;
`

export const HistoryListContainer = styled.div`
  height: 560px;
  overflow-y: auto;
  overflow-x: hidden;

  border: 4px solid rgba(128, 128, 128, 0.5);

  border-radius: 8px;

  padding: 0px 10px 20px 10px;
  & > div {
    display: flex;
    &:not(.stickyData) {
      margin-right: 24px;
      justify-content: end;
    }

    &:not(:first-child) {
      margin-top: 10px;
    }
  }
`

export const ItemTextInfoContainer = styled.div`
  display: flex;
  align-items: center;

  & > div {
    & > div {
      text-align: center;

      font-family: 'Minecraft', sans-serif;
      font-size: 20px;
      font-weight: 500;

      text-shadow:
        0px 0px 50px #000000,
        3px 3px 1px rgba(0, 0, 0, 1);
    }
  }
`
