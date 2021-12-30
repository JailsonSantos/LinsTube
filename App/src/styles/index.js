import styled from 'styled-components/native';
import theme from './theme.json';


export const ContainerLoading = styled.View`
  flex: 1;
  background: ${(props) => props.color ? theme.colors[props.color] : 'transparent'};
  flex-direction: ${(props) => props.row ? 'row' : 'column'};
  justify-content: ${(props) => props.justify || 'center'};
  padding: ${(props) => props.padding || 0}px;
  padding-left: ${(props) => props.pLeft || 0}px;
  margin-bottom: ${(props) => props.mBottom || 0}px;
  width: 100%;
  align-items: ${(props) => props.align || 'center'};
  position: ${(props) => props.position || 'relative'};
  top: ${(props) => props.top || 0};
  z-index: ${(props) => props.zIndex || 1};
`;

export const Container = styled.View`
  flex: 1;
  background: ${(props) => props.color ? theme.colors[props.color] : 'transparent'};
  flex-direction: ${(props) => props.row ? 'row' : 'column'};
  justify-content: ${(props) => props.justify || 'center'};
  padding: ${(props) => props.padding || 0}px;
  padding-left: ${(props) => props.pLeft || 0}px;
  margin-bottom: ${(props) => props.mBottom || 0}px;
  width: 100%;
  align-items: ${(props) => props.align || 'center'};
  max-width: ${(props) => props.width || '100%'};
  max-height: ${(props) => props.height ? props.height + 'px' : 'auto'};
  position: ${(props) => props.position || 'relative'};
  top: ${(props) => props.top || 0};
  z-index: ${(props) => props.zIndex || 1};
`;


export const ContainerCanal = styled.View`
  flex: 1;
  background: ${(props) => props.color ? theme.colors[props.color] : 'transparent'};
  flex-direction: ${(props) => props.row ? 'row' : 'column'};
  justify-content: ${(props) => props.justify || 'center'};
  padding: ${(props) => props.padding || 0}px;
  padding-left: ${(props) => props.pLeft || 0}px;
  margin-bottom: ${(props) => props.mBottom || 0}px;
  border: 1px solid #c4c4c4;
  margin-bottom: 5px;
  width: 100%;
  align-items: ${(props) => props.align || 'center'};
  max-width: ${(props) => props.width || '100%'};
  max-height: ${(props) => props.height ? props.height + 'px' : 'auto'};
  position: ${(props) => props.position || 'relative'};
  top: ${(props) => props.top || 0};
  z-index: ${(props) => props.zIndex || 1};
`;

export const ContainerVideo = styled.View`
  flex: 1;
  background: ${(props) => props.color ? theme.colors[props.color] : 'transparent'};
  flex-direction: ${(props) => props.row ? 'row' : 'column'};
  justify-content: ${(props) => props.justify || 'center'};
  margin-bottom: 5px;
  width: 100%;
  align-items: ${(props) => props.align || 'center'};
  max-width: ${(props) => props.width || '100%'};
  max-height: ${(props) => props.height ? props.height + 'px' : 'auto'};
  position: ${(props) => props.position || 'relative'};
  top: ${(props) => props.top || 0};
  z-index: ${(props) => props.zIndex || 1};
`;

export const ContainerVideosRecentes = styled.View`
  flex: 1;
  background: ${(props) => props.color ? theme.colors[props.color] : 'transparent'};
  flex-direction: ${(props) => props.row ? 'row' : 'column'};
  justify-content: ${(props) => props.justify || 'center'};
  width: 100%;
  padding: 15px;
  align-items: ${(props) => props.align || 'center'};
  max-width: ${(props) => props.width || '100%'};
  max-height: ${(props) => props.height ? props.height + 'px' : 'auto'};
  position: ${(props) => props.position || 'relative'};
  top: ${(props) => props.top || 0};
  z-index: ${(props) => props.zIndex || 1};
`;

export const ContainerVideosShorts = styled.View`
  flex: 1;
  background: ${(props) => props.color ? theme.colors[props.color] : 'transparent'};
  flex-direction: ${(props) => props.row ? 'row' : 'column'};
  justify-content: ${(props) => props.justify || 'center'};
  width: 100%;
  padding: 15px;
  align-items: ${(props) => props.align || 'center'};
  max-width: ${(props) => props.width || '100%'};
  max-height: ${(props) => props.height ? props.height + 'px' : 'auto'};
  position: ${(props) => props.position || 'relative'};
  top: ${(props) => props.top || 0};
  z-index: ${(props) => props.zIndex || 1};
`;


export const ContainerVideosPlayList = styled.View`
  flex: 1;
  background: ${(props) => props.color ? theme.colors[props.color] : 'transparent'};
  flex-direction: ${(props) => props.row ? 'row' : 'column'};
  justify-content: ${(props) => props.justify || 'center'};
  width: 100%;
  margin-bottom: 2px;
  padding: 15px;
  align-items: ${(props) => props.align || 'center'};
  max-width: ${(props) => props.width || '100%'};
  position: ${(props) => props.position || 'relative'};
  top: ${(props) => props.top || 0};
  z-index: ${(props) => props.zIndex || 1};
`;

export const ContainerVideoDetalhe = styled.View`
  flex: 1;
  background: ${(props) => props.color ? theme.colors[props.color] : 'transparent'};
  flex-direction: ${(props) => props.row ? 'row' : 'column'};
  justify-content: ${(props) => props.justify || 'center'};
  width: 100%;
  align-items: ${(props) => props.align || 'center'};
  max-width: ${(props) => props.width || '100%'};
  max-height: ${(props) => props.height ? props.height + 'px' : 'auto'};
  position: ${(props) => props.position || 'relative'};
  top: ${(props) => props.top || 0};
  z-index: ${(props) => props.zIndex || 1};
`;

export const TitleLogo = styled.Text`
  font-size: 20px;
  font-weight: bold;
  color: #000;
  margin-left: 5px;
`;


export const AllDescription = styled.Text`
  background-color: #ffff00;
  font-size: 15px;
  font-weight: bold;
  color: #000;
`;

export const TitleDescription = styled.Text`
  width: 100%;
  font-size: 15px;
  font-weight: bold;
  color: ${(props) => props.vermelho ? '#ff0000' : props.azul ? '#0000ff' : '#000'};
`;
export const SubtitleDescription = styled.Text`
  font-size: 12px;
`;

export const TitleDescriptionNotificacao = styled.Text`
  width: 100%;
  font-size: 12px;
  font-weight: bold;
  color: #000;
`;

export const TitleDescriptionRecentes = styled.Text`
  width: 100%;
  font-size: 12px;
  font-weight: bold;
  color: #000;
`;

export const Button = styled.TouchableOpacity`
  width: 100%;
  padding: ${(props) => props.compact ? 5 : 15}px;
  opacity: ${(props) => props.disabled ? 0.5 : 1};
  background: ${(props) => props.type ? theme.colors[props.type] : theme.colors.info};
`;

export const ButtonText = styled.Text`
  text-align: center;
  color: ${(props) => props.color ? theme.colors[props.color] : '#F9FBFC'};
`;

export const CategoryArea = styled.View`
  padding: 10px;
`;

export const RecentesArea = styled.View`
  border: 1px solid #cecece;
`;

export const PlayListArea = styled.View`
  border: 1px solid #cecece;
`;

export const CategoryButton = styled.TouchableOpacity`
background: ${(props) => props.color ? theme.colors[props.color] : 'transparent'};
  width: 100px;
  height: 40px;
  border-radius: 50px;
  align-items: center;
  justify-content: center;
  margin-right: 5px;
`;

export const CategoryText = styled.Text`
  font-size: 15px;
  color: #000;
  font-weight: bold;
`;

export const SecaoArea = styled.View`
  padding: 10px;
  border: 1px solid #c4c4c4;
`;

export const SecaoButton = styled.TouchableOpacity`
background: ${(props) => props.color ? theme.colors[props.color] : 'transparent'};
  width: 90px;
  height: 70px;
  border-radius: 5px;
  align-items: flex-start;
  justify-content: space-between;
  padding: 10px;
  margin-right: 5px;
  margin-bottom: 5px;
`;

export const SecaoText = styled.Text`
  font-size: 15px;
  color: #000;
`;

export const CanalScrollView = styled.ScrollView`
  width: 100%;
`;

export const DetalhesScrollView = styled.ScrollView`
  width: 100%;
`;

export const CanalArea = styled.View`
  width: 78%;
  padding: 10px;
`;

export const BibliotecaArea = styled.View`
  width: 100%;
  padding: 10px 15px;
  background: #fff;
`;

export const BibliotecaAreaItem = styled.TouchableOpacity`
  width: 100%;
  flex-direction: row;
  align-items: center;
  height: 50px;
`;



export const CanalButton = styled.TouchableOpacity`
  background: ${(props) => props.color ? theme.colors[props.color] : 'transparent'};
  border-radius: 5px;
  width: 80px;
  align-items: center;
  justify-content: center;
  padding: 5px;
  margin-right: 5px;
  margin-bottom: 5px;
`;
export const CanalAllButton = styled.TouchableOpacity`
  background: ${(props) => props.color ? theme.colors[props.color] : 'transparent'};
  border-radius: 5px;
  width: 70px;
  height: 70px;
  border: 1px solid rgba(0,0,0,0.05);
  border-radius: 40px;
  align-items: center;
  justify-content: center;
  padding: 5px;
  margin-right: 5px;
  margin-bottom: 5px;
`;

export const CanalImage = styled.Image`
  width: 55px;
  height: 55px;
`;

export const CanalAllText = styled.Text`
  font-size: 15px;
  color: #0000ff;
`;

export const CanalText = styled.Text`
  width: 100%;
  font-size: 11px;
  color: #616161;
`;

export const ImageTube = styled.Image`
  width: ${(props) => props.width || '100%'};
  height: ${(props) => props.height || '200'}px;
`;

export const ImageTubeLogo = styled.Image`
  width: 30px;
  height: 30px;
`;

export const ImageTubeBullet = styled.Image`
  width: 5px;
  height: 5px;
  margin-right: 5px;
`;

export const ImageTubeNotificacao = styled.Image`
  width: 120px;
  height: 70px;
`;

export const ImageTubeBiblioteca = styled.Image`
  width: 20px;
  height: 20px;
  margin-right: 20px;
`;

export const ImageTubeDetalhe = styled.Image`
  width: 20px;
  height: 20px;
  margin-right: 20px;
`;

export const IconTubeDetalhe = styled.Image`
  width: 20px;
  height: 20px;
`;

export const CategoriaVideos = styled.TouchableOpacity`
  width: 50%;
  flex-direction: row;
  align-items: center;
  padding: 5px 10px;
  background: #fff;
`;
export const VideoArea = styled.TouchableOpacity`
  width: 100%;
  height: auto;
`;

export const SetaVoltar = styled.TouchableOpacity`
  width: 100%;
  top: 10px;
  left: 10px;
  height: auto;
  position: absolute;
  z-index: 999;
`;


export const CategoriaText = styled.Text`
  font-size: 12px;
  color: #000;
`;

export const NotificacaoArea = styled.ScrollView`
  width: 100%;
  border: 1px solid #c4c4c4;
`;

export const LinhaHorizontal = styled.View`
  width: 100%;
  height: 2px;
  border: 1px solid #c4c4c4;
`;

export const AreaVideo = styled.View`
  background: #000;
  width: 100%;
  height: 200px;
`;

export const AreaVideoLoading = styled.View`
  background: #000;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 200px;
  position: absolute;
  z-index: 999;
`;


