import styled from 'styled-components'

export const Container = styled.div`
  display: flex;
`

export const EnderDragonImage = styled.div`
  position: absolute;
  translate: -50% -80%;
  left: 50%;
  top: 0px;
  width: 400px;
  height: 300px;
  rotate: -20deg;

  background-image: url('/assets/ender_dragon.webp');
  background-repeat: no-repeat;
  background-size: contain;
`

export const FormContainer = styled.div`
  position: relative;
  max-width: 800px;

  background: rgb(78, 78, 78);
  background: linear-gradient(
    137deg,
    rgba(78, 78, 78, 1) 0%,
    rgba(68, 68, 68, 1) 18%,
    rgba(60, 60, 60, 1) 30%,
    rgba(73, 73, 73, 1) 42%,
    rgba(66, 66, 66, 1) 55%,
    rgba(60, 60, 60, 1) 66%,
    rgba(59, 59, 59, 1) 82%,
    rgba(91, 91, 91, 1) 100%
  );

  -webkit-box-shadow:
    inset 0px 0px 32px 8px rgba(0, 0, 0, 1),
    0px 0px 12px -5px rgba(255, 255, 255, 1);
  -moz-box-shadow:
    inset 0px 0px 32px 8px rgba(0, 0, 0, 1),
    0px 0px 12px -5px rgba(255, 255, 255, 1);
  box-shadow:
    inset 0px 0px 32px 8px rgba(0, 0, 0, 1),
    0px 0px 12px -5px rgba(255, 255, 255, 1);

  border-radius: 8px;
  border: 2px solid rgba(50, 50, 50, 1);

  padding: 20px;
`

export const InfoEndList = styled.ul`
  display: flex;
  flex-direction: column;

  gap: 20px;

  & > li {
    font-family: 'Minecraft', sans-serif;
    font-size: 20px;
    font-weight: 500;

    text-shadow: 2.5px 2.5px 2px rgba(0, 0, 0, 1);

    & > span {
      font-family: 'Minecraft', sans-serif;
      font-size: 20px;
      font-weight: 500;

      text-shadow: 2.5px 2.5px 2px rgba(0, 0, 0, 1);
    }
  }
`
