import React from 'react';
import { TouchableOpacity, Image } from 'react-native';
import { useNavigation } from '@react-navigation/native';

import {
  Container,
  ContainerVideo,
  ImageTube,
  TitleDescription,
  SubtitleDescription,
  VideoArea
} from '../../styles';

// Icons externos
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

// Icons e images do src
import tresPontinhos from '../../assets/tres-pontinhos.png';

const Video = ({ item, key }) => {

  //console.log('keyy:   ' + JSON.stringify(key));

  const navigation = useNavigation();

  return (
    <ContainerVideo color="light">
      {item ?
        <>
          <VideoArea onPress={() => navigation.navigate('Detalhes', item)} width='100%' height='100%'>
            <ImageTube source={{ uri: item?.snippet.thumbnails.high.url }} alt="Capa do vídeo" />
          </VideoArea>
          <Container row justify="space-between" height={45} padding={5}>
            <Container width={40}>
              <TouchableOpacity>
                <Icon name="account-circle" color='#616161' size={40} />
              </TouchableOpacity>
            </Container>
            <Container>
              <TitleDescription numberOfLines={2}>
                {item.snippet.title}
              </TitleDescription>
            </Container>
            <Container width={30}>
              <TouchableOpacity>
                <Image source={tresPontinhos} />
              </TouchableOpacity>
            </Container>
          </Container>
          <Container row justify="space-between" height={30}>
            <Container width={40}>

            </Container>
            <Container>
              <SubtitleDescription numberOfLines={2}>
                {item.snippet.description}
              </SubtitleDescription>
            </Container>
            <Container width={30}>
            </Container>
          </Container>
        </>

        :

        <>
          <VideoArea onPress={() => navigation.navigate('Detalhes', key)} width='100%' height='100%'>
            <ImageTube source={{ uri: "https://i.ytimg.com/vi/1aw61BFcx34/maxresdefault.jpg" }} />
          </VideoArea>
          <Container row justify="space-between" height={70} padding={5}>
            <Container width={40}>
              <TouchableOpacity>
                <Icon name="account-circle" color='#616161' size={40} />
              </TouchableOpacity>
            </Container>
            <Container>
              <TitleDescription>
                A Bênção || Top 100 Musicas Gospel Mais Tocadas 2021 (+Lançamentos Gospel 2021)|| Adoração 2021
              </TitleDescription>
            </Container>
            <Container width={30}>
              <TouchableOpacity>
                <Image source={tresPontinhos} />
              </TouchableOpacity>
            </Container>
          </Container>
          <Container row justify="space-between" height={30}>
            <Container width={40}>
            </Container>
            <Container>
              <SubtitleDescription>
                Melhores musicas Gospel - 45 mil visualizações - ha 3 meses
              </SubtitleDescription>
            </Container>
            <Container width={30}>
            </Container>
          </Container>
        </>
      }

    </ContainerVideo>
  );
}

export default Video;