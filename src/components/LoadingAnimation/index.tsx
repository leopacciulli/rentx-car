import React from 'react';
import LottieView from 'lottie-react-native';
import car from '../../assets/car.json';

import { Container } from './styles';

const LoadingAnimation = () => {
  return (
    <Container>
      <LottieView
        source={car}
        autoPlay
        style={{ height: 200 }}
        resizeMode="contain"
        loop
      />
    </Container>
  )
}

export default LoadingAnimation;