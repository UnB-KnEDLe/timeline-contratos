import styled, { keyframes, css } from 'styled-components';
import { shade } from 'polished';
import headerAdvancedSearch from '../../assets/headerAdvancedSearch.svg';

interface NumberProcessProps {
  withProcessStyle: boolean;
  onVisibleProcess: boolean;
}

interface DateProps {
  withDateStyle: boolean;
  onVisible: boolean;
}

const appearFromLeft = keyframes`
  from{
    opacity: 0;
    transform: translateX(50px);
  } to {
    opacity: 1;
    transform: translateX(0);
  }
`;

export const Container = styled.div`
  display: flex;
  flex-direction: column;

  animation: ${appearFromLeft} 1s;

  height: 47.5rem;
  width: 38rem;
  border: 0.5rem solid var(--primary);
  margin-top: 6rem;
  margin-left: 20rem;
  border-radius: 26px 26px 0px 0px;
  background-color: var(--background);
`;

export const Header = styled.header`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 6rem;
  width: 100%;
  background: url(${headerAdvancedSearch}) no-repeat center;
  background-size: cover;
  border-radius: 16px 16px 0px 0px;

  h1 {
    color: var(--background);
    height: 6rem;
    margin-top: 3rem;
    margin-right: 10rem;
  }
`;

export const NumberProcess = styled.div<NumberProcessProps>`
  display: flex;
  flex-direction: column;
  margin-top: 1.625rem;
  margin-left: 3.5rem;
  section {
    width: 30rem;
    margin-right: 3.5rem;
  }
  h2 {
    font-weight: bold;
    color: var(--primary);
    margin-bottom: 1rem;
  }
  section {
    > div {
      margin-left: 0;
      svg {
        height: 3rem;
        width: 3rem;
        padding: 0;
      }
    }

    div:last-child {
      ${(props) =>
        props.onVisibleProcess &&
        css`
          visibility: hidden;
        `}
    }
    ${(props) =>
      props.withProcessStyle &&
      css`
        background-color: #e7e7e7;
        cursor: not-allowed;
        border-color: #686868;
        color: #e7e7e7;
      `}
    input {
      ${(props) =>
        props.withProcessStyle &&
        css`
          cursor: not-allowed;
          color: #e7e7e7;
        `}
    }
    input::placeholder {
      ${(props) =>
        props.withProcessStyle &&
        css`
          color: #e7e7e7;
          cursor: not-allowed;
        `}
    }
  }
`;

export const DateProcess = styled.div<DateProps>`
  display: flex;
  flex-direction: column;
  margin-top: 1.625rem;
  margin-left: 3.5rem;

  span {
    display: flex;
    align-items: center;

    h3 {
      color: var(--primary);
      font-weight: bold;
      margin: 0 2.1rem;
    }
  }

  section {
    display: flex;
    align-items: center;
    justify-content: center;
    max-width: 12rem;
    padding: 0rem;

    input {
      max-width: 7.2rem;
    }

    > div {
      margin-left: 0;

      svg {
        height: 3rem;
        width: 3rem;
        margin-right: 0.6rem;
        margin-top: 0.5rem;
        padding: 0;
      }
    }

    div:last-child {
      ${(props) =>
        props.onVisible &&
        css`
          visibility: hidden;
        `}
    }

    ${(props) =>
      props.withDateStyle &&
      css`
        background-color: #e7e7e7;
        cursor: not-allowed;
        border-color: #686868;
        color: #e7e7e7;
      `}
    input {
      ${(props) =>
        props.withDateStyle &&
        css`
          cursor: not-allowed;
        `}
    }
    input::placeholder {
      ${(props) =>
        props.withDateStyle &&
        css`
          color: #e7e7e7;
          cursor: not-allowed;
        `}
    }
  }
  h2 {
    font-weight: bold;
    color: var(--primary);
    margin-bottom: 1rem;
  }
`;
export const TypeButton = styled.div`
  position: relative;
  display: flex;
  align-items: center;
  margin-left: 3.5rem;
  top: 9.5rem;
`;

export const CheckProcess = styled.div`
  display: flex;
  position: relative;
  justify-items: center;
  align-items: center;
  margin-top: 0.5rem;

  p {
    color: #000000;
  }
`;

export const CheckDate = styled.div`
  display: flex;
  position: relative;
  left: -0.6rem;
  justify-items: center;
  align-items: center;
  margin-top: 0.5rem;

  p {
    color: #000000;
  }
`;

export const Cancel = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  background: #e7e7e7;
  height: 5rem;
  border-radius: 1rem;
  width: 7.25rem;
  /* Colocamos a bordinha que ficará vermelha */
  border: 0;
  padding: 1rem;
  color: #686868;
  font-weight: bold;
  font-size: 1.125rem;
  transition: background-color 0.2s;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  margin-top: 1.2rem;
  margin-right: 18rem;

  &:hover {
    background: ${shade(0.2, '#E7E7E7')};
  }
`;
