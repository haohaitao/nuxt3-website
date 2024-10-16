import Http from '~/api/request';

interface ApiResponse {
	data: any[];
}
export default defineSitemapEventHandler(async () => {
	try {
		const [res1, res2]: [ApiResponse, ApiResponse] = await Promise.all([
			Http.get(`/wp-json/wp/v2/posts`, { per_page: 100, page: 1 }).then((data) => data as ApiResponse),
			Http.get(`/wp-json/wp/v2/posts`, { per_page: 100, page: 2 }).then((data) => data as ApiResponse),
		]);
		const articleData1 = res1.data.length
			? res1.data.map((item: any) => {
					return { loc: `/article?id=${item.id}` };
				})
			: [];
		const articleData2 = res2.data.length
			? res2.data.map((item: any) => {
					return { loc: `/article?id=${item.id}` };
				})
			: [];
		return [...articleData1, ...articleData2];
	} catch {
		return [];
	}
});
