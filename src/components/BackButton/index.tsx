import React from 'react';

import { MaterialIcons } from '@expo/vector-icons';
import { useTheme } from 'styled-components';

import {
  Container,
} from './styles';

interface BackButtonProps {
  color?: string;
  onPress: () => void;
}

const BackButton = ({ color, onPress }: BackButtonProps) => {
  const theme = useTheme();

  return (
    <Container onPress={onPress}>
      <MaterialIcons
        name="chevron-left"
        size={40}
        color={color ? color : theme.colors.text}
      />
    </Container>
  )
}

export default BackButton;