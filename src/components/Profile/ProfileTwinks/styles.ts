import styled from 'styled-components'

export const Container = styled.div`
  display: flex;
  flex-direction: column;

  gap: 20px;

  background-color: rgba(20, 20, 20, 0.6);

  -webkit-box-shadow:
    inset 0px 0px 32px 8px rgba(0, 0, 0, 0.5),
    0px 0px 12px -5px rgba(255, 255, 255, 0.5);
  -moz-box-shadow:
    inset 0px 0px 32px 8px rgba(0, 0, 0, 0.5),
    0px 0px 12px -5px rgba(255, 255, 255, 0.5);
  box-shadow:
    inset 0px 0px 32px 8px rgba(0, 0, 0, 0.5),
    0px 0px 12px -5px rgba(255, 255, 255, 0.5);

  position: relative;
  border: 1px solid black;
  border-radius: 8px;
  border: 2px solid rgba(50, 50, 50, 1);

  padding: 20px;

  max-width: 500px;
`

export const FormAddTwink = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  gap: 16px;
`

export const TwinkUserNameList = styled.div`
  display: flex;
  flex-direction: column;
  gap: 16px;

  & > div {
    padding: 8px;
    border-radius: 4px;

    text-align: center;
    font-family: 'Minecraft', sans-serif;
    font-size: 28px;
    font-weight: 500;

    text-shadow: 2.5px 2.5px 2px rgba(0, 0, 0, 1);
  }

  & > div:not(:last-child) {
    background-color: rgba(60, 60, 60, 0.5);

    -webkit-box-shadow:
      inset 0px 0px 20px 6px rgba(0, 0, 0, 0.5),
      0px 0px 12px -3px rgba(255, 255, 255, 0.5);
    -moz-box-shadow:
      inset 0px 0px 20px 6px rgba(0, 0, 0, 0.5),
      0px 0px 12px -3px rgba(255, 255, 255, 0.5);
    box-shadow:
      inset 0px 0px 20px 6px rgba(0, 0, 0, 0.5),
      0px 0px 12px -3px rgba(255, 255, 255, 0.5);
  }
`

export const DescriptionPrice = styled.div`
  display: flex;
  flex-direction: column;
  gap: 6px;
  padding: 12px;
  border-radius: 6px;
  background-color: rgba(60, 60, 60, 0.5);

  -webkit-box-shadow:
    inset 0px 0px 20px 6px rgba(0, 0, 0, 0.5),
    0px 0px 12px -5px rgba(255, 255, 255, 0.5);
  -moz-box-shadow:
    inset 0px 0px 20px 6px rgba(0, 0, 0, 0.5),
    0px 0px 12px -5px rgba(255, 255, 255, 0.5);
  box-shadow:
    inset 0px 0px 20px 6px rgba(0, 0, 0, 0.5),
    0px 0px 12px -5px rgba(255, 255, 255, 0.5);

  & > div {
    text-align: center;

    font-family: 'Minecraft', sans-serif;
    font-size: 20px;
    font-weight: 500;
    word-wrap: break-word;

    text-shadow: 2.5px 2.5px 2px rgba(0, 0, 0, 1);
  }
`
