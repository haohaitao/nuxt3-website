<template>
  <div>
    <p>首页</p>
    <NuxtLink to="/">首页</NuxtLink>
    <NuxtLink style="margin-left: 20px" to="/home">home页</NuxtLink>
    <NuxtLink style="margin-left: 20px" to="/about">关于</NuxtLink>
  </div>
</template>

<script lang="ts" setup>
useSeoMeta({
  title: "首页",
  keywords: "首页关键字",
  description: "首页描述",
});
</script>

<style scoped></style>
