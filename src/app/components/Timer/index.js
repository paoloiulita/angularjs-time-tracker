export const Timer = {
	template: require('./tpl.html'),
	bindings: {
		timerObject: '<'
	},
	controller($interval) {
		let interval = null;
		const updateTime = () => {
			this.timerObject.trueElapsed += 1000;
		};
		this.$onInit = () => {
			let e = this.timerObject.elapsed;
			if (this.timerObject.runningSince) {
				e += Date.now() - this.timerObject.runningSince;
			}
			this.timerObject.trueElapsed = e;
			if (!interval) {
				interval = $interval(updateTime, 1000);
			}
		};
	}
};
