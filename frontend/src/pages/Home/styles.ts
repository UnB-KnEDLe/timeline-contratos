import styled from 'styled-components';
import HeaderImg from '../../assets/header.svg';

export const Container = styled.div`
  header {
    height: 11.5rem;
    background: url(${HeaderImg});
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  }
  div {
    img {
      padding-top: 1rem;
    }
    display: flex;
    flex-direction: row;
    align-items: flex-start;
    justify-content: left;

    div {
      display: flex;
      flex-direction: column;
      padding-left: 8rem;
      padding-top: 8rem;
      h2 {
        font-size: 3rem;
        font-weight: bold;
        margin-bottom: 1.5rem;
        color: var(--primary);
      }
      p {
        font-size: 2rem;
        max-width: 50rem;
      }
    }
  }
  span {
    display: flex;
    flex-direction: row;
    align-items: flex-start;
    justify-content: flex-end;

    div {
      display: flex;
      flex-direction: column;
      padding-right: 8rem;
      padding-top: 8rem;
      h2 {
        font-size: 3rem;
        font-weight: bold;
        margin-bottom: 1.5rem;
        color: var(--primary);
      }
      p {
        font-size: 2rem;
        max-width: 50rem;
      }
    }
  }
`;

export const Process = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-top: 8rem;
  margin-bottom: 8rem;
<<<<<<< HEAD
=======
  form {
    display: flex;
    flex-direction: column;
  }
>>>>>>> 602963973cae396a962cc7d45c2ad9e9ca4c9cfb
  h2 {
    font-size: 3rem;
    font-weight: bold;
    margin-bottom: 1.5rem;
    color: var(--primary);
  }
`;
<<<<<<< HEAD
=======

export const Wrapper = styled.span`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  button {
    margin-left: 1rem;
  }
`;
>>>>>>> 602963973cae396a962cc7d45c2ad9e9ca4c9cfb
