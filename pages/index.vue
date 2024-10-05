<template>
    <div>
        <main>
            <p>首页</p>
            <NuxtLink to="/">首页</NuxtLink>
            <NuxtLink style="margin-left: 20px" to="/home">home页</NuxtLink>
            <NuxtLink style="margin-left: 20px" to="/about">关于</NuxtLink>
        </main>
    </div>
</template>

<script lang="ts" setup>
useSeoMeta({
    title: "首页",
    keywords: "首页关键字",
    description: "首页描述",
});
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
