import styled, { css } from 'styled-components';

import Tooltip from '../Tooltip';

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
  padding: 1rem;
  padding-right: 3rem;
  width: 800px;

  height: 7.5rem;

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
    justify-content: center;
    align-items: center;
    font-size: 2.25rem;
    background: transparent;
    border: 0;
    color: #000;

    &::placeholder {
      color: #cbc2c2;
    }
  }

  svg {
    margin-right: 2rem;
  }
`;

export const Error = styled(Tooltip)`
  margin-left: 6rem;
  svg {
    height: 6rem;
    width: 6rem;
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
