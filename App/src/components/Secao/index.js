import React from 'react';
import { TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';

import { SecaoButton, SecaoText } from '../../styles';


// Icons externos
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

const Secao = ({ titulo, subtitulo }) => {

  const navigation = useNavigation();

  return (
    <>
      <SecaoButton color="muted100" onPress={() => navigation.navigate('Detalhes')}>
        <Icon name="star-circle" color='#ff0000' size={23} />
        <SecaoText>{titulo}</SecaoText>
      </SecaoButton>
      <SecaoButton color="muted100" onPress={() => navigation.navigate('Detalhes')}>
        <Icon name="one-up" color='#00ff' size={23} />
        <SecaoText>{subtitulo}</SecaoText>
      </SecaoButton>
    </>
  )
};

export default Secao;