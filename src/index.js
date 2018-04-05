import angular from 'angular';

import 'angular-ui-router';
import routesConfig from './routes';

import './index.css';
import './semantic-dist/semantic.css';

import {TimerDashboard} from './app/components/TimerDashboard';
import {TimerActionButton} from './app/components/TimerActionButton';
import {Timer} from './app/components/Timer';
import {TimerForm} from './app/components/TimerForm';
import {EditableTimerList} from './app/components/EditableTimerList';
import {ToggleableTimerForm} from './app/components/ToggleableTimerForm';

export const app = 'app';

angular
  .module(app, ['ui.router'])
  .config(routesConfig)
  .component('timerDashboard', TimerDashboard)
  .component('timerActionButton', TimerActionButton)
  .component('timer', Timer)
  .component('timerForm', TimerForm)
  .component('editableTimerList', EditableTimerList)
  .component('toggleableTimerForm', ToggleableTimerForm);
