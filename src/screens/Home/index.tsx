import React from 'react';
import { StatusBar } from 'react-native';
import { RFValue } from 'react-native-responsive-fontsize';

import Logo from '../../assets/logo.svg';
import Car from '../../components/Car';

import { 
  Container,
  Header,
  HeaderContent,
  TotalCars,
  CarList,
} from './styles';

const Home = () => {
  const carData = {
    brand: 'Audi',
    name: 'RS 5 Coupe',
    rent: {
      period: 'Ao dia',
      price: 120
    },
    thumbnail: 'https://w7.pngwing.com/pngs/833/338/png-transparent-audi-rs5-car-audi-q5-audi-s5-audi-convertible-car-performance-car.png'
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
            Total de 12 carros
          </TotalCars>
        </HeaderContent>
      </Header>

      <CarList 
        data={[1,2,3]}
        keyExtractor={item => String(item)}
        renderItem={({ item }) => <Car data={carData} />}
      /> 
    </Container>
  )
}

export default Home;