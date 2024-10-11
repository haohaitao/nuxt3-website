<template>
    <div v-if="content" class="wrapper animated bounceInDown">
        <div class="content" v-html="content"></div>
    </div>
    <!-- 骨架屏占位 -->
    <div v-else class="skeleton-wrap">
        <el-skeleton :key="item" animated class="skeleton-wrap__item">
            <template #template>
                <el-skeleton-item variant="p" style="height: 34px" />
                <el-skeleton-item
                    variant="image"
                    style="width: 880px; height: 495px"
                />
                <el-skeleton-item
                    variant="p"
                    class="mt-[10px] mb-[10px]"
                    style="height: 34px; width: 200px; display: flex"
                />
                <el-skeleton-item variant="p" style="height: 34px" />
            </template>
        </el-skeleton>
    </div>
</template>

<script setup>
const content = ref("");

getBingPhotoApi().then((res) => {
    content.value = res.data?.content?.rendered;
    if (import.meta.client) {
        window.scrollTo({ top: 0 });
    }
});

useSeoMeta({
    title: "每日一图",
    keywords: "必应，必应每日一图，好看的图片",
    description: "必应每天自动更新的图片，包括图片故事",
});
</script>

<style lang="less" scoped>
.wrapper {
    margin: 100px auto auto;
    max-width: 900px;
    padding: 0 10px 10px 10px;
    .content {
        text-align: left;
        line-height: 30px;
        min-height: 600px;
        & p:nth-child(1) {
            text-align: center;
        }
    }
}
.skeleton-wrap {
    max-width: 960px;
    margin: 0 auto;
    box-sizing: border-box;
    padding-top: 100px;
    &__item {
        width: 880px;
        border-radius: 5px;
        box-sizing: border-box;
        margin: 20px;
        overflow: hidden;
    }
}
:deep(h2) {
    font-size: 20px;
    margin-bottom: 10px;
}
:deep(fieldset) {
    padding: 5px 15px;
    margin: 0 0 10px 0;
    border: 1px solid #ddd;
    font-size: 14px;
}
</style>
