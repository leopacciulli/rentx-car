import React from 'react';
import { useNavigation, useRoute } from '@react-navigation/native';
import { SafeAreaView } from 'react-native';
import Accessory from '../../components/Acessory';
import BackButton from '../../components/BackButton';
import ImageSlider from '../../components/ImageSlider';
import Button from '../../components/Button';
import { CarDTO } from '../../dtos/Car';

import {
  Container,
  Header,
  CarImages,
  Content,
  Details,
  Description,
  Brand,
  Name,
  Rent,
  Period,
  Price,
  About,
  Acessories,
  Footer,
} from './styles';
import { getAccessoryIcon } from '../../utils/getAccessoryIcon';

interface Params {
  car: CarDTO
}

const CarDetails = () => {
  const navigation = useNavigation();
  const route = useRoute();
  const { car } = route.params as Params;

  const handleConfirmRental = () => {
    navigation.navigate('Scheduling', { car })
  }

  const handleBack = () => {
    navigation.goBack()
  }

  return (
    <SafeAreaView>
      <Container>
        <Header>
          <BackButton onPress={handleBack} /> 
        </Header>

        <CarImages>
          <ImageSlider imagesUrl={car.photos} /> 
        </CarImages>

        <Content>
          <Details>
            <Description>
              <Brand>{car.brand}</Brand>
              <Name>{car.name}</Name>
            </Description>
            
            <Rent>
              <Period>{car.rent.period}</Period>
              <Price>R$ {car.rent.price}</Price>
            </Rent>
          </Details>

          <Acessories>
            {car.accessories.map((accessory) => (
              <Accessory key={accessory.type} name={accessory.name} icon={getAccessoryIcon(accessory.type)} />
            ))}
          </Acessories>

          <About>{car.about}</About>
        </Content>

        <Footer>
          <Button
            title='Escolher período do alguel'
            onPress={handleConfirmRental}
          />
        </Footer>
      </Container>
    </SafeAreaView>
  )
}

export default CarDetails;