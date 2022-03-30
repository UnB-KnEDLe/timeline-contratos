import styled from 'styled-components';

export const Container = styled.div`
  width: 55%;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  text-align: center;

  img {
    padding: 2.75rem;
  }

  svg {
    margin-left: 10.1rem;
  }

  &::after {
      position: absolute;
      height: 2px;
      top: 15%;
      left: 10.5rem;
      right: 10.5rem;
      content: '';
      background: #B7B7B7;

    }
`;

