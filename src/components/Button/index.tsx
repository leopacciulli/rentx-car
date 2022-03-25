import React from 'react';

import {
  Container,
  Title,
} from './styles';

interface ButtonProps {
  title: string;
  color?: string;
  onPress: () => void;
}

const Button = ({ title, color, ...rest }: ButtonProps) => {

  return (
    <Container {...rest} color={color}>
      <Title>{title}</Title>
    </Container>
  )
}

export default Button;