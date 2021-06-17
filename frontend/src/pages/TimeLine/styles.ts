import styled from 'styled-components';
import HeaderImg from '../../assets/header.svg';

export const Container = styled.div`
  header {
    height: 11.5rem;
    background: url(${HeaderImg});
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  }
  p {
    text-align: justify;
  }
  svg {
    color: #2980b9;
  }
`;
