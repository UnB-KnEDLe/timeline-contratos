import styled from 'styled-components';
import { shade } from 'polished';

export const Container = styled.button`
  background: #2980b9;
  height: 7.5rem;
  border-radius: 1rem;
  width: 8.125rem;
  /* Colocamos a bordinha que ficará vermelha */
  border: 0;
  padding: 2rem;
  color: #fff;
  font-weight: bold;
  transition: background-color 0.2s;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);

  &:hover {
    background: ${shade(0.2, '#2980B9')};
  }
`;
