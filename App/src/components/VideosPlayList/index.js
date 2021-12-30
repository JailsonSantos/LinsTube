import React from 'react';
import { TouchableOpacity, Image } from 'react-native';
import { useNavigation } from '@react-navigation/native';

import {
  Container,
  ContainerVideosPlayList,
  ImageTube,
  TitleDescriptionRecentes,
  SubtitleDescription,
} from '../../styles';

// Icons externos
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

// Icons e images do src
import tresPontinhos from '../../assets/tres-pontinhos.png';

const VideosPlayList = ({ item }) => {

  const navigation = useNavigation();

  return (
    <ContainerVideosPlayList row justify="flex-start" color="light">

      {item ?
        <>
          <TouchableOpacity onPress={() => navigation.navigate('Detalhes', item)}>
            <ImageTube
              source={{ uri: item.snippet.thumbnails.high.url }} alt="Capa do vídeo"
              width={90}
              height={55}
            />
          </TouchableOpacity>
          <Container justify="space-around" height={60} pLeft={5}>
            <Container align="flex-start">
              <TitleDescriptionRecentes numberOfLines={2}>
                {item.snippet.title}
              </TitleDescriptionRecentes>
            </Container>
            <Container align="flex-start">
              <SubtitleDescription numberOfLines={1} >
                {item.snippet.description}
              </SubtitleDescription>
            </Container>
          </Container>
          <Container width={10} height={60} justify="flex-start">
            <TouchableOpacity>
              <Image source={tresPontinhos} />
            </TouchableOpacity>
          </Container>
        </>
        :
        <>
          <TouchableOpacity onPress={() => navigation.navigate('Detalhes')}>
            <ImageTube
              source={{ uri: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQj_ERyEpUCItMv6S-4BfYJypwylUieKpSw4A&usqp=CAU.png" }}
              width={70}
              height={45}
            />
          </TouchableOpacity>
          <Container justify="space-around" height={55} pLeft={5}>
            <Container align="flex-start">
              <TitleDescriptionRecentes numberOfLines={2}>
                Onde estão fisicamente os vídeos do YouTube?
              </TitleDescriptionRecentes>
            </Container>
            <Container align="flex-start">
              <SubtitleDescription numberOfLines={1} >
                Este é o canal do Manual do Mundo.
              </SubtitleDescription>
            </Container>
          </Container>
          <Container width={10} height={45} justify="flex-start">
            <TouchableOpacity>
              <Image source={tresPontinhos} />
            </TouchableOpacity>
          </Container>
        </>
      }

    </ContainerVideosPlayList>
  );
}

export default VideosPlayList;