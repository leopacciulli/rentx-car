import React from 'react';
import { SafeAreaView } from 'react-native';
import Acessory from '../../components/Acessory';
import BackButton from '../../components/BackButton';
import ImageSlider from '../../components/ImageSlider';
import Button from '../../components/Button';
import { useNavigation } from '@react-navigation/native';

import speedSvg from '../../assets/speed.svg';
import accelerationSvg from '../../assets/acceleration.svg';
import forceSvg from '../../assets/force.svg';
import gasolineSvg from '../../assets/gasoline.svg';
import exchangeSvg from '../../assets/exchange.svg';
import peopleSvg from '../../assets/people.svg';

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

interface CarDetailsProps {

}

const CarDetails = ({}: CarDetailsProps) => {
  const navigation = useNavigation();

  const handleConfirmRental = () => {
    navigation.navigate('Scheduling')
  }

  return (
    <SafeAreaView>
      <Container>
        <Header>
          <BackButton onPress={navigation.goBack} /> 
        </Header>

        <CarImages>
          <ImageSlider imagesUrl={['https://wikiimg.tojsiabtv.com/wikipedia/commons/thumb/7/7d/2018_Audi_S5_TFSi_Quattro_Automatic_3.0_Front.jpg/1200px-2018_Audi_S5_TFSi_Quattro_Automatic_3.0_Front.jpg']} /> 
        </CarImages>

        <Content>
          <Details>
            <Description>
              <Brand>Lamborghini</Brand>
              <Name>Huracan</Name>
            </Description>
            
            <Rent>
              <Period>Ao dia</Period>
              <Price>R$ 580</Price>
            </Rent>
          </Details>

          <Acessories>
            <Acessory name="380Km/h" icon={speedSvg} />
            <Acessory name="3.2s" icon={accelerationSvg} />
            <Acessory name="800 HP" icon={forceSvg} />
            <Acessory name="Gasolina" icon={gasolineSvg} />
            <Acessory name="Auto" icon={exchangeSvg} />
            <Acessory name="2 pessoas" icon={peopleSvg} />
          </Acessories>

          <About>
            Este automovel desportivo. Surgiu do lendario touro de lide indultado na praça Real Maestranza de Sevilla. É um belissimo carro para quem gosta de acelerar e voar nas pistas.
          </About>
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