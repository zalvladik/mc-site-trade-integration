import styled from 'styled-components'

export const Container = styled.div`
  display: flex;
  flex-direction: column;

  background-color: rgba(0, 20, 40, 0.6);
  padding: 16px 10px 16px 10px;

  border-top-right-radius: 8px;

  -webkit-box-shadow: inset 0px 0px 16px 12px rgba(0, 0, 0, 0.6);
  -moz-box-shadow: inset 0px 0px 16px 12px rgba(0, 0, 0, 0.6);
  box-shadow: inset 0px 0px 16px 12px rgba(0, 0, 0, 0.6);
`

export const ButtonsContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-self: center;
  gap: 16px;

  & > div {
    position: relative;
    transition: transform 0.5s cubic-bezier(0.075, 0.82, 0.165, 1);
    cursor: pointer;

    opacity: 0.5;

    &:hover {
      transform: scale(1.1);
      opacity: 1;

      & > .hover_description {
        display: flex;
        width: max-content;
        translate: -50% -240%;
        opacity: 1;
      }
    }
  }
`
