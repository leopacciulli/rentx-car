import React, { useEffect, useState } from 'react';
import { useNavigation, useRoute } from '@react-navigation/native';
import { SafeAreaView } from 'react-native';
import { Feather } from '@expo/vector-icons';
import Accessory from '../../components/Acessory';
import BackButton from '../../components/BackButton';
import ImageSlider from '../../components/ImageSlider';
import Button from '../../components/Button';
import { useTheme } from 'styled-components';
import { RFValue } from 'react-native-responsive-fontsize';
import { CarDTO } from '../../dtos/Car';
import { getAccessoryIcon } from '../../utils/getAccessoryIcon';
import { getPlatformDate } from '../../utils/getPlatformDate';
import { format } from 'date-fns';
import { api } from '../../services/api';

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
  Accessories,
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

interface Params {
  car: CarDTO
  dates: string[]
}

interface RentalPeriod {
  start: string;
  end: string;
}

const SchedulingDetails = () => {
  const [rentalPeriod, setRentalPeriod] = useState<RentalPeriod>({} as RentalPeriod)
  const [loading, setLoading] = useState(false)

  const theme = useTheme();
  const navigation = useNavigation();
  const route = useRoute();
  const { car, dates } = route.params as Params;

  const rentTotal = Number(dates.length * car.rent.price)

  useEffect(() => {
    setRentalPeriod({
      start: format(getPlatformDate(new Date(dates[0])), 'dd/MM/yyyy'),
      end: format(getPlatformDate(new Date(dates[dates.length - 1])), 'dd/MM/yyyy'),
    })
  }, [])

  const handleConfirmRental = async () => {
    setLoading(true)

    const schedulesByCar = await api.get(`/schedules_bycars/${car.id}`)

    const unavailable_dates = [
      ...schedulesByCar.data.unavailable_dates,
      ...dates
    ]

    await api.post(`schedules_byuser`, {
      car,
      user_id: 1,
      startDate: format(getPlatformDate(new Date(dates[0])), 'dd/MM/yyyy'),
      endDate: format(getPlatformDate(new Date(dates[dates.length - 1])), 'dd/MM/yyyy'),
    })

    await api.put(`/schedules_bycars/${car.id}`, {
      id: car.id,
      unavailable_dates
    })

    setLoading(false)
    navigation.navigate('SchedulingComplete')
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

          <Accessories>
            {car.accessories.map((accessory) => (
              <Accessory key={accessory.type} name={accessory.name} icon={getAccessoryIcon(accessory.type)} />
            ))}
          </Accessories>

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
              <DateValue>{rentalPeriod.start}</DateValue>
            </DateInfo>

            <Feather
              name="chevron-right"
              size={RFValue(10)}
              color={theme.colors.text}
            />

            <DateInfo>
              <DateTitle>At??</DateTitle>
              <DateValue>{rentalPeriod.end}</DateValue>
            </DateInfo>
          </RentalPeriod>
        
          <RentalPrice>
            <RentalPriceLabel>Total</RentalPriceLabel>
            <RentalPriceDetails>
              <RentalPriceQuota>{`R$ ${car.rent.price} x${dates.length} di??rias`}</RentalPriceQuota>
              <RentalPriceTotal>R$ {rentTotal}</RentalPriceTotal>
            </RentalPriceDetails>
          </RentalPrice>
        </Content>

        <Footer>
          <Button
            title='Alugar agora'
            color={theme.colors.success}
            onPress={handleConfirmRental}
            loading={loading}
          />
        </Footer>
      </Container>
    </SafeAreaView>
  )
}

export default SchedulingDetails;