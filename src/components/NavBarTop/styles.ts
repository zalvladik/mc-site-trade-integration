import styled from 'styled-components'

export const ContainerWrapper = styled.div`
  z-index: 99;

  position: absolute;
  left: 50%;
  top: 24px;
  translate: -35% 0%;
`

export const Container = styled.div`
  position: relative;
  display: flex;
  flex-direction: row;

  overflow: hidden;
  border-radius: 8px;

  background: rgba(30, 30, 30, 0.8);

  -webkit-box-shadow:
    inset 0px 0px 10px 1px rgba(0, 0, 0, 0.75),
    0px 0px 12px -5px rgba(255, 255, 255, 1);
  -moz-box-shadow:
    inset 0px 0px 10px 1px rgba(0, 0, 0, 0.75),
    0px 0px 12px -5px rgba(255, 255, 255, 1);
  box-shadow:
    inset 0px 0px 10px 1px rgba(0, 0, 0, 0.75),
    0px 0px 12px -5px rgba(255, 255, 255, 1);

  & > div {
    padding: 10px 20px;

    background-repeat: no-repeat;
    background-size: cover;

    &:hover {
      cursor: pointer;
    }

    transition: transform 0.3s cubic-bezier(0.075, 0.82, 0.165, 1);

    &:hover {
      cursor: pointer;
      transform: scale(1.05);
    }
  }

  & > svg {
    position: absolute;
  }

  & rect {
    stroke-width: 3px;
    fill: transparent;
    stroke: rgba(0, 150, 170, 0.9);
    animation: svgAnimation 160s linear infinite;

    @keyframes svgAnimation {
      from {
        stroke-dashoffset: 0;
      }
      to {
        stroke-dashoffset: 8000;
      }
    }
  }
`