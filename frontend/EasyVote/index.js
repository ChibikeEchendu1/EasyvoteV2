/** @format */

import {AppRegistry} from 'react-native';
import App from './App';
import Profile from './src/pages/Profile';
import HomeCan from './src/pages/HomeCan';
//import Twofactor from './src/pages/Twofactor';
import Router from './Router';
//import Router0 from './router2';
import SettingsEdit from './src/pages/SettingsEdit'
import {name as appName} from './app.json';
import Login from './src/pages/Login';

AppRegistry.registerComponent(appName, () => Router);
