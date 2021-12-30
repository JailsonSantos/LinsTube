import React from 'react';
import { useNavigation } from '@react-navigation/native';

import { CategoryButton, CategoryText } from '../../styles';

const Categoria = ({ titulo }) => {

  const navigation = useNavigation();

  return (
    <CategoryButton
      onPress={() => navigation.navigate('Detalhes')}
      color="muted100"
    >
      <CategoryText>{titulo}</CategoryText>
    </CategoryButton>
  )
};

export default Categoria;