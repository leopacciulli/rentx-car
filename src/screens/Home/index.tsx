import { useNavigation } from '@react-navigation/native';
import React, { useEffect, useState } from 'react';
import { StatusBar, StyleSheet } from 'react-native';
import { RFValue } from 'react-native-responsive-fontsize';
import { Ionicons } from '@expo/vector-icons';
import Car from '../../components/Car';
import Loading from '../../components/Loading';
import { CarDTO } from '../../dtos/Car';
import { api } from '../../services/api';
import { useTheme } from 'styled-components';
import { RectButton, PanGestureHandler } from 'react-native-gesture-handler';

import Animated, {
  useSharedValue,
  useAnimatedStyle,
  useAnimatedGestureHandler,
  withSpring,
} from 'react-native-reanimated';

const ButtonAnimated = Animated.createAnimatedComponent(RectButton);

import Logo from '../../assets/logo.svg';

import { 
  Container,
  Header,
  HeaderContent,
  TotalCars,
  CarList,
} from './styles';

const Home = () => {
  const theme = useTheme();
  const navigation = useNavigation();
  const [cars, setCars] = useState<CarDTO[]>([]);
  const [loading, setLoading] = useState(true);

  const positionY = useSharedValue(0);
  const positionX = useSharedValue(0);

  const myCarsButtonStyle = useAnimatedStyle(() => {
    return {
      transform: [
        { translateX: positionX.value },
        { translateY: positionY.value },
      ]
    }
  })

  const onGestureEvent = useAnimatedGestureHandler({
    onStart(_, context: any){
      context.positionX = positionX.value;
      context.positionY = positionY.value;
    },
    onActive(event, context: any){
      positionX.value = event.translationX + context.positionX;
      positionY.value = event.translationY + context.positionY;
    },
    onEnd(){
      positionX.value = withSpring(0);
      positionY.value = withSpring(0);
    }
  })

  useEffect(() => {
    async function getCars() {
      try {
        const response = await api.get('/cars')
        setCars(response.data)
        setLoading(false)
      } catch (error) {
        console.log(error)
      }
    }

    getCars()
  }, [])

  const handleCarDetails = (car: CarDTO) => {
    navigation.navigate('CarDetails', { car })
  }

  const handleOpenMyCars = () => {
    navigation.navigate('MyCars')
  }

  return (
    <Container>
      <StatusBar 
        barStyle="light-content"
        backgroundColor="transparent"
        translucent
      />

      <Header>
        <HeaderContent>
          <Logo 
            width={RFValue(108)}
            height={RFValue(12)}
          />

          <TotalCars>Total de {cars.length} carros</TotalCars>
        </HeaderContent>
      </Header>

      {loading
        ? <Loading />
        : <CarList 
          data={cars}
          keyExtractor={item => String(item.id)}
          renderItem={({ item }) => 
            <Car data={item} onPress={() => handleCarDetails(item)} />
          }
        />
      }

      <PanGestureHandler onGestureEvent={onGestureEvent}>
        <Animated.View
          style={[
            myCarsButtonStyle,
            {
              position: 'absolute',
              bottom: 13,
              right: 22
            }
          ]}
        >
          <ButtonAnimated
            onPress={handleOpenMyCars}
            style={[styles.button, { backgroundColor: theme.colors.main }]}
          >
            <Ionicons
              name="ios-car-sport"
              size={32}
              color={theme.colors.shape}
            />
          </ButtonAnimated>
        </Animated.View>
      </PanGestureHandler>
    </Container>
  )
}

export default Home;

const styles = StyleSheet.create({
  button: {
    width: 60,
    height: 60,
    borderRadius: 30,
    justifyContent: 'center',
    alignItems: 'center'
  }
})