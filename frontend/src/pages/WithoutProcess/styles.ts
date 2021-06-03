import styled from 'styled-components';

export const Container = styled.div`
  div {
    display: flex;
    flex-direction: column;
    justify-content:center;
    align-items:center;

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

export const BackButton = styled.div`
    display: flex;
    position: absolute;
    width: 100rem;
    height: 17rem;

`;

export const AreaLogo = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding-top: 5rem;
`;


export const ImageNotFound = styled.div`
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
padding-left: 5rem;

`;
