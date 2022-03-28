import { useNavigation } from '@react-navigation/native';
import React, { useEffect, useState } from 'react';
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
  const [cars, setCars] = useState([]);

  useEffect(() => {
    const dataCars = [
      {
        brand: 'Audi',
        name: 'RS 5 Coupe',
        rent: {
          period: 'Ao dia',
          price: 4899
        },
        thumbnail: 'https://www.autoo.com.br/fotos/2020/4/1280_960/audi_rs-5-coupe_2021_1_09042020_29446_1280_960.jpg'
      },
      {
        brand: 'Audi',
        name: 'R8 V10 Plus',
        rent: {
          period: 'Ao dia',
          price: 1299
        },
        thumbnail: 'https://3.bp.blogspot.com/-K_JRNTns-54/WSVsggVcBWI/AAAAAAACk-0/PJFLtLEfQZAHZhBZT4PMSCOBuILMxvh-QCLcB/s1600/Audi-R8-2018-Brasil%2B%25281%2529.jpg'
      },
      {
        brand: 'Audi',
        name: 'A3 Sedan',
        rent: {
          period: 'Ao dia',
          price: 5995
        },
        thumbnail: 'https://s2.glbimg.com/klCdUmklo_9o226YG4-SnFg2l4s=/0x0:620x413/984x0/smart/filters:strip_icc()/i.s3.glbimg.com/v1/AUTH_cf9d035bf26b4646b105bd958f32089d/internal_photos/bs/2020/P/2/ynYtR7SI2uYcrtx0NiqA/2019-04-25-r8coupe.jpg'
      }
    ]

    setCars(dataCars)
  }, [])

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
            Total de 3 carros
          </TotalCars>
        </HeaderContent>
      </Header>

      <CarList 
        data={cars}
        keyExtractor={item => String(item)}
        renderItem={({ item }) => <Car data={item} onPress={handleCarDetails} />}
      /> 
    </Container>
  )
}

export default Home;