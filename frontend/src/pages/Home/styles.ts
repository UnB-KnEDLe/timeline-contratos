import styled, { createGlobalStyle, css, keyframes } from 'styled-components';
import { shade } from 'polished';

interface ContainerProps {
  search: boolean;
}
export const GlobalStyleModified = createGlobalStyle`
    :root{
      overflow: hidden;
      }
`;

const appearFromLeft = keyframes`
  from{
    opacity: 0;
    transform: translateX(-50px);
  } to {
    opacity: 1;
    transform: translateX(0);
  }
`;
export const Container = styled.div<ContainerProps>`
display: flex;
flex-direction: column;
    ${(props) =>
    props.search &&
    css`
      align-items: center;
    `}
`;

export const Title = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  h1 {
    font-family: 'Poiret One', sans-serif;
    font-size: 5rem;
    color: var(--primary);
  }

  p {
    margin-top: 1.25rem;
    font-weight: 400;
    font-size: 1.5rem;
  }
`;

export const AnimationDiv = styled.div`
  animation: ${appearFromLeft} 1s;
`;

export const Process = styled.section`
  display: flex;
  justify-content: flex-end;
  margin-top: 25.25rem;
  margin-right: 14.375rem;
  h2 {
    font-size: 1.5rem;
    font-weight: bold;
    margin-bottom: 1.5rem;
    color: var(--primary);
  }
`;

export const WrapperProcess = styled.section`
  display: flex;
  margin-bottom: 0.5rem;
  button {
    margin-left: 1rem;
  }
  div {
    svg {
      margin-left: 0;

      color: var(--primary);
    }
  }
`;

export const AdvancedButton = styled.button`
  text-decoration: none;
  font-weight: bold;
  background: transparent;
  font-size: 1rem;
  color: #999999;
  transition: color 0.2s;
  border: none;

  &:hover {
    color: ${shade(0.2, '#2980B9')};
  }
`;
