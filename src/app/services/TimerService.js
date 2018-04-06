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
		return $http.post('/api/timers', data);
	};

	const updateTimer = data => {
		return $http.put('/api/timers', data);
	};

	const deleteTimer = data => {
		return $http.delete(`/api/timers?id=${data.id}`);
	};

	const startTimer = data => {
		return $http.post('/api/timers/start', data);
	};

	const stopTimer = data => {
		return $http.post('/api/timers/stop', data);
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
