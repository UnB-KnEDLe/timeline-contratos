import styled, { keyframes, css } from 'styled-components';

interface NavProps {
  offHover: boolean;
}

export const Container = styled.div`
  display: flex;
  margin-top: 2rem;
`;

export const Act = styled.div`
  display: flex;
  position: relative;
  top: -8rem;
  flex-direction: column;
  margin-top: 1.625rem;
  margin-left: 3.5rem;
  section {
    width: 30rem;
    margin-right: 3.5rem;
  }
  h2 {
    font-weight: bold;
    color: var(--primary);
    margin-bottom: 1rem;
  }
`;

export const Menu = styled.div``;

export const Nav = styled.div<NavProps>`
  text-align: center;
  width: 100%;

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
  float: left;
  width: 30rem;
  line-height: 65px;
  text-transform: uppercase;
  background-color: #2c8fb5;
  cursor: pointer;
  color: #fafafa;
  font-weight: bold;
  font-size: 0.95rem;
  overflow-y: scroll;
  overflow-x: hidden;

  &:hover {
    background-color: #226f8c;
    overflow-y: scroll;
    overflow-x: hidden;
    height: 18rem;

    li {
      display: block;
    }
  }

  &:nth-child(1) {
    border-top-left-radius: 10px;
  }

  &:last-child {
    border-top-right-radius: 10px;
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
  width: 30rem;
  height: 65px;
  background-color: #2c8fb5;
  color: #fafafa;
  font-weight: bold;

  &:hover {
    background-color: #226f8c;
  }
`;
