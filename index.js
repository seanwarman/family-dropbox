import { AppRegistry } from 'react-native';
import App from './App';
import { name as appName } from './app.json';
import { DB_PASSWORD, DB_HOST, DB_PORT, DB_USER, DB_NAME } from '@env';

console.log('DB_PASSWORD: ', DB_PASSWORD)

AppRegistry.registerComponent(appName, () => App);
