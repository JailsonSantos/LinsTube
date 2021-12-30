import React, { useState, useEffect } from 'react';
import { FlatList, ScrollView, TouchableOpacity, RefreshControl, ActivityIndicator } from 'react-native';

// Base de Dados
import data from '../../data/categorias.json';

// Axios API
import Api from '../../services/api';

// Styles Global
import {
  Container,
  ContainerLoading,
  PlayListArea,
  RecentesArea,
  ImageTubeBiblioteca,
  TitleDescription,
  SubtitleDescription
} from '../../styles';

// Icons externos
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

// Icons e images do src
import like from '../../assets/like.png';

// Components
import Header from '../../components/Header';
import VideosPlayList from '../../components/VideosPlayList';
import VideosRecentes from '../../components/VideosRecentes';
import ListItemRecentes from '../../components/ListItemRecentes';

const Biblioteca = ({ navigation }) => {

  const [listaVideosRecentes, setListaVideosRecentes] = useState([]);
  const [listaVideosPlayList, setListaVideosPlayList] = useState([])
  const [refreshing, setRefreshing] = useState(false);
  const [loading, setLoading] = useState(false);

  const listarVideosBibliotecas = async () => {

    try {
      setRefreshing(true);
      setLoading(true);
      const response = await Api.get('/search', {
        params: {
          q: 'forro'
        }
      });
      setListaVideosRecentes(response.data.items);
      setListaVideosPlayList(response.data.items);
      setRefreshing(false);
      setLoading(false);
    } catch (error) {
      console.error(error);
      setRefreshing(false);
      setLoading(false);
    }
  }

  useEffect(() => {
    listarVideosBibliotecas();
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
                onRefresh={listarVideosBibliotecas}
              />
            }
          >
            <Container pLeft={10} color="light">
              <TitleDescription>Recentes</TitleDescription>
            </Container>
            <Container height={160}>

              <RecentesArea>
                {listaVideosRecentes.length > 0 ?

                  <FlatList
                    horizontal
                    data={listaVideosRecentes}
                    renderItem={({ item, index }) => (
                      <TouchableOpacity key={index} onPress={() => navigation.navigate('Detalhes', item)}>
                        <VideosRecentes item={item} />
                      </TouchableOpacity>
                    )}
                  >
                  </FlatList>
                  :
                  <FlatList
                    horizontal
                    data={[0, 1, 2, 3, 4]}
                    renderItem={({ item, index }) => (
                      <TouchableOpacity key={index} onPress={() => navigation.navigate('Detalhes')}>
                        <VideosRecentes />
                      </TouchableOpacity>
                    )}
                  >
                  </FlatList>
                }
              </RecentesArea>

            </Container>

            <ListItemRecentes />

            <PlayListArea>
              <Container row padding={10} color="light">
                <Container width={160} pLeft={15}>
                  <TitleDescription>Playlists</TitleDescription>
                </Container>
                <Container>
                  <TouchableOpacity>
                    <Container row justify="flex-end" align="center">
                      <TitleDescription>Adicionados recentemente</TitleDescription>
                      <Icon name="menu-down" size={27} />
                    </Container>
                  </TouchableOpacity>
                </Container>
              </Container>

              <Container height={280} color="muted100">

                {listaVideosPlayList.length > 0 ?

                  listaVideosPlayList.map((item, key) => (
                    <VideosPlayList key={item.snippet.channelId} item={item} />
                  ))
                  :
                  [0, 1, 2, 3, 4].map((item, key) => (
                    <VideosPlayList key={key} />
                  ))
                }

              </Container>
            </PlayListArea>

            <Container >
              <TouchableOpacity>
                <Container row height={60} color="light">

                  <Container width={80}>
                    <ImageTubeBiblioteca source={like} />
                  </Container>
                  <Container justify="flex-start" align="flex-start">
                    <TitleDescription>Vídeos marcados como "Gostei"</TitleDescription>
                    <SubtitleDescription>777 vídeos</SubtitleDescription>
                  </Container>
                </Container>
              </TouchableOpacity>
            </Container>

          </ScrollView>
        </Container >
      }
    </Container >
  );
}

export default Biblioteca;