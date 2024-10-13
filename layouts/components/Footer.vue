<template>
    <footer>
        <div class="container">
            <!-- 需要用到的竖线使用全角竖线｜ -->
            <div class="flex items-center justify-center">
                <a
                    style="color: var(--text-color)"
                    href="http://www.beian.miit.gov.cn/"
                    target="_blank"
                    >豫ICP备17023037号-1</a
                >
                <!-- 移动端显示 -->
                <el-backtop class="Mobile_goback">
                    <div>返回顶部</div>
                </el-backtop>
            </div>
            <div class="link-git flex items-center justify-center">
                <span class="name" style="color: var(--text-color)">
                    Copyright © 2019-2024&nbsp;
                    <a target="_blank" style="color: var(--text-color)" href="#"
                        >版权所有</a
                    >&nbsp;
                </span>
                <span class="footer-github relative top-[2px]">
                    <Nuxt-Link
                        to="https://github.com/haohaitao/nuxt3-website"
                        target="_blank"
                    >
                        <i
                            class="el-icon"
                            style="font-size: 24px"
                            data-v-87052479=""
                            ><!--[--><svg
                                preserveAspectRatio="xMidYMid meet"
                                viewBox="0 0 24 24"
                                width="1.2em"
                                height="1.2em"
                                data-v-87052479=""
                            >
                                <path
                                    fill="currentColor"
                                    d="M12 2C6.475 2 2 6.475 2 12a9.994 9.994 0 0 0 6.838 9.488c.5.087.687-.213.687-.476c0-.237-.013-1.024-.013-1.862c-2.512.463-3.162-.612-3.362-1.175c-.113-.288-.6-1.175-1.025-1.413c-.35-.187-.85-.65-.013-.662c.788-.013 1.35.725 1.538 1.025c.9 1.512 2.338 1.087 2.912.825c.088-.65.35-1.087.638-1.337c-2.225-.25-4.55-1.113-4.55-4.938c0-1.088.387-1.987 1.025-2.688c-.1-.25-.45-1.275.1-2.65c0 0 .837-.262 2.75 1.026a9.28 9.28 0 0 1 2.5-.338c.85 0 1.7.112 2.5.337c1.912-1.3 2.75-1.024 2.75-1.024c.55 1.375.2 2.4.1 2.65c.637.7 1.025 1.587 1.025 2.687c0 3.838-2.337 4.688-4.562 4.938c.362.312.675.912.675 1.85c0 1.337-.013 2.412-.013 2.75c0 .262.188.574.688.474A10.016 10.016 0 0 0 22 12c0-5.525-4.475-10-10-10z"
                                ></path></svg
                            ><!--]--></i
                        >
                    </Nuxt-Link>
                </span>
            </div>
            <!-- pc端显示 -->
            <el-backtop :right="80" :bottom="150" class="desktop_goback">
                <div class="backTop-icon">▲</div>
            </el-backtop>
        </div>
    </footer>
</template>

<script setup>
if (import.meta.client) {
    // eslint-disable-next-line no-console
    console.log(
        "%cHello world! %c Copyright © 2024",
        " text-shadow: 0 1px 0 #ccc,0 2px 0 #c9c9c9,0 3px 0 #bbb,0 4px 0 #b9b9b9,0 5px 0 #aaa,0 6px 1px rgba(0,0,0,.1),0 0 5px rgba(0,0,0,.1),0 1px 3px rgba(0,0,0,.3),0 3px 5px rgba(0,0,0,.2),0 5px 10px rgba(0,0,0,.25),0 10px 10px rgba(0,0,0,.2),0 20px 20px rgba(0,0,0,.15);font-size:2em",
        "font-size:12px;color:#999999;"
    );
}
</script>

<style lang="less" scoped>
footer {
    padding-top: 50px;
    height: 120px;
    background: var(--bg-color);
    color: var(--text-color);

    a {
        color: #666;
    }
    .container {
        width: 1080px;
        max-width: 100%;
        margin: 0 auto;
        height: 100%;
        text-align: center;
        font-size: 14px;
        position: relative;
        line-height: 26px;
        padding-bottom: 30px;
    }
    .backTop-icon {
        height: 100%;
        width: 100%;
        background-color: var(--bg-color);
        box-shadow: 0 0 6px rgba(0, 0, 0, 0.12);
        text-align: center;
        line-height: 40px;
        color: var(--text-color);
    }
}
</style>
