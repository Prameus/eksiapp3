import { LogBox } from 'react-native';
import { AppRegistry } from 'react-native';
import { App } from './src/App';

LogBox.ignoreAllLogs();

AppRegistry.registerComponent('eksiapp3', () => App);