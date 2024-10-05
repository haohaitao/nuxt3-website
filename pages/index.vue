<template>
    <div class="animated bounce">
        <main>
            <p data-allow-mismatch>
                今天是{{ time }}，欢迎来自【{{ city }}】的朋友！
            </p>
            <SectionArticle :blog-list="blogList" />
            <div class="pagination-wrap" data-allow-mismatch>
                <el-pagination
                    :hide-on-single-page="true"
                    :total="total"
                    :page-size="15"
                    size="small"
                    background
                    layout="prev, pager, next"
                    @current-change="handleCurrentChange"
                />
            </div>
        </main>
    </div>
</template>

<script setup>
import { ref } from "vue";
import dayjs from "dayjs";

const blogList = ref([]); //存接口返回的数据
const total = ref(0); //返回数据的总条数
const currentPage = ref(1); //默认页码
const city = ref("获取中.."); //定位城市
const time = ref(""); //时间

//页码改变触发事件
const handleCurrentChange = (page) => {
    currentPage.value = page;
    initPage();
};
const showCityInfo = () => {
    //实例化城市查询类
    if (import.meta.client) {
        const citySearch = new AMap.CitySearch();
        //自动获取用户IP，返回当前城市
        citySearch.getLocalCity((status, result) => {
            if (status === "complete" && result.info === "OK") {
                if (result && result.city && result.bounds) {
                    const cityInfo = result.city;
                    city.value = cityInfo;
                }
            } else {
                sessionStorage.setItem("err", result.info);
            }
        });
    }
};

const initPage = async () => {
    showCityInfo(); //获取城市
    const currentTime = dayjs().format("YYYY-MM-DD");
    time.value = currentTime;
    const params = {
        per_page: 15,
        page: currentPage.value,
    };
    getListApi(params).then((res) => {
        res.data.forEach((item) => {
            item.title = item.title.rendered;
            item.excerpt = item.excerpt.rendered;
        });
        blogList.value = res.data;
        total.value = Number(res.total);
        import.meta.client && window.scrollTo(0, 0);
    });
};
initPage();
</script>

<style lang="less" scoped>
main {
    max-width: 1080px;
    margin: 90px auto 0;
    text-align: center;
}
.pagination-wrap {
    clear: both;
    margin: 30px 0;
    display: flex;
    justify-content: center;
}
</style>
