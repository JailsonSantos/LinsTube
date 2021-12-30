import React from 'react';
import { Image, TouchableOpacity } from 'react-native';

// Styles
import { Container, TitleLogo } from '../../styles';

// Icons externos
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

// Icons e images do src
import logoIcon from '../../assets/logo-icon.png';

const Header = () => {
  return (
    <Container height={45} color="light" row justify="space-between" padding={10}>
      <Container row justify="flex-start" pLeft={10}>
        <TouchableOpacity>
          <Image source={logoIcon} />
        </TouchableOpacity>

        <TouchableOpacity>
          <TitleLogo>LinsTube</TitleLogo>
        </TouchableOpacity>

      </Container>
      <Container row justify="space-between"  >
        <TouchableOpacity>
          <Icon name="remote-desktop" color='#616161' size={23} />
        </TouchableOpacity>

        <TouchableOpacity>
          <Icon name="video" color='#616161' size={23} />
        </TouchableOpacity>

        <TouchableOpacity>
          <Icon name="magnify" color='#616161' size={23} />
        </TouchableOpacity>

        <TouchableOpacity>
          <Icon name="account-circle" color='#616161' size={23} />
        </TouchableOpacity>
      </Container>
    </Container>
  );
}

export default Header;