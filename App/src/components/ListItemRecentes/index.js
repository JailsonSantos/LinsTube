import React from 'react';

// Styles Global
import {
  Container,
  BibliotecaArea,
  BibliotecaAreaItem,
  ImageTubeBiblioteca,
  TitleDescription,
  SubtitleDescription
} from '../../styles';


import historico from '../../assets/historico.png';
import relogio from '../../assets/relogio.png';
import tiraDeFilme from '../../assets/tira-de-filme.png';
import video from '../../assets/video.png';


const ListItemRecentes = () => {
  return (
    <BibliotecaArea>

      <Container>
        <BibliotecaAreaItem>
          <ImageTubeBiblioteca source={historico} alt="Histórico de videos" />
          <TitleDescription>Histórico</TitleDescription>
        </BibliotecaAreaItem>
      </Container>

      <Container>
        <BibliotecaAreaItem>
          <ImageTubeBiblioteca source={video} alt="Seus videos" />
          <TitleDescription>Seus Vídeos</TitleDescription>
        </BibliotecaAreaItem>
      </Container>

      <Container>
        <BibliotecaAreaItem>
          <ImageTubeBiblioteca source={tiraDeFilme} alt="Seus filmes" />
          <TitleDescription>Seus Filmes</TitleDescription>
        </BibliotecaAreaItem>
      </Container>

      <Container>
        <BibliotecaAreaItem>
          <ImageTubeBiblioteca source={relogio} alt="Assistir mais tarde" />
          <Container align="flex-start">
            <TitleDescription>Assistir mais tarde</TitleDescription>
            <SubtitleDescription>2 video(os) não assistido(os)</SubtitleDescription>
          </Container>
        </BibliotecaAreaItem>
      </Container>

    </BibliotecaArea>

  );
}

export default ListItemRecentes;