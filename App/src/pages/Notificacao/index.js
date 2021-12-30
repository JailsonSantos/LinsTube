import React, { useState, useEffect } from 'react';
import { ActivityIndicator, RefreshControl } from 'react-native';

// Base de Dados
import data from '../../data/secoes.json';

// Axios API
import Api from '../../services/api';

// Styles Global
import {
  Container,
  ContainerLoading,
  NotificacaoArea,
  TitleDescription,
  LinhaHorizontal
} from '../../styles';

// Components
import Header from '../../components/Header';
import NotificacaoVideo from '../../components/NotificacaoVideo';

const Notificacao = ({ navigation }) => {

  const [listaVidoes, setListVideos] = useState([]);

  const [refreshing, setRefreshing] = useState(false);
  const [loading, setLoading] = useState(false);

  const listarVideosNotificacao = async () => {

    try {
      setRefreshing(true);
      setLoading(true);
      const response = await Api.get('/search', {
        params: {
          q: 'romanticas'
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
    // console.log("id :" + JSON.stringify(response.data.items[0].id.videoId))
  }

  useEffect(() => {
    listarVideosNotificacao();
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

          <NotificacaoArea
            refreshControl={
              <RefreshControl
                refreshing={refreshing}
                onRefresh={listarVideosNotificacao}
              />
            }
          >

            <Container pLeft={10} color="light">
              <TitleDescription>Hoje</TitleDescription>
            </Container>

            <LinhaHorizontal />

            {/* Notificações de Vídeos */}
            <Container justify="flex-start">
              {listaVidoes.length > 0 ?
                listaVidoes.map((item, index) => (
                  <NotificacaoVideo key={index} item={item} />
                ))
                :
                [0, 1, 2, 3, 4].map((item, index) => (
                  <NotificacaoVideo key={index} />
                ))}
            </Container>

            <Container pLeft={10} padding={5} color="light" >
              <TitleDescription>Semana passada</TitleDescription>
            </Container>

            <LinhaHorizontal />

            {/* Notificações de Vídeos */}
            <Container justify="flex-start">
              {listaVidoes.length > 0 ?
                listaVidoes.map((item, index) => (
                  <NotificacaoVideo key={index} item={item} />
                ))
                :
                [0, 1, 2, 3, 4].map((item, index) => (
                  <NotificacaoVideo key={index} />
                ))
              }
            </Container>

          </NotificacaoArea>
        </Container>
      }
    </Container>
  );
}

export default Notificacao;