<template>
    <header class="head-page">
        <div class="container">
            <!-- 移动端菜单 -->
            <div
                class="nav-coll-menu"
                :class="{ 'nav-coll-menu-padd': isVisibleNavFar }"
            >
                <span
                    class="icon-menu cross"
                    :class="{ 'icon-menu-close': isVisibleNavFar }"
                >
                    <span class="middle" />
                </span>
                <span class="click-fun" @click="closeCollMenu" />
                <ul
                    class="nav-far"
                    :class="{ 'visible-nav-far': isVisibleNavFar }"
                >
                    <nuxt-link to="/">
                        <li>首页</li>
                    </nuxt-link>
                    <nuxt-link to="/everyday">
                        <li>每日一图</li>
                    </nuxt-link>
                    <nuxt-link to="/about">
                        <li>关于</li>
                    </nuxt-link>
                </ul>
            </div>
            <!-- 移动端菜单 end -->
            <div class="home-left">
                <div class="page-name">
                    <nuxt-link id="name" to="/">Hao</nuxt-link>
                </div>
            </div>
            <div class="nav">
                <ul class="nav-far">
                    <nuxt-link to="/">
                        <li>首页</li>
                    </nuxt-link>
                    <nuxt-link to="/everyday">
                        <li>每日一图</li>
                    </nuxt-link>
                    <nuxt-link to="/about">
                        <li>关于</li>
                    </nuxt-link>
                </ul>
            </div>
            <div
                ref="switchRef"
                class="home-right mr-[38px] cursor-pointer flex gap-3.5"
            >
                <el-icon
                    v-if="currentTheme === 'dark'"
                    color="#ffffff"
                    :size="24"
                    @click="handleChangeTheme"
                >
                    <Moon />
                </el-icon>
                <el-icon
                    v-else
                    color="#000000"
                    :size="24"
                    @click="handleChangeTheme"
                >
                    <Sunny />
                </el-icon>
                <Nuxt-Link
                    to="https://github.com/haohaitao/nuxt3-website"
                    target="_blank"
                    class="header-github"
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
            </div>
        </div>
    </header>
</template>

<script setup>
import gsap from "gsap";
import { Sunny, Moon } from "@element-plus/icons-vue";
import { useDark, useToggle } from "@vueuse/core";

const isDark = useDark({
    storageKey: "theme-color",
    valueDark: "dark",
    valueLight: "light",
});
const toggleDark = useToggle(isDark);
const currentTheme = ref("");
const route = useRoute();
const switchRef = ref();
const isVisibleNavFar = ref(false);
const closeCollMenu = () => {
    isVisibleNavFar.value = !isVisibleNavFar.value;
};

watch(
    () => route.fullPath,
    () => {
        isVisibleNavFar.value = false;
    }
);

const initDefaultAnimation = () => {
    const pageTitle = document.getElementById("name");
    const textContent = pageTitle.textContent;
    // 创建一个新的容器来存放拆分后的字符
    const container = document.createElement("div");
    container.style = "display:flex;color:#d7385e;font-weight:bold;";
    // 清空原始文本
    pageTitle.innerHTML = "";
    // 拆分文本并创建 DOM 元素
    for (let i = 0; i < textContent.length; i++) {
        const char = textContent[i];
        const div = document.createElement("div");
        div.textContent = char;
        container.appendChild(div);
    }
    // 将新容器插入到原始元素的位置
    pageTitle.appendChild(container);
    // 动画处理
    const chars = container.querySelectorAll("div");
    // gsap.to triggers animations
    gsap.to(
        // The array of letters
        chars,
        // Animation duration in seconds
        0.7,
        {
            // Translate on X axis -40 pixels
            x: "15",
            // Smooth out the stop/start with easeInOut
            ease: "power2.inOut",
            // Reverse the animation back to start
            yoyo: true,
            // Delay the next item in seconds
            stagger: 0.08,
            // Infinite repeat
            repeat: -1,
        }
    );
};
const handleChangeTheme = () => {
    const rect = switchRef.value.getBoundingClientRect();
    const position = {
        clientY: rect.top + 10,
        clientX: rect.left + 20,
    };
    // 获取到 transition API 实例
    const transition = document.startViewTransition(() => {
        toggleDark();
    });

    // // 在 transition.ready 的 Promise 完成后，执行自定义动画
    transition.ready.then(() => {
        // 由于我们要从鼠标点击的位置开始做动画，所以我们需要先获取到鼠标的位置
        const clientX = position.clientX;
        const clientY = position.clientY;
        // 计算半径，以鼠标点击的位置为圆心，到四个角的距离中最大的那个作为半径
        const radius = Math.hypot(
            Math.max(clientX, innerWidth - clientX),
            Math.max(clientY, innerHeight - clientY)
        );
        const clipPath = [
            `circle(0% at ${clientX}px ${clientY}px)`,
            `circle(${radius}px at ${clientX}px ${clientY}px)`,
        ];
        const isDark = document.documentElement.classList.contains("dark");
        // 自定义动画
        document.documentElement.animate(
            {
                // 如果要切换到暗色主题，我们在过渡的时候从半径 100% 的圆开始，到 0% 的圆结束
                clipPath: isDark ? clipPath.reverse() : clipPath,
            },
            {
                duration: 500,
                // 如果要切换到暗色主题，我们应该裁剪 view-transition-old(root) 的内容
                pseudoElement: isDark
                    ? "::view-transition-old(root)"
                    : "::view-transition-new(root)",
            }
        );
        currentTheme.value = localStorage.getItem("theme-color") || "";
    });
};
onMounted(() => {
    nextTick(() => {
        initDefaultAnimation();
        currentTheme.value = localStorage.getItem("theme-color") || "";
    });
});
</script>

<style lang="less" scoped>
header {
    background: var(--bg-color);
    color: var(--text-color);
    width: 100%;
    height: 70px;
    position: fixed;
    top: 0;
    z-index: 1;
    box-shadow: 0 1px 5px rgba(0, 0, 0, 0.1);
    .container {
        width: 1080px;
        max-width: 100%;
        margin: 0 auto;
        height: 100%;
        display: flex;
        justify-content: space-between;
        align-items: center;
        color: #3c3c3c;
        a {
            color: #3c3c3c;
            text-decoration: none;
        }

        .home-left {
            height: 100%;
            line-height: 70px;
            font-size: 24px;
            .page-name {
                display: inline-flex;
                align-items: center;
            }
            a {
                font-size: 20px;
                position: relative;
                z-index: 1;
                margin-left: 10px;
            }
        }
        .nav {
            height: 100%;
            line-height: 70px;
            font-size: 14px;
            position: relative;

            .nav-far {
                display: flex;
                align-items: center;
                li {
                    position: relative;
                    margin: 0 16px;
                    list-style: none;
                    color: var(--text-color);
                }
            }
        }
    }
    .nav-coll-menu-padd {
        padding-bottom: 29px !important;
    }
    /* 小菜单 */
    .nav-coll-menu {
        width: 20px;
        cursor: url(../assets/pic/cursor.cur), pointer;
        z-index: 1;
        display: none;
        height: 16px;
        padding: 10px;
        box-sizing: content-box;

        .click-fun {
            width: 40px;
            height: 36px;
            position: absolute;
            top: 0;
            left: 0;
        }

        .icon-menu-close {
            transform: rotateZ(360deg);

            &::before {
                top: 7px !important;
                transform: rotate(45deg) !important;
                background: #313131 !important;
            }
            &::after {
                bottom: 7px !important;
                transform: rotate(135deg) !important;
                background: #eb5055 !important;
            }
            .middle {
                opacity: 0;
            }
        }

        .icon-menu {
            position: relative;
            display: inline-block;
            width: 10px;
            height: 16px;
            transition: all 0.4s ease-in-out;
            // transition-timing-function: cubic-bezier(0.61, 0.04, 0.17, 1.32);

            &::before,
            &::after {
                position: absolute;
                width: 15px;
                height: 2px;
                content: "";
                transition: all 0.4s ease-in-out;
                transform-origin: 50% 50% 0;
                background: #ff0000;
            }
            &::before {
                top: 0;
            }
            &::after {
                bottom: 0;
            }

            .middle {
                position: absolute;
                top: 50%;
                display: inline-block;
                width: 20px;
                height: 2px;
                margin-top: -1px;
                transition: all 0.4s ease-in-out;
                background: #313131;
            }
        }

        .visible-nav-far {
            visibility: visible !important;
            margin-top: 24px !important;
            opacity: 0.96 !important;
        }
        .nav-far {
            opacity: 0;
            transition: 0.4s;
            visibility: hidden;
            width: 130px;
            margin-top: 0;
            box-shadow: 0 0 4px 0 #d4d4d4;
            background: var(--bg-color);
            font-size: 14px;
            padding-left: 0;
            li {
                position: relative;
                padding: 0 22px;
                line-height: 50px;
                transition: 0.4s;
                list-style: none;
                color: var(--text-color);
                &:hover {
                    transition: 0.4s;
                    padding: 0 32px;
                    color: #eb5055;
                }

                i {
                    font-size: 16px;
                    margin-top: -3px;
                }

                &.sub-item {
                    &:hover > .nav-child {
                        visibility: visible;
                        opacity: 0.98;
                        top: 100%;
                        padding: 0 20px;
                        color: #3c3c3c;
                    }
                    .nav-child {
                        left: 60px;
                        z-index: 1501;
                        visibility: hidden;
                        background: rgba(255, 255, 255, 0.94);
                        opacity: 0;
                        top: 38px;
                        position: absolute;
                        box-shadow: 0 0 4px 0 #d4d4d4;
                        transition: all 0.3s ease-in-out;
                        li {
                            padding: 0;
                            float: none;
                            margin: 0;

                            a {
                                padding: 15px 22px;
                                width: 130px;
                                display: block;
                                height: 50px;
                                line-height: 20px;
                                transition: 0.4s;

                                &:hover {
                                    padding-left: 32px;
                                }
                            }
                        }
                    }
                }
            }
        }
    }
}

:deep(.el-dropdown) {
    display: block !important;
}
</style>
