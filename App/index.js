import { AppRegistry } from 'react-native';
import { name as appName } from './app.json';

import './src/config/ReactotronConfig';

import Routes from './routes';

AppRegistry.registerComponent(appName, () => Routes);
