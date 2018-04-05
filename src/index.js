/* eslint-disable */

import angular from 'angular';

import 'angular-ui-router';
import routesConfig from './routes';

import './index.css';
import './semantic-dist/semantic.css';

import {TimerService} from './app/services/TimerService';

import {RenderElapsedString} from './app/filters/RenderElapsedString';

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
	.factory('globalInterceptor', ['$q', 'REMOTE_HOST', function($q, REMOTE_HOST) {
		return {
			request: function(config) {
				config.url = REMOTE_HOST + config.url;
				return config;
			},
		}
	}])
	.config(['$httpProvider', function($httpProvider) { 
		$httpProvider.interceptors.push('globalInterceptor');
	}])
	.service('timerService', ['$http', TimerService])
	.filter('renderElapsedString', RenderElapsedString)
	.component('timerDashboard', TimerDashboard)
	.component('timerActionButton', TimerActionButton)
	.component('timer', Timer)
	.component('timerForm', TimerForm)
	.component('toggleableTimerForm', ToggleableTimerForm);
