import { API_KEY_YOUTUBE, API_URL_YOUTUBE } from 'react-native-dotenv';
import axios from 'axios';

export default axios.create({
  baseURL: API_URL_YOUTUBE,
  params: {
    part: 'snippet',
    maxResults: 5,
    key: API_KEY_YOUTUBE,
  },
  headers: {}
});
