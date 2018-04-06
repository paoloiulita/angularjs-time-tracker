import v4 from 'uuid/v4';

export const TimerForm = {
	template: require('./tpl.html'),
	bindings: {
		isEditing: '<',
		complete: '<',
		cancel: '<',
		timerData: '<'
	},
	controller(timerService) {
		this.isLoading = false;

		const doCreate = () => {
			return timerService.createTimer({
				title: this.timerData.title,
				project: this.timerData.project,
				id: v4(),
				elasped: 0
			});
		};

		const doEdit = () => {
			return timerService.updateTimer({
				title: this.timerData.title,
				project: this.timerData.project,
				id: this.timerData.id
			});
		};

		this.handleCancelButton = e => {
			e.stopPropagation();
			this.cancel();
		};

		this.submitForm = () => {
			this.isLoading = true;
			const promise = this.isEditing ? doEdit : doCreate;
			promise().then(() => {
				this.isLoading = false;
				this.complete();
			});
		};
	}
};
