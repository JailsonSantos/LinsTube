import React, { useState, useEffect, useCallback } from 'react';
import { TouchableOpacity, ActivityIndicator } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import {
  Container,
  ContainerCanal,
  ContainerVideoDetalhe,
  ImageTube,
  ImageTubeLogo,
  IconTubeDetalhe,
  TitleDescription,
  SubtitleDescription,
  SetaVoltar,
  AreaVideo,
  AreaVideoLoading
} from '../../styles';

// Icons externos
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

// Icons e images do src
import tresPontinhos from '../../assets/tres-pontinhos.png';
import like from '../../assets/like.png';
import deslike from '../../assets/deslike.png';
import seta from '../../assets/seta.png';
import download from '../../assets/download.png';
import add from '../../assets/add.png';

import profile from '../../assets/profile.png';

import ReactPlayer from 'react-player';
import YoutubePlayer from "react-native-youtube-iframe";

const VideoDetalhe = ({ video, loading }) => {

  const navigation = useNavigation();

  const [playing, setPlaying] = useState(false);

  const onStateChange = useCallback((state) => {
    if (state === "ended") {
      setPlaying(false);
      Alert.alert("video has finished playing!");
    }
  }, []);

  const togglePlaying = useCallback(() => {
    setPlaying((prev) => !prev);
  }, []);


  return (
    <ContainerVideoDetalhe justify="flex-start" color="light">
      <SetaVoltar
        onPress={() => navigation.goBack()}
      >
        <Icon name="arrow-left" color="#fff" size={30} />
      </SetaVoltar>

      {loading &&

        <AreaVideoLoading>
          <ActivityIndicator size="large" color="#fff" />
        </AreaVideoLoading>

      }

      {video ?

        <AreaVideo>
          <YoutubePlayer
            width={360}
            height={200}
            play={playing}
            videoId={video.id.videoId}
            onChangeState={onStateChange}
          />
        </AreaVideo>

        :

        <AreaVideo>
          <YoutubePlayer
            width={360}
            height={200}
            play={playing}
            videoId={'lwvTxrtFbZI'}
            onChangeState={onStateChange}
          />
        </AreaVideo>
      }

      <Container row justify="space-between" pLeft={15}>
        <Container>
          <TitleDescription numberOfLines={2}>
            {video ?
              video.snippet.title
              :
              "Grupo Aba - Lindo és | Para que entre o Rei | Só quero ver você - Medley (Cover)"
            }
          </TitleDescription>
        </Container>
        <Container width={50}>
          <TouchableOpacity>
            <Icon name="menu-down" size={50} />
          </TouchableOpacity>
        </Container>
      </Container>

      <Container row justify="flex-start" pLeft={15} height={20}>
        <SubtitleDescription numberOfLines={1}>
          {video ? video.snippet.description : 'Top Gospel - (Cover), as melhores músicas evangélicas'}
        </SubtitleDescription>
      </Container>

      <Container row >
        <Container>
          <TouchableOpacity>
            <Container>
              <IconTubeDetalhe source={like} alt="Like" />
              <SubtitleDescription>Gostei</SubtitleDescription>
            </Container>
          </TouchableOpacity>
        </Container>

        <Container>
          <TouchableOpacity>
            <Container >
              <IconTubeDetalhe source={deslike} alt="Deslike" />
              <SubtitleDescription>Não gostei</SubtitleDescription>
            </Container>
          </TouchableOpacity>
        </Container>

        <Container>
          <TouchableOpacity>
            <Container>
              <IconTubeDetalhe source={seta} alt="Compartilhar" />
              <SubtitleDescription>Compartilhar</SubtitleDescription>
            </Container>
          </TouchableOpacity>
        </Container>

        <Container>
          <TouchableOpacity>
            <Container>
              <IconTubeDetalhe source={download} alt="Download" />
              <SubtitleDescription>Download</SubtitleDescription>
            </Container>
          </TouchableOpacity>
        </Container>

        <Container>
          <TouchableOpacity>
            <Container>
              <IconTubeDetalhe source={add} alt="Salvar" />
              <SubtitleDescription>Salvar</SubtitleDescription>
            </Container>
          </TouchableOpacity>
        </Container>
      </Container>

      <ContainerCanal row >
        <Container width={50}>
          <ImageTubeLogo source={profile} alt="Logo do canal" />
        </Container>

        <Container>
          <Container align="flex-start">
            <TouchableOpacity>
              <TitleDescription numberOfLines={1}>{video ? video.snippet.channelTitle : 'Grupo Aba'}</TitleDescription>
            </TouchableOpacity>
          </Container>

          <Container row justify="space-between">
            <Container align="flex-start">
              <TouchableOpacity>
                <TitleDescription vermelho>INCREVA-SE</TitleDescription>
              </TouchableOpacity>
            </Container>

            <Container align="flex-start">
              <TouchableOpacity>
                <TitleDescription azul>SEJA MEMBRO</TitleDescription>
              </TouchableOpacity>
            </Container>

          </Container>
        </Container>

        <Container width={60}>
          <SubtitleDescription>45 mil inscritos</SubtitleDescription>
        </Container>

      </ContainerCanal>

    </ContainerVideoDetalhe>
  );
}

export default VideoDetalhe;
