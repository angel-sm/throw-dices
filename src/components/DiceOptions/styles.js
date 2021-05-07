import styled from 'styled-components'

export const StyledDice1 = styled.i`
  &1 {
    display: block;
    transform: scale(var(--ggs, 1));
    position: relative;
    box-sizing: border-box;
    width: 22px;
    height: 22px;
    border: 2px solid;
    border-radius: 3px;
  }
  &1::before {
    content: '';
    display: block;
    box-sizing: border-box;
    background: currentColor;
    position: absolute;
    width: 4px;
    height: 4px;
    border-radius: 4px;
    left: 7px;
    top: 7px;
  }
`