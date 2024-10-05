import { useRuntimeConfig } from "#imports";

interface ApiResponse {
    _data: any;
    status: number;
    headers: any;
}

const fetch = async (url: string | string[], options?: any) => {
    if (!String(url)) {
        console.warn("url is must be string!");
        return;
    }
    const $config = useRuntimeConfig();
    const reqUrl =
        url.indexOf("http") > -1 ? url : $config.app["BASE_URL"] + url;
    return new Promise((resolve, reject) => {
        $fetch(reqUrl, {
            ...options,
            onResponse({ response }: { response: ApiResponse }) {
                if (response.status === 200) {
                    resolve({
                        data: response._data,
                        total: response.headers.get("x-wp-total"),
                    });
                }
            },
            onRequestError({ error }: { error: any }) {
                // Handle the request errors
                ElMessage({
                    message: "获取失败，请稍后重试-_-",
                    type: "warning",
                });
                reject(error);
            },
            onResponseError({ response }: { response: ApiResponse }) {
                // Handle the response errors
                ElMessage({
                    message:
                        response._data.message || "获取失败，请稍后重试-_-",
                    type: "warning",
                });
                reject(response);
            },
        });
    });
};

export default new (class Http {
    get(url: string, params: any) {
        return fetch(url, { method: "GET", params });
    }

    post(url: string, body: any) {
        return fetch(url, { method: "POST", body });
    }
})();
