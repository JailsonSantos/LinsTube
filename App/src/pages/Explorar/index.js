import React, { useState, useEffect } from 'react';
import { FlatList, ScrollView, TouchableOpacity, RefreshControl, ActivityIndicator } from 'react-native';

// Base de Dados
import data from '../../data/secoes.json';

// Axios API
import Api from '../../services/api';

// Styles Global
import {
  Container,
  ContainerLoading,
  SecaoArea,
  TitleDescription,
} from '../../styles';

// Components
import Header from '../../components/Header';
import Secao from '../../components/Secao';
import Video from '../../components/Video';

const Explorar = () => {

  const [listaVidoes, setListVideos] = useState([]);
  const [refreshing, setRefreshing] = useState(false);
  const [loading, setLoading] = useState(false);

  const listarVideosExplorar = async () => {

    try {
      setRefreshing(true);
      setLoading(true);
      const response = await Api.get('/search', {
        params: {
          q: 'sertanejo'
        }
      });
      setListVideos(response.data.items);
      setRefreshing(false);
      setLoading(false);
    } catch (error) {
      console.error(error);
      setRefreshing(false);
      setLoading(false);
    }
  }

  useEffect(() => {
    listarVideosExplorar();
  }, []);

  return (

    <Container justify="flex-start" color="muted100">
      <Header />

      {loading ?

        <ContainerLoading>
          <ActivityIndicator size="large" color="#295ecc" />
        </ContainerLoading>

        :

        <Container>

          <ScrollView
            refreshControl={
              <RefreshControl
                refreshing={refreshing}
                onRefresh={listarVideosExplorar}
              />
            }
          >
            <Container height={175} color="light">
              <SecaoArea>
                <FlatList
                  horizontal
                  data={data}
                  renderItem={({ item, index }) => (
                    <TouchableOpacity key={index}>
                      <Secao titulo={item.titulo} subtitulo={item.subtitulo} />
                    </TouchableOpacity>
                  )}
                >
                </FlatList>
              </SecaoArea>
            </Container>

            <Container pLeft={10} padding={5} color="light">
              <TitleDescription>Vídeos em altas</TitleDescription>
            </Container>

            {/* Vídeos */}
            <Container justify="flex-start">

              {listaVidoes.length > 0 ?
                listaVidoes.map((item, index) => (
                  <Video key={index} item={item} />
                ))
                :
                [0, 1, 2, 3, 4].map((item, index) => (
                  <Video key={index} />
                ))
              }

            </Container>

          </ScrollView>
        </Container>
      }
    </Container>

  );
}

export default Explorar;