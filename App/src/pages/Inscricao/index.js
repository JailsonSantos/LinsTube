import React, { useState, useEffect } from 'react';
import { FlatList, TouchableOpacity, RefreshControl, ActivityIndicator } from 'react-native';

// Base de Dados
import data from '../../data/canais.json';

// Axios API
import Api from '../../services/api';

// Icons externos
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

// Select singlePiker
import { SinglePickerMaterialDialog } from 'react-native-material-dialog';

// Styles Global
import {
  Container,
  ContainerLoading,
  ContainerCanal,
  CanalScrollView,
  CanalArea,
  CanalAllButton,
  CanalAllText,
  CategoriaVideos,
  CategoryText,
} from '../../styles';

// Components
import Header from '../../components/Header';
import Canal from '../../components/Canal';
import Video from '../../components/Video';

const Inscricao = ({ navigation }) => {

  const [visivel, setVisivel] = useState(false);
  const [selecionado, setSelecionado] = useState({ value: 1, label: 'Vídeos e postagens' });
  const [listaVidoes, setListVideos] = useState([]);

  const [refreshing, setRefreshing] = useState(false);
  const [loading, setLoading] = useState(false);

  const listarVideosInscricao = async () => {

    try {
      setRefreshing(true);
      setLoading(true);
      const response = await Api.get('/search', {
        params: {
          q: 'eletronico'
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
    listarVideosInscricao();
  }, []);

  return (

    <>
      {/*  <SinglePickerMaterialDialog
        title={'Vídeos - Postagens'}
        items={[
          { value: 1, label: 'Vídeos e postagens' },
          { value: 2, label: 'Somente vídeos' },
        ]}
        visible={visivel}
        selectedItem={selecionado}
        onOk={(result) => {
          setVisivel(false);
          setSelecionado(result.selectedItem);
        }}
      />; */}

      {/*       <SinglePickerMaterialDialog
        title={"Vídeos - Postagens"}
        items={[
          { value: 1, label: "Video e postagens" },
          { value: 2, label: "Somente vídeos" },
        ]}
        visible={visivel}
        selectedItem={selecionado}
        onOk={(result) => (
          setVisivel(false),
          setSelecionado(result.selectedItem)
        )}
      />; */}

      <Container justify="flex-start" color="muted100">
        <Header />

        {loading ?

          <ContainerLoading>
            <ActivityIndicator size="large" color="#295ecc" />
          </ContainerLoading>

          :

          <Container color="muted100">
            <CanalScrollView
              refreshControl={
                <RefreshControl
                  refreshing={refreshing}
                  onRefresh={listarVideosInscricao}
                />
              }
            >
              <ContainerCanal height={110} row color="light">
                <CanalArea>
                  <FlatList
                    horizontal
                    data={data}
                    renderItem={({ item, index }) => (
                      <TouchableOpacity key={index}>
                        <Canal titulo={item.titulo} />
                      </TouchableOpacity>
                    )}
                  >
                  </FlatList>

                </CanalArea>
                <Container height={110} justify="center" align="center">
                  <CanalAllButton onPress={() => navigation.navigate('Detalhes')}>
                    <CanalAllText>TODOS</CanalAllText>
                  </CanalAllButton>
                </Container>

              </ContainerCanal>
              <Container color="light" align="flex-start">
                <CategoriaVideos onPress={() => setVisivel(true)}>
                  <CategoryText>{selecionado.label}</CategoryText>
                  <Icon name="menu-down" size={27} />
                </CategoriaVideos>
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
                  ))}
              </Container>
            </CanalScrollView>

          </Container>
        }
      </Container>
    </>
  );
}

export default Inscricao;