import styled, { keyframes, css } from 'styled-components';

interface NavProps {
  offHover: boolean;
}

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  flex: 1;
  justify-content: flex-start;
  flex-direction: column;
  width: 100%;
  height: 15rem;
  margin-bottom: 1.25rem;


  h2 {
    font-weight: bold;
    color: var(--primary);
    margin-bottom: 1rem;
  }

`;

export const Nav = styled.div<NavProps>`
  text-align: center;
  width: 100%;
  height: 5rem;


  ${(props) =>
    props.offHover &&
    css`
      pointer-events: none;
    `}

  ul {
    list-style-type: none;
  }
`;

export const NavMenu = styled.li`
  width: 100%;
  line-height: 65px;

  text-transform: uppercase;
  background-color: #2c8fb5;

  cursor: pointer;
  color: #fafafa;

  font-weight: bold;
  font-size: 0.95rem;
  overflow-y: scroll;
  overflow-x: hidden;

  display: block;


  &:hover {
    background-color: #226f8c;
    overflow-y: scroll;
    overflow-x: hidden;
    height: 16rem;

    li {
      display: block;
    }
  }

  &:nth-child(1) {
    border-top-left-radius: 2px;
  }

  &:last-child {
    border-top-right-radius: 2px;
  }
`;

export const NavMenuList = styled.ul`
  perspective: 5000px;
`;

const menu1 = keyframes`
  from {
    opacity: 0;
    transform: rotateX(-180deg);
 }
  to {
    opacity: 1;
    transform: rotateX(0deg);
 }
 `;

export const NavMenuItems = styled.li`
  animation: ${menu1} 0.5s;
  display: none;
  width: 100%;
  height: 3.75rem;
  background-color: #2c8fb5;
  color: #fafafa;
  font-weight: bold;

  &:hover {
    background-color: #226f8c;
  }
`;
