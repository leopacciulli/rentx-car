import React from 'react';
import { ActivityIndicator } from 'react-native';
import theme from '../../styles/theme';

import {
  Container,
  Title,
} from './styles';

interface ButtonProps {
  title: string;
  color?: string;
  onPress: () => void;
  enabled?: boolean;
  loading?: boolean;
}

const Button = ({ title, color, enabled = true, loading = false, ...rest }: ButtonProps) => {

  return (
    <Container
      {...rest}
      color={color}
      enabled={enabled}
      style={{ opacity: (!enabled || loading) ? 0.5 : 1 }}
    >
      {loading
        ? <ActivityIndicator color={theme.colors.shape} />
        : <Title>{title}</Title>
      }
    </Container>
  )
}

export default Button;