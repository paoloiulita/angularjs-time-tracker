/* eslint-disable */

import angular from 'angular';

import 'angular-ui-router';
import routesConfig from './routes';

import './index.css';
import './semantic-dist/semantic.css';

import {TimerService} from './app/services/TimerService';

import {MsToHuman} from './app/filters/MsToHuman';

import {globalInterceptor} from './globalInterceptor';
import {httpProvider} from './httpProvider';

import {TimerDashboard} from './app/components/TimerDashboard';
import {TimerActionButton} from './app/components/TimerActionButton';
import {Timer} from './app/components/Timer';
import {TimerForm} from './app/components/TimerForm';
import {ToggleableTimerForm} from './app/components/ToggleableTimerForm';

export const app = 'app';

angular
	.module(app, ['ui.router'])
	.config(routesConfig)
	.value('REMOTE_HOST', 'http://localhost:3033')
	.config(['$httpProvider', httpProvider])
	.service('timerService', ['$http', TimerService])
	.factory('globalInterceptor', ['REMOTE_HOST', globalInterceptor])
	.filter('msToHuman', MsToHuman)
	.component('timerDashboard', TimerDashboard)
	.component('timerActionButton', TimerActionButton)
	.component('timer', Timer)
	.component('timerForm', TimerForm)
	.component('toggleableTimerForm', ToggleableTimerForm);
