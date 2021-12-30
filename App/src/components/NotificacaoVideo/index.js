import React from 'react';
import { TouchableOpacity, Text, Image } from 'react-native';

import { useNavigation } from '@react-navigation/native';

import {
  Container,
  ContainerVideo,
  ImageTubeBullet,
  ImageTubeLogo,
  ImageTubeNotificacao,
  TitleDescriptionNotificacao,
  SubtitleDescription,
} from '../../styles';

// Icons externos
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

// Icons e images do src
import profile from '../../assets/profile.png'
import tresPontinhos from '../../assets/tres-pontinhos.png';
import bullet from '../../assets/bullet.png';

const NotificacaoItem = ({ item }) => {

  const navigation = useNavigation();

  return (
    <ContainerVideo height={80} padding={5} justify="flex-start" color="light">

      {item ?
        <>
          <TouchableOpacity onPress={() => navigation.navigate('Detalhes', item)}>
            <Container row justify="flex-start" align="flex-start" height={50}>
              <Container width={50} height={60} pLeft={5} row  >
                <ImageTubeBullet source={bullet} alt="Notificações de vídeos" />
                <TouchableOpacity>
                  <ImageTubeLogo source={profile} alt="Logo do canal" />
                </TouchableOpacity>
              </Container>
              <Container width={200} height={60} pLeft={5} justify="flex-start" align="flex-start">
                <TitleDescriptionNotificacao numberOfLines={2}>
                  {item.snippet.title}
                </TitleDescriptionNotificacao>
                <SubtitleDescription numberOfLines={2}>
                  {item.snippet.description}
                </SubtitleDescription>
              </Container>

              <Container row width={130} height={60} align="flex-start" justify="space-around">
                <ImageTubeNotificacao source={{ uri: item.snippet.thumbnails.high.url }} alt="Capa do vídeo" />
                <TouchableOpacity>
                  <Image source={tresPontinhos} />
                </TouchableOpacity>
              </Container>
            </Container>
          </TouchableOpacity>
        </>

        :

        <>
          <TouchableOpacity onPress={() => navigation.navigate('Detalhes')}>
            <Container row justify="flex-start" align="flex-start" height={50}>
              <Container width={50} height={60} pLeft={5} row  >
                <ImageTubeBullet source={bullet} alt="Notificações de vídeos" />
                <TouchableOpacity>
                  <ImageTubeLogo source={profile} alt="Logo do canal" />
                </TouchableOpacity>
              </Container>
              <Container width={200} height={60} pLeft={5} justify="flex-start" align="flex-start">
                <TitleDescriptionNotificacao>
                  A Bênção || Top 100 Musicas Gospel Mais Tocadas 2021 (+Lançamentos Gospel 2021)|| Adoração 2021
                </TitleDescriptionNotificacao>
                <SubtitleDescription>há 3 horas</SubtitleDescription>
              </Container>

              <Container row width={130} height={60} align="flex-start" justify="space-around">
                <ImageTubeNotificacao source={{ uri: "https://s.manualdousuario.net/wp-content/uploads/2019/08/YouTube-em-alta-fogo-960x540.png" }} />
                <TouchableOpacity>
                  <Image source={tresPontinhos} />
                </TouchableOpacity>
              </Container>
            </Container>
          </TouchableOpacity>
        </>
      }

    </ContainerVideo>
  );
}

export default NotificacaoItem;