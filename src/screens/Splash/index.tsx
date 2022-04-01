import { useNavigation } from '@react-navigation/native';
import React, { useEffect } from 'react';
import Animated, { 
  useAnimatedStyle, 
  useSharedValue,
  interpolate,
  withTiming,
  Extrapolate,
  runOnJS,
} from 'react-native-reanimated';

import BrandSvg from '../../assets/brand.svg';
import LogoSvg from '../../assets/logo.svg';

import {
  Container
} from './styles';

const Splash = () => {
  const navigation = useNavigation();
  const splashAnimation = useSharedValue(0); // -> 0 - 50

  const brandStyle = useAnimatedStyle(() => {
    return {
      opacity: interpolate(splashAnimation.value,
        [0, 50], // -> shared value animation
        [1, 0], // -> opacity value
      ),
      transform: [
        {
          translateX: interpolate(splashAnimation.value,
              [0, 50],
              [0, -20],
              Extrapolate.CLAMP
            )
        }
      ]
    }
  })

  const logoStyle = useAnimatedStyle(() => {
    return {
      opacity: interpolate(splashAnimation.value,
        [0, 25, 50], // -> shared value animation
        [0, 0.3, 1], // -> opacity value
      ),
      transform: [
        {
          translateX: interpolate(splashAnimation.value,
              [0, 50],
              [-50, 0],
              Extrapolate.CLAMP
            )
        }
      ]
    }
  })

  const startApp = () => {
    navigation.navigate('Home')
  }

  useEffect(() => {
    splashAnimation.value = withTiming(
      50, 
      { duration: 1000 }, 
      () => {
        'worklet'
        runOnJS(startApp)()
      }
    )
  }, [])

  return (
    <Container>
      <Animated.View style={[brandStyle, {position: 'absolute'}]}>
        <BrandSvg width={80} height={80} /> 
      </Animated.View>

      <Animated.View style={[logoStyle, {position: 'absolute'}]}>
        <LogoSvg width={180} height={180} /> 
      </Animated.View>
    </Container>
  )
}

export default Splash