interface ApiResponse {
	_data: any;
	status: number;
	headers: any;
}

const fetch = async (url: string, options?: any) => {
	if (!String(url)) {
		console.warn('url is must be string!');
		return;
	}
	const runtimeConfig = useRuntimeConfig();
	const reqUrl = runtimeConfig.app['BASE_URL'] + url;
	return new Promise((resolve, reject) => {
		$fetch(reqUrl, {
			...options,
			onResponse({ response }: { response: ApiResponse }) {
				if (response.status === 200) {
					resolve({
						data: response._data,
						total: response?.headers?.get('x-wp-total'),
					});
				}
			},
			onRequestError({ error }: { error: any }) {
				// Handle the request errors
				if (import.meta.client) {
					ElMessage({
						message: '获取失败，请稍后重试-_-',
						type: 'warning',
					});
				}

				reject(error);
			},
			onResponseError({ response }: { response: ApiResponse }) {
				// Handle the response errors
				if (import.meta.client) {
					ElMessage({
						message: response._data.message || '获取失败，请稍后重试-_-',
						type: 'warning',
					});
				}
				reject(response);
			},
		});
	});
};

export default new (class Http {
	get(url: string, params: any) {
		return fetch(url, { method: 'GET', params });
	}

	post(url: string, body: any) {
		return fetch(url, { method: 'POST', body });
	}
})();
