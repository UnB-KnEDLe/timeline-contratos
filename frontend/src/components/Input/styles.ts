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
<<<<<<< HEAD
=======
  padding-right: 3rem;
>>>>>>> 602963973cae396a962cc7d45c2ad9e9ca4c9cfb
  width: 100%;
  height: 7.5rem;

  color: #666360;

  display: flex;
  align-items: center;

  & + div {
    margin-top: 8px;
  }

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
<<<<<<< HEAD
      color: #666360;
=======
      color: #cbc2c2;
>>>>>>> 602963973cae396a962cc7d45c2ad9e9ca4c9cfb
    }
  }

  svg {
    margin-right: 2rem;
  }
`;

export const Error = styled(Tooltip)`
  height: 20px;
  margin-left: 16px;

  svg {
    margin: 0;
  }

  span {
    background: #c53030;
    color: #fff;

    &::before {
      border-color: #c53030 transparent;
    }
  }
`;
