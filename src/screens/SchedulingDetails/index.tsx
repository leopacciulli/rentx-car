import React from 'react';
import { SafeAreaView } from 'react-native';
import { Feather } from '@expo/vector-icons';
import Acessory from '../../components/Acessory';
import BackButton from '../../components/BackButton';
import ImageSlider from '../../components/ImageSlider';
import Button from '../../components/Button';
import { useTheme } from 'styled-components';
import { RFValue } from 'react-native-responsive-fontsize';

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
  Acessories,
  Footer,
  RentalPeriod,
  CalendarIcon,
  DateInfo,
  DateTitle,
  DateValue,
  RentalPrice,
  RentalPriceLabel,
  RentalPriceDetails,
  RentalPriceQuota,
  RentalPriceTotal,
} from './styles';

interface SchedulingDetailsProps { }

const SchedulingDetails = ({}: SchedulingDetailsProps) => {
  const theme = useTheme();

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

          <RentalPeriod>
            <CalendarIcon>
              <Feather
                name="calendar"
                size={RFValue(24)}
                color={theme.colors.shape}
              />
            </CalendarIcon>

            <DateInfo>
              <DateTitle>De</DateTitle>
              <DateValue>18/06/2021</DateValue>
            </DateInfo>

            <Feather
              name="chevron-right"
              size={RFValue(10)}
              color={theme.colors.text}
            />

            <DateInfo>
              <DateTitle>Até</DateTitle>
              <DateValue>19/06/2021</DateValue>
            </DateInfo>
          </RentalPeriod>
        
          <RentalPrice>
            <RentalPriceLabel>Total</RentalPriceLabel>
            <RentalPriceDetails>
              <RentalPriceQuota>R$ 580 x3 diárias</RentalPriceQuota>
              <RentalPriceTotal>R$ 2.900</RentalPriceTotal>
            </RentalPriceDetails>
          </RentalPrice>
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

export default SchedulingDetails;