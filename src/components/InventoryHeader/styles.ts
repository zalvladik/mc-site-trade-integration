import styled from 'styled-components'

export const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`

export const InventoryHeaderTitle = styled.div`
  display: flex;
  align-items: end;

  gap: 12px;

  & > p:first-child {
    font-family: 'Minecraft', sans-serif;
    padding-left: 20px;
    font-weight: 500;
    font-size: 30px;

    text-shadow:
      0px 0px 25px rgb(100, 100, 100),
      0px 0px 25px rgb(100, 100, 100),
      2px 2px 1px rgba(0, 0, 0, 1);
  }

  & > p:last-child {
    font-family: 'Minecraft', sans-serif;
    padding-left: 10px;
    font-weight: 500;
    font-size: 26px;

    text-shadow:
      0px 0px 25px rgb(100, 100, 100),
      0px 0px 25px rgb(100, 100, 100),
      2px 2px 1px rgba(0, 0, 0, 1);
  }
`
