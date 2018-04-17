export const globalInterceptor = REMOTE_HOST => {
	return {
		request: config => {
			config.url = REMOTE_HOST + config.url;
			return config;
		}
	};
};
