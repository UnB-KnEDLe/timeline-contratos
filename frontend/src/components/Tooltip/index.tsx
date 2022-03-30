import React from 'react';

import { Container } from './styles';

interface TooltipStyle {
  marginLeft: string;
}

export interface TooltipProps {
  title: string;
  className?: string;
  style: TooltipStyle;
}

const Tooltip: React.FC<TooltipProps> = ({
  title,
  className = '',
  children,
  style
}) => {
  return (
    <Container style={style} className={className}>
      {children}
      <span>{title}</span>
    </Container>
  );
};

export default Tooltip;
