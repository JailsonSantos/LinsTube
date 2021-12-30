import React from 'react';
import { useNavigation } from '@react-navigation/native';

// Styles
import { CanalButton, CanalText, CanalImage } from '../../styles';

// Imagens local
import Profile from '../../assets/profile.png';

const Canal = ({ titulo }) => {

  const navigation = useNavigation();

  return (
    <CanalButton onPress={() => navigation.navigate('Detalhes')}>
      <CanalImage source={Profile} alt="Logo do Canal" />
      <CanalText numberOfLines={1}>{titulo}</CanalText>
    </CanalButton>
  );
};

export default Canal;