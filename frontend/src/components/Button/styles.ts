import styled from 'styled-components';
import { shade } from 'polished';

export const Container = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  background: #2980b9;
  height: 5rem;
  border-radius: 1rem;
  width: 5rem;
  /* Colocamos a bordinha que ficará vermelha */
  border: 0;
  padding: 1rem;
  color: #fff;
  font-weight: bold;
  transition: background-color 0.2s;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);

  &:hover {
    background: ${shade(0.2, '#2980B9')};
  }
`;
