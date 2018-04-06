export const Timer = {
	template: require('./tpl.html'),
	bindings: {
		timerObject: '<'
	},
	controller($interval, timerService) {
		let tick = null;

		const updateTime = () => {
			this.timerObject.elapsed += 1000;
			this.elapsedTime += 1000;
		};

		const clear = () => {
			$interval.cancel(tick);
			tick = null;
		};

		this.$onInit = () => {
			this.isRunning = Boolean(this.timerObject.runningSince);

			let e = this.timerObject.elapsed;
			if (this.isRunning) {
				e += Date.now() - this.timerObject.runningSince;
			}
			this.elapsedTime = e;
		};

		this.$doCheck = () => {
			if (this.isRunning) {
				if (tick === null) {
					tick = $interval(updateTime, 1000);
				}
			} else {
				clear();
			}
		};

		this.$onDestroy = () => {
			clear();
		};

		this.toggleTimer = () => {
			if (this.isRunning) {
				timerService.stopTimer({
					id: this.timerObject.id,
					stop: Date.now()
				})
					.then(this.isRunning = false);
			} else {
				timerService.startTimer({
					id: this.timerObject.id,
					start: Date.now()
				})
					.then(this.isRunning = true);
			}
		};
	}
};
