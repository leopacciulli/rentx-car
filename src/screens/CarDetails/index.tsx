import React from 'react';
import { SafeAreaView } from 'react-native';
import Acessory from '../../components/Acessory';
import BackButton from '../../components/BackButton';
import ImageSlider from '../../components/ImageSlider';

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
import Button from '../../components/Button';

interface CarDetailsProps {

}

const CarDetails = ({}: CarDetailsProps) => {
  return (
    <SafeAreaView>
      <Container>
        <Header>
          <BackButton onPress={() => {}} /> 
        </Header>

        <CarImages>
          <ImageSlider imagesUrl={['https://w7.pngwing.com/pngs/833/338/png-transparent-audi-rs5-car-audi-q5-audi-s5-audi-convertible-car-performance-car.png']} /> 
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
            title='Confirmar'
            onPress={() => {}}
          />
        </Footer>
      </Container>
    </SafeAreaView>
  )
}

export default CarDetails;