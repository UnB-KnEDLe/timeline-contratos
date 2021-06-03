import React from 'react';

import { BiArrowBack } from 'react-icons/bi';
import { Link } from 'react-router-dom';
import logo from '../../assets/logo.svg';
import imageNotFound from '../../assets/withoutProcess.png';

import { Container, AreaLogo, ImageNotFound } from './styles';

export const WithoutProcess: React.FC = () => {
  return (
    <Container>
      <AreaLogo>
        <Link to="/">
          <BiArrowBack size="5rem" />
        </Link>
        <img src={logo} alt="logo" />
      </AreaLogo>

      <ImageNotFound>
        <img src={imageNotFound} alt="imageNotFound" />
      </ImageNotFound>

      <div>
        <h1>Processo não encontrado</h1>

        <p>Não foi possível encontrar esse processo, tente novamente.</p>
      </div>
    </Container>
  );
};
