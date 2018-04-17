export const httpProvider = $httpProvider => {
	$httpProvider.interceptors.push('globalInterceptor');
};
