import React from 'react';
import { TouchableOpacity, Image } from 'react-native';

import {
  ContainerVideosShorts,
} from '../../styles';

// Icons e images do src
import VidShorts from '../../assets/shorts.png';

const VideosShorts = () => {
  return (
    <ContainerVideosShorts color="light">
      <TouchableOpacity>
        <Image source={VidShorts} />
      </TouchableOpacity>
    </ContainerVideosShorts>
  );
}

export default VideosShorts;