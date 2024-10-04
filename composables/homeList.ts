import Http from "~/api/request";

export const getListApi = (params: { per_page: number }) => {
  return Http.get("/wp-json/wp/v2/posts", params);
};
