import styled, { css } from 'styled-components';

import TooltipVariation from '../TooltipVariation';

interface ContainerProps {
  isFocused: boolean;
  isFilled: boolean;
  isErrored: boolean;
}

export const Container = styled.section<ContainerProps>`
  background: #fff;
  border-radius: 1rem;
  /* Colocamos a bordinha que ficará vermelha */
  border: 0.3rem solid #666360;
  padding: 0.5rem;
  padding-right: 1rem;
  width: 23.5rem;

  height: 5rem;

  color: #666360;

  display: flex;
  align-items: center;

  ${(props) =>
    props.isErrored &&
    css`
      border-color: #c53030;
    `}

  ${(props) =>
    props.isFocused &&
    css`
      color: var(--primary);
      border-color: var(--primary);
    `}

  ${(props) =>
    props.isFilled &&
    css`
      color: var(--primary);
    `}

  input {
    flex: 1;
    font-size: 1.25rem;
    background: transparent;
    border: 0;
    color: #000;

    &::placeholder {
      color: #cbc2c2;
    }
  }

  svg {
    margin-right: 0.5rem;
  }
`;

export const Error = styled(TooltipVariation)`
  svg {
    height: 3.5rem;
    width: 3.5rem;
    margin: 0;
    padding: 0;
  }

  span {
    background: #ff0000;
    color: #fff;

    &::before {
      border-color: #ff0000 transparent;
    }
  }
`;
