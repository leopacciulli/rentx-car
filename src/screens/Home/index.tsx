import { useNavigation } from '@react-navigation/native';
import React, { useEffect, useState } from 'react';
import { StatusBar } from 'react-native';
import { RFValue } from 'react-native-responsive-fontsize';
import { Ionicons } from '@expo/vector-icons';
import Car from '../../components/Car';
import Loading from '../../components/Loading';
import { CarDTO } from '../../dtos/Car';
import { api } from '../../services/api';
import { useTheme } from 'styled-components';

import Logo from '../../assets/logo.svg';

import { 
  Container,
  Header,
  HeaderContent,
  TotalCars,
  CarList,
  MyCarsButton,
} from './styles';

const Home = () => {
  const theme = useTheme();
  const navigation = useNavigation();
  const [cars, setCars] = useState<CarDTO[]>([]);
  const [loading, setLoading] = useState(true);

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

          <TotalCars>
            Total de {cars.length} carros
          </TotalCars>
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

      <MyCarsButton onPress={handleOpenMyCars}>
        <Ionicons
          name="ios-car-sport"
          size={32}
          color={theme.colors.shape}
        />
      </MyCarsButton>
    </Container>
  )
}

export default Home;