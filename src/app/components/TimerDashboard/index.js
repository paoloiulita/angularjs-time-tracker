export const TimerDashboard = {
	template: require('./tpl.html'),
	controller(timerService, $log) {
		this.isLoading = false;
		this.showError = false;

		this.loadTimers = () => {
			this.isLoading = true;
			this.showError = false;
			timerService.getTimers().then(response => {
				this.timers = response;
			})
			.catch(error => {
				$log.log(error);
				this.showError = true;
			})
			.finally(() => {
				this.isLoading = false;
			});
		};

		this.$onInit = () => {
			this.loadTimers();
		};
	}
};
