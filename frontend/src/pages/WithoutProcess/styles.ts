import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;

  div {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    h1 {
      font-size: 3rem;
      font-weight: bold;
      margin-bottom: 1.5rem;
      color: var(--primary);
    }
    p {
      font-size: 2rem;
      max-width: 60rem;
    }
  }
`;

export const AreaLogo = styled.span`
  display: flex;
  flex-direction: row;
  align-items: center;
  margin-top: 3rem;
  margin-bottom: 3rem;

  svg {
    color: #2980b9;
    margin-left: 7rem;
  }
  img {
    margin: 0 auto;
    padding-right: 15rem;
  }
`;

export const ImageNotFound = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding-left: 5rem;
`;
