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
  title: "关于页面",
  keywords: "关于页面关键字",
  description: "关于页面描述",
});
</script>

<style scoped></style>
