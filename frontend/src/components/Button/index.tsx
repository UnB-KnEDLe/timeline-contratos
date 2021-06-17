import React, { ButtonHTMLAttributes } from 'react';
import { IconBaseProps } from 'react-icons';

import { Container } from './styles';

type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement> & {
  loading?: boolean;
  icon?: React.ComponentType<IconBaseProps>;
};

const Button: React.FC<ButtonProps> = ({
  children,
  loading,
  icon: Icon,
  ...rest
}) => (
  <Container type="button" {...rest}>
    {loading ? 'Carregando...' : children}
    {Icon && <Icon size="3rem" />}
  </Container>
);
export default Button;
