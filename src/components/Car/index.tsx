import React from 'react';
import { RectButtonProps } from 'react-native-gesture-handler';
import { CarDTO } from '../../dtos/Car';

import GasolineSvg from '../../assets/gasoline.svg';

import {
  Container,
  Details,
  Brand,
  Name,
  About,
  Rent,
  Period,
  Price,
  Type,
  CardImage,
} from './styles';
import { getAccessoryIcon } from '../../utils/getAccessoryIcon';

interface CarProps extends RectButtonProps {
  data: CarDTO;
}

const Car = ({ data, ...rest }: CarProps) => {
  const MotorIcon = getAccessoryIcon(data.fuel_type);

  return (
    <Container {...rest}>
      <Details>
        <Brand>{data.brand}</Brand>
        <Name>{data.name}</Name>

        <About>
          <Rent>
            <Period>{data.rent.period}</Period>
            <Price>{`R$ ${data.rent.price}`}</Price>
          </Rent>

          <Type>
            <MotorIcon />
          </Type>
        </About>
      </Details>

      <CardImage
        source={{ uri: data.thumbnail }}
        resizeMode="contain"
      />
    </Container>
  )
}

export default Car;