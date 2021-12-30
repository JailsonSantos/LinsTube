import React, { useState, useEffect } from 'react';
import { ActivityIndicator } from 'react-native';

import { Container } from '../../styles';

import logo from '../../assets/logo.png';

const Login = ({ navigation }) => {

  const [carregando, setCarregando] = useState(true);

  const cancelarCarregando = () => {
    setTimeout(() => {
      setCarregando(false)
      navigation.navigate('Home');
    }, 500);
  }

  useEffect(() => {
    cancelarCarregando();
  }, []);

  return (
    <Container color="light">
      {/*  <Image source={logo} /> */}

      {carregando &&
        <ActivityIndicator size="large" color="#295ecc" />
      }
    </Container>
  );
}

export default Login;