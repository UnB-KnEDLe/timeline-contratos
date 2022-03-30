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
  width: 70%;
  flex-direction: column;
  margin: 2rem 10.625rem 0rem 10.625rem;

  align-items: center;
  justify-content: center;

  animation: ${appearFromLeft} 1s;

  border: 0.5rem solid var(--primary);
  border-radius: 26px 26px 0px 0px;
  border-radius: 0.125rem;
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

  h1 {
    color: var(--background);
  }
`;

export const WrapperParametersForm = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
`;

export const WrapperProcessAndDate = styled.div`
  display: flex;
  flex-direction: column;
  margin-left: 3.5rem;
  margin-bottom: 1.625rem;
  margin-right: 7rem;
`;

export const NumberProcess = styled.div<NumberProcessProps>`
  display: flex;
  flex-direction: column;
  margin-top: 1.625rem;

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
      display: flex;
      align-items: center;
      justify-content: center;
      max-width: 7.2rem;
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

export const WrapperTypeActAndCancelConfirmButton = styled.div`
  display: flex;
  flex: 1;
  flex-direction: column;
  width: 100%;
  max-width: 30rem;
  margin-top: 1.625rem;
  margin-right: 3.5rem;
`;

export const TypeButton = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 1.625rem;
`;

export const Cancel = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  background: #e7e7e7;
  height: 5rem;
  border-radius: 0.125rem;
  margin-left: 15rem;
  margin-right: 2rem;
  width: 7.25rem;
  /* Colocamos a bordinha que ficará vermelha */
  border: 0;
  padding: 1rem;
  color: #686868;
  font-weight: bold;
  font-size: 1.125rem;
  transition: background-color 0.2s;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);

  &:hover {
    background: ${shade(0.2, '#E7E7E7')};
  }
`;
