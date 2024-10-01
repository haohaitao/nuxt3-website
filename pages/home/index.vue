<template>
  <div>
    <p>home页</p>
    <NuxtLink to="/">首页</NuxtLink>
    <NuxtLink style="margin-left: 20px" to="/home">home页</NuxtLink>
    <NuxtLink style="margin-left: 20px" to="/about">关于</NuxtLink>
  </div>
</template>

<script lang="ts" setup>
useSeoMeta({
  title: "home页",
  keywords: "home页关键字",
  description: "home页描述",
});
</script>

<style scoped></style>
