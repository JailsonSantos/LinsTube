import React from 'react';
import { TouchableOpacity, Text, Image } from 'react-native';

import {
  Container,
  ContainerVideosRecentes,
  ImageTube,
  TitleDescriptionRecentes,
  SubtitleDescription,
} from '../../styles';

// Icons externos
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

// Icons e images do src
import tresPontinhos from '../../assets/tres-pontinhos.png';

const VideosRecentes = ({ item }) => {
  return (
    <ContainerVideosRecentes width={200} height={160} color="light">

      {item ?
        <>
          <ImageTube
            source={{ uri: item.snippet.thumbnails.high.url }}
            height={70}
          />
          <Container row justify="space-between" align="flex-start" height={35} padding={2}>
            <Container >
              <TitleDescriptionRecentes numberOfLines={2}>
                {item.snippet.title}
              </TitleDescriptionRecentes>
            </Container>

            <Container width={10} justify="flex-start">
              <TouchableOpacity>
                <Image source={tresPontinhos} />
              </TouchableOpacity>
            </Container>
          </Container>

          <Container >
            <SubtitleDescription numberOfLines={1} >
              {item.snippet.description}
            </SubtitleDescription>
          </Container>
        </>
        :
        <>
          <ImageTube
            source={{ uri: "https://s.manualdousuario.net/wp-content/uploads/2019/08/YouTube-em-alta-fogo-960x540.png" }}
            height={70}
          />
          <Container row justify="space-between" align="flex-start" height={35} padding={2}>
            <Container >
              <TitleDescriptionRecentes numberOfLines={2}>
                A Bênção || Top 100 Musicas Gospel Mais Tocadas 2021 (+Lançamentos Gospel 2021)|| Adoração 2021
              </TitleDescriptionRecentes>
            </Container>
            <Container width={10} justify="flex-start">
              <TouchableOpacity>
                <Image source={tresPontinhos} />
              </TouchableOpacity>
            </Container>
          </Container>
          <Container >
            <SubtitleDescription numberOfLines={1} >
              Louvores e adorações - 2021
            </SubtitleDescription>
          </Container>
        </>
      }
    </ContainerVideosRecentes>
  );
}

export default VideosRecentes;