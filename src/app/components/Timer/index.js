export const Timer = {
	template: require('./tpl.html'),
	bindings: {
		timerObject: '<'
	},
	controller($interval) {
		let interval = null;
		const updateTime = () => {
			this.timerObject.elapsed += 2000;
		};
		this.$onChanges = () => {
			if (!interval) {
				interval = $interval(updateTime, 2000);
			}
		};
	}
};
