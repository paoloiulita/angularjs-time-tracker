import angular from 'angular';

import 'angular-ui-router';
import routesConfig from './routes';

import './index.css';
import './semantic-dist/semantic.css';

import {TimerDashboard} from './app/TimerDashboard';

export const app = 'app';

angular
  .module(app, ['ui.router'])
  .config(routesConfig)
  .component('timerDashboard', TimerDashboard);
