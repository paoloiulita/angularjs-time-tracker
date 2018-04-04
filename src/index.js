import angular from 'angular';

import {TimerDashboard} from './app/TimerDashboard';
import 'angular-ui-router';
import routesConfig from './routes';

import './index.css';

export const app = 'app';

angular
  .module(app, ['ui.router'])
  .config(routesConfig)
  .component('timerDashboard', TimerDashboard);
