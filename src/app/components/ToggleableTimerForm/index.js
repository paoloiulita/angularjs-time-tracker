export const ToggleableTimerForm = {
	template: require('./tpl.html'),
	controller() {
		this.$onInit = () => {
			this.showForm = false;
		};

		this.dismiss = () => {
			this.showForm = false;
		};
	}
};
