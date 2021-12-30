import React, { useState, useEffect } from 'react';
import { FlatList, TouchableOpacity, ActivityIndicator } from 'react-native';

// Base de Dados
import data from '../../data/categorias.json';

// Axios API
import Api from '../../services/api';

// Styles Global
import {
  Container,
  ContainerLoading,
  DetalhesScrollView,
  TitleDescription,
  RecentesArea
} from '../../styles';

// Components
import VideoDetalhe from '../../components/VideoDetalhe';
import Video from '../../components/Video';
import VideoShort from '../../components/VideoShort';

const Detalhes = ({ route }) => {

  const video = route.params;

  const [listaVidoesDetalhes, setListVideosDetalhes] = useState([]);
  const [loading, setLoading] = useState(true)

  const listarVideosDetalhes = async () => {
    const response = await Api.get('/search', {
      params: {
        q: 'eletronico'
      }
    });
    setListVideosDetalhes(response.data.items);
    setLoading(false);
  }

  useEffect(() => {
    listarVideosDetalhes();
  }, []);

  return (

    <Container justify="flex-start" color="muted100">
      {/*       <Header /> */}
      <Container justify="flex-start">
        <VideoDetalhe loading={loading} video={video} />
      </Container>

      {loading ?

        <ContainerLoading>
          <ActivityIndicator size="large" color="#295ecc" />
        </ContainerLoading>

        :

        <Container justify="flex-end" height={270}>
          <DetalhesScrollView>

            {listaVidoesDetalhes.length > 0 ?
              listaVidoesDetalhes.map((item, index) => (
                <Video key={index} item={item} />
              ))
              :
              [0, 1, 2, 3, 4].map((item, index) => (
                <Video key={index} />
              ))
            }

            <Container pLeft={10} color="light">
              <TitleDescription>Shorts</TitleDescription>
            </Container>
            <Container height={150}>
              <RecentesArea>
                <FlatList
                  horizontal
                  data={data}
                  renderItem={({ item, index }) => (
                    <TouchableOpacity key={index}>
                      <VideoShort />
                    </TouchableOpacity>
                  )}
                >
                </FlatList>
              </RecentesArea>
            </Container>

          </DetalhesScrollView>
        </Container>
      }
    </Container>

  );
}

export default Detalhes;