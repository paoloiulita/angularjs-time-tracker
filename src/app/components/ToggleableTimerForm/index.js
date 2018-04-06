export const ToggleableTimerForm = {
	template: require('./tpl.html'),
	bindings: {
		refresh: '<'
	},
	controller() {
		this.$onInit = () => {
			this.showForm = false;
		};

		this.dismiss = () => {
			this.showForm = false;
		};

		this.update = () => {
			this.dismiss();
			this.refresh();
		};
	}
};
