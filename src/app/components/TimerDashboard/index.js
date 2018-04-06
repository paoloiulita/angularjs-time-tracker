export const TimerDashboard = {
	template: require('./tpl.html'),
	controller(timerService) {
		this.isLoading = true;
		
		this.$onInit = () => {
			timerService.getTimers().then(response => {
				this.isLoading = false;
				this.timers = response;
			});
		};
	}
};
