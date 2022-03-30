import React from 'react';
import homeTwoImg from '../../assets/homeTwo.svg';
import { HiOutlineMenuAlt4 } from 'react-icons/hi';

import {
  Container,
} from './styles';


const Header: React.FC = () => {
  return (
    <Container>
      <HiOutlineMenuAlt4 size={'48px'}/>
      <img src={homeTwoImg} alt="Logo" />
    </Container>
  );
};
export default Header;
