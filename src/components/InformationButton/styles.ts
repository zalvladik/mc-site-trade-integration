import styled from 'styled-components'

export const Container = styled.div`
  position: absolute;

  display: flex;

  align-items: center;
  justify-content: center;

  background-color: #222222;

  border: 0.5px solid white;
  border-radius: 6px;

  opacity: 0.4;

  translate: -50% -50%;
  padding: 4px;

  transition: opacity 300ms ease-in-out;

  &:hover {
    cursor: pointer;
    opacity: 1;
  }
`
