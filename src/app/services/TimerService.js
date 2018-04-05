export const TimerService = $http => {
	const getTimers = () => {
		return $http.get('/api/timers', {
			headers: {
				Accept: 'application/json'
			}
		})
		.then(response => response.data);
	};

	const createTimer = data => {
		return $http.post('/api/timers', {
			body: angular.toJson(data),
			headers: {
				Accept: 'application/json',
				'Content-Type': 'application/json'
			}
		});
	};

	const updateTimer = data => {
		return $http.put('/api/timers', {
			body: angular.toJson(data),
			headers: {
				Accept: 'application/json',
				'Content-Type': 'application/json'
			}
		});
	};

	const deleteTimer = data => {
		return $http.delete('/api/timers', {
			body: angular.toJson(data),
			headers: {
				Accept: 'application/json',
				'Content-Type': 'application/json'
			}
		});
	};

	const startTimer = data => {
		return $http.post('/api/timers/start', {
			body: angular.toJson(data),
			headers: {
				Accept: 'application/json',
				'Content-Type': 'application/json'
			}
		});
	};

	const stopTimer = data => {
		return fetch('/api/timers/stop', {
			method: 'post',
			body: angular.toJson(data),
			headers: {
				Accept: 'application/json',
				'Content-Type': 'application/json'
			}
		});
	};

	return {
		getTimers,
		createTimer,
		updateTimer,
		startTimer,
		stopTimer,
		deleteTimer
	};
};
