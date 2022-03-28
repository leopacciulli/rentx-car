import { useNavigation } from '@react-navigation/native';
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
  const navigation = useNavigation();

  const carData = {
    brand: 'Audi',
    name: 'RS 5 Coupe',
    rent: {
      period: 'Ao dia',
      price: 120
    },
    thumbnail: 'https://wikiimg.tojsiabtv.com/wikipedia/commons/thumb/7/7d/2018_Audi_S5_TFSi_Quattro_Automatic_3.0_Front.jpg/1200px-2018_Audi_S5_TFSi_Quattro_Automatic_3.0_Front.jpg'
  }

  const handleCarDetails = () => {
    navigation.navigate('CarDetails')
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
        renderItem={({ item }) => <Car data={carData} onPress={handleCarDetails} />}
      /> 
    </Container>
  )
}

export default Home;