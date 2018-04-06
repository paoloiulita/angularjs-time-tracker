export const TimerDashboard = {
	template: require('./tpl.html'),
	controller(timerService) {
		this.isLoading = true;

		this.loadTimers = () => {
			timerService.getTimers().then(response => {
				this.isLoading = false;
				this.timers = response;
			});
		};

		this.$onInit = () => {
			this.loadTimers();
		};
	}
};
