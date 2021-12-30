import React, { useState, useEffect } from 'react';
import { FlatList, ScrollView, RefreshControl, ActivityIndicator } from 'react-native';

// Base de Dados
import data from '../../data/categorias.json';

// Axios API
import Api from '../../services/api';

// Styles Global
import {
  ContainerLoading,
  Container,
  ContainerCanal,
  CategoryArea,
} from '../../styles';

// Components
import Header from '../../components/Header';
import Categoria from '../../components/Categoria';
import Video from '../../components/Video';

const Home = () => {

  const [listaVidoes, setListVideos] = useState([]);

  const [refreshing, setRefreshing] = useState(false);
  const [loading, setLoading] = useState(false);

  const listarVideosHome = async () => {

    try {
      setRefreshing(true);
      setLoading(true);
      const response = await Api.get('/search', {
        params: {
          q: 'gospel'
        }
      });
      setListVideos(response.data.items);
      setRefreshing(false);
      setLoading(false);

    } catch (error) {
      setRefreshing(false);
      setLoading(false);
      console.error(error);
    }
  }

  useEffect(() => {
    listarVideosHome();
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
                onRefresh={listarVideosHome}
              /*  colors={["#ff0000"]} */
              />
            }
          >
            <ContainerCanal height={67} color="light">
              <CategoryArea>
                <FlatList
                  horizontal
                  data={data}
                  renderItem={({ item, index }) => (
                    <Categoria key={index} titulo={item.titulo} />
                  )}
                >
                </FlatList>
              </CategoryArea>
            </ContainerCanal>

            <Container justify="flex-start">
              {listaVidoes.length > 0 ?
                listaVidoes.map((item, index) => (
                  <Video key={index} item={item} />
                ))
                :
                [0, 1, 2, 3, 4].map((item2, index) => (
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

export default Home;