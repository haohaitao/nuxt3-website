import Http from "~/api/request";

/**
 * 获取文章列表
 * @param params.per_page - 每个页面的帖子数量， WordPress API允许的最大值为100
 * @param params.page - 请求的页面编号，用于分页
 */
export const getListApi = (params: { per_page: number; page: number }) => {
    return Http.get("/wp-json/wp/v2/posts", params);
};

/**
 * 根据ID获取文章详情
 * @param id 文章的唯一标识符，类型为字符串
 */
export const getPostsDetailsApi = (id: string) => {
    return Http.get(`/wp-json/wp/v2/posts/${id}`, {});
};

/**
 * 根据ID获取文章标签
 * @param id 标签的唯一标识符，由WordPress后台设置或通过其它方式指定
 */
export const getPostsTagsApi = (id: number) => {
    return Http.get(`/wp-json/wp/v2/tags/${id}`, {});
};
