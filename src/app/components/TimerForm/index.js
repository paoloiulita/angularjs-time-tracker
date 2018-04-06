import v4 from 'uuid/v4';

export const TimerForm = {
	template: require('./tpl.html'),
	bindings: {
		isEditing: '<',
		complete: '<',
		cancel: '<'
	},
	controller(timerService) {
		this.isLoading = false;

		const doCreate = () => {
			return timerService.createTimer({
				title: this.title,
				project: this.project,
				id: v4()
			});
		};

		const doEdit = () => {

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
