<template>
    <div>
        <p>关于页面</p>
        <NuxtLink to="/">首页</NuxtLink>
        <NuxtLink style="margin-left: 20px" to="/home">home页</NuxtLink>
        <NuxtLink style="margin-left: 20px" to="/about">关于</NuxtLink>
    </div>
</template>

<script lang="ts" setup>
useSeoMeta({
    title: "关于",
});
</script>

<style scoped></style>
