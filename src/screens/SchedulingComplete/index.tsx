import React from 'react';
import { StatusBar, useWindowDimensions } from 'react-native';

import LogoSvg from '../../assets/logo_background_gray.svg';
import DoneSvg from '../../assets/done.svg';

import {
  Container,
  Content,
  Title,
  Message,
  Footer,
} from './styles';
import ConfirmButton from '../../components/ConfirmButton';
import { useNavigation } from '@react-navigation/native';

interface SchedulingCompleteProps { }

const SchedulingComplete = ({}: SchedulingCompleteProps) => {
  const { width } = useWindowDimensions();
  const navigation = useNavigation();

  const handleConfirmRental = () => {
    navigation.navigate('Home')
  }

  return (
    <Container>
      <StatusBar
        translucent
        barStyle="light-content"
        backgroundColor="transparent"
      />

      <LogoSvg width={width} />

      <Content>
        <DoneSvg width={80} height={80} />
        <Title>Carro alugado!</Title>

        <Message>
          Agora você só precisa ir {'\n'}até a concessionária da RENTX {'\n'}pegar seu automóvel.
        </Message>
      </Content>

      <Footer>
        <ConfirmButton title="OK" onPress={handleConfirmRental} />
      </Footer>
    </Container>
  )
}

export default SchedulingComplete;