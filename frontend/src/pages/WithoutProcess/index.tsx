import React from 'react';
import { useHistory } from 'react-router-dom';

import arrow from '../../assets/arrow.png'
import logo from '../../assets/logo.svg'
import imageNotFound from '../../assets/withoutProcess.png'

import { Container, AreaLogo, ImageNotFound, BackButton } from './styles'


export const WithoutProcess: React.FC = () => {

  const history = useHistory();
  const backClick  = () => {
    history.push('/');
}

  return (
    <Container>
      <BackButton>
        <img src={ arrow } alt='arrow' onClick={() => backClick()}/>
      </BackButton>
      <AreaLogo>
        <img src={ logo } alt='logo'/>
      </AreaLogo>

      <ImageNotFound>
        <img src={ imageNotFound } alt='imageNotFound'/>
      </ImageNotFound>

      <div>
        <h1>Processo não encontrado</h1>

        <p>Não foi possível encontrar esse processo, tente novamente.</p>
      </div>

  </Container>
  );
};
