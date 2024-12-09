<template>
	<header
		class="head-page z-50 h-[4rem] bg-white shadow-md dark:bg-[#212526] transition-transform duration-300 sticky top-0 w-full"
		:class="{
			'overflow-hidden': isOpen,
			'-translate-y-full': isHidden,
			'translate-y-0': !isHidden,
		}"
	>
		<div class="container">
			<!-- 移动端菜单 -->
			<div class="nav-coll-menu" :class="{ 'nav-coll-menu-add': isVisibleNavFar }">
				<span class="icon-menu cross" :class="{ 'icon-menu-close': isVisibleNavFar }">
					<span class="middle" />
				</span>
				<span class="click-fun" @click="closeCollMenu" />
				<ul class="nav-far" :class="{ 'visible-nav-far': isVisibleNavFar }">
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
			<div class="home-right mr-[38px] cursor-pointer flex gap-3.5 items-center">
				<Icon
					v-if="currentTheme === 'dark'"
					icon="line-md:sunny-outline-to-moon-alt-loop-transition"
					class="text-[24px] text-[#ffffff]"
					@click="handleChangeTheme"
				></Icon>
				<Icon v-else icon="line-md:sunny-loop" class="text-[24px] text-[#000000]" @click="handleChangeTheme"></Icon>

				<Nuxt-Link to="https://github.com/haohaitao/nuxt3-website" target="_blank" class="header-github">
					<Icon
						icon="codicon:github-inverted"
						:class="{
							'text-[24px]': true,
							'text-[#ffffff]': currentTheme === 'dark',
							'text-[#000000]': currentTheme !== 'dark',
						}"
					/>
				</Nuxt-Link>
			</div>
		</div>
	</header>
</template>

<script setup>
import gsap from 'gsap';
import { useDark, useToggle } from '@vueuse/core';
import { Icon } from '@iconify/vue';

const isDark = useDark({
	storageKey: 'theme-color',
	valueDark: 'dark',
	valueLight: 'light',
});
const toggleDark = useToggle(isDark);
const currentTheme = ref('');
const route = useRoute();
const isVisibleNavFar = ref(false);
const isOpen = ref(false);
const isHidden = ref(false);
const lastScrollPosition = ref(0);

const closeCollMenu = () => {
	isVisibleNavFar.value = !isVisibleNavFar.value;
};

watch(
	() => route.fullPath,
	() => {
		isVisibleNavFar.value = false;
	},
);

const initDefaultAnimation = () => {
	const pageTitle = document.getElementById('name');
	const textContent = pageTitle.textContent;
	// 创建一个新的容器来存放拆分后的字符
	const container = document.createElement('div');
	container.style = 'display:flex;color:#d7385e;font-weight:bold;';
	// 清空原始文本
	pageTitle.innerHTML = '';
	// 拆分文本并创建 DOM 元素
	for (let i = 0; i < textContent.length; i++) {
		const char = textContent[i];
		const div = document.createElement('div');
		div.textContent = char;
		container.appendChild(div);
	}
	// 将新容器插入到原始元素的位置
	pageTitle.appendChild(container);
	// 动画处理
	const chars = container.querySelectorAll('div');
	// gsap.to triggers animations
	gsap.to(
		// The array of letters
		chars,
		// Animation duration in seconds
		0.7,
		{
			// Translate on X axis -40 pixels
			x: '15',
			// Smooth out the stop/start with easeInOut
			ease: 'power2.inOut',
			// Reverse the animation back to start
			yoyo: true,
			// Delay the next item in seconds
			stagger: 0.08,
			// Infinite repeat
			repeat: -1,
		},
	);
};
const handleChangeTheme = () => {
	// 获取到 transition API 实例
	document.startViewTransition(() => {
		toggleDark();
		nextTick(() => {
			document.querySelector('html').setAttribute('data-theme', `${isDark.value ? 'dark' : 'light'}`);
			currentTheme.value = localStorage.getItem('theme-color') || '';
		});
	});
};

const handleScroll = () => {
	const currentScrollPosition = window.scrollY || document.documentElement.scrollTop;
	if (currentScrollPosition < 0) {
		return;
	}
	// 向下滚动
	if (currentScrollPosition > lastScrollPosition.value) {
		isHidden.value = true;
	} else {
		// 向上滚动
		isHidden.value = false;
	}
	lastScrollPosition.value = currentScrollPosition;
};

onMounted(() => {
	nextTick(() => {
		initDefaultAnimation();
		currentTheme.value = localStorage.getItem('theme-color') || '';
	});
	// 添加滚动事件监听
	window.addEventListener('scroll', handleScroll);
});

onUnmounted(() => {
	// 移除滚动事件监听
	window.removeEventListener('scroll', handleScroll);
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
	.nav-coll-menu-add {
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
				background: var(--text-color) !important;
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
				content: '';
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
				background: var(--text-color);
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
