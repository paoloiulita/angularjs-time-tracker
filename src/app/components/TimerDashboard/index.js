export const TimerDashboard = {
	template: require('./tpl.html'),
	controller(timerService) {
		this.isLoading = true;
		timerService.getTimers().then(response => {
            console.log(response); // eslint-disable-line
			this.isLoading = false;
			this.timers = response;
		});
	}
};
