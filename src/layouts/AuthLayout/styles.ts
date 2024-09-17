import styled from 'styled-components'

export const Container = styled.div`
  min-height: 100vh;
`

export const MoneyInfoContainer = styled.div`
  display: flex;

  position: absolute;
  align-items: center;

  right: 80px;

  top: 30px;
`

export const NickNameInfoContainer = styled.div`
  display: flex;

  position: absolute;
  align-items: center;

  left: 120px;
  top: 30px;

  padding: 4px 12px 8px 12px;
  border-radius: 6px;

  border: 1px solid gray;
  background: rgb(112, 112, 112);
  background: linear-gradient(
    142deg,
    rgba(112, 112, 112, 0.5) 0%,
    rgba(68, 68, 68, 0.5) 17%,
    rgba(74, 74, 74, 0.5) 29%,
    rgba(77, 77, 77, 0.5) 63%,
    rgba(70, 70, 70, 0.5) 65%,
    rgba(126, 126, 126, 0.5) 100%
  );

  & > div {
    font-family: 'Minecraft', sans-serif;
    font-weight: 500;
    color: #e2e2e2;

    font-size: 30px;
  }
`
