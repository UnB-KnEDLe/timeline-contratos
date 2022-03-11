import styled, { createGlobalStyle, css, keyframes } from 'styled-components';
import { shade } from 'polished';

interface ContainerProps {
  direction: boolean;
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

export const AnimationDiv = styled.div`
  animation: ${appearFromLeft} 1s;
`;

export const InitialInformation = styled.div`
  display: flex;
  flex-direction: column;

  img {
    margin-top: 5.75rem;
    margin-left: 4.52rem;
    height: 3.9rem;
    width: 16.63rem;
  }

  h1 {
    margin-top: 5.75rem;
    margin-left: 6.57rem;
    font-size: 5rem;
    color: var(--primary);
  }
`;
// Inverter ! das props

export const Container = styled.div<ContainerProps>`
  ${(props) =>
    props.direction &&
    css`
      display: flex;
      justify-content: space-between;
    `}

  ${(props) =>
    !props.direction &&
    css`
      display: flex;
      flex-direction: column;
      justify-content: space-around;
    `}
`;

export const Text = styled.div`
  display: flex;
  flex-direction: row-reverse;
  margin-right: 23.375rem;
  p {
    font-size: 1.5rem;
  }
`;

export const Process = styled.section`
  display: flex;
  justify-content: flex-end;
  margin-top: 2.875rem;
  margin-right: 14.375rem;
  h2 {
    font-size: 1.5rem;
    font-weight: bold;
    margin-bottom: 1.5rem;
    color: var(--primary);
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

export const Wrapper = styled.section`
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
