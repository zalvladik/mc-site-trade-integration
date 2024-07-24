import styled from 'styled-components'

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  position: relative;

  align-items: center;

  width: max-content;
  justify-content: start;

  width: 100%;
  height: 100%;

  background: radial-gradient(
    circle,
    rgba(80, 80, 80, 1) 0%,
    rgba(40, 40, 40, 1) 100%
  );

  -webkit-box-shadow:
    inset 0px 0px 50px 10px rgba(0, 0, 0, 1),
    0px 0px 12px -5px rgba(255, 255, 255, 1);
  -moz-box-shadow:
    inset 0px 0px 50px 10px rgba(0, 0, 0, 1),
    0px 0px 12px -5px rgba(255, 255, 255, 1);
  box-shadow:
    inset 0px 0px 50px 10px rgba(0, 0, 0, 1),
    0px 0px 12px -5px rgba(255, 255, 255, 1);

  & > h1 {
    position: absolute;
    top: 15px;

    font-family: 'Minecraft', sans-serif;
    font-size: 24px;
    font-weight: 500;

    text-shadow: 2.5px 2.5px 1px rgb(200, 200, 200, 0.5);
  }
`

export const ButtonsContainer = styled.div`
  width: 500px;

  padding: 10px;

  margin-top: 50px;

  /* translate: 30px 0px; */

  display: flex;
  flex-direction: column;
  gap: 9px;
`

export const DefaultButtonWrapper = styled.div`
  position: relative;
  display: flex;

  justify-content: space-between;
`

// export const EnchantImg = styled.div`
//   position: absolute;

//   width: 36px;
//   height: 36px;

//   left: 0px;
//   top: 50%;

//   translate: -150% -50%;

//   background-repeat: no-repeat;
//   background-size: contain;
// `
