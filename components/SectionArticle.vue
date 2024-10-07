<template>
    <section class="section-article" data-allow-mismatch>
        <article v-for="(val, index) in blogShowList" :key="index">
            <div class="bg-container">
                <div
                    data-allow-mismatch
                    class="bg-img"
                    :style="val.content_first_image ? setLink(val) : ''"
                />
            </div>
            <div data-allow-mismatch class="bg-cover" @click="jumpDetail(val)">
                <p v-html="val.excerpt" />
            </div>
            <div class="other-bgCover right-bgCover" />
            <div class="other-bgCover" />
            <div class="desc">
                <p data-allow-mismatch class="title" :title="val.title">
                    {{ val.title }}
                </p>
                <div class="desc-bottom">
                    <div
                        data-allow-mismatch
                        :class="{ 'd-detail': true, 'hidden-detail': !val.id }"
                    >
                        <el-icon><ElIconTimer /></el-icon>
                        <span
                            data-allow-mismatch
                            class="text-[14px] mr-[14px]"
                            >{{ val.post_date }}</span
                        >
                        <el-icon><ElIconView /></el-icon>
                        <span
                            data-allow-mismatch
                            class="text-[14px] mr-[14px]"
                            >{{ val.pageviews }}</span
                        >
                        <el-icon><ElIconChatDotSquare /></el-icon>
                        <span data-allow-mismatch class="text-[14px]">{{
                            val.total_comments
                        }}</span>
                    </div>
                    <nuxt-link to="/">
                        <el-tooltip
                            :content="val.category_name || '个人博客'"
                            class="item"
                            effect="dark"
                            placement="top-end"
                        >
                            <div
                                data-allow-mismatch
                                class="item-icon"
                                :style="{
                                    backgroundPosition: `0 ${
                                        -Math.floor(Math.random() * 4 + 1) * 70
                                    }px`,
                                }"
                            />
                        </el-tooltip>
                    </nuxt-link>
                </div>
            </div>
        </article>
        <!-- 骨架屏占位 -->
        <div v-if="blogShowList.length === 0" class="skeleton-wrap">
            <el-skeleton
                v-for="item in 15"
                :key="item"
                animated
                class="skeleton-wrap__item"
            >
                <template #template>
                    <el-skeleton-item
                        variant="image"
                        style="width: 280px; height: 230px"
                    />
                    <div class="p-[14px]">
                        <el-skeleton-item variant="p" />
                        <div
                            class="flex items-center justify-between mt-[50px]"
                        >
                            <el-skeleton-item
                                variant="text"
                                style="width: 46%"
                                class="mr-[16px]"
                            />
                            <el-skeleton-item
                                variant="text"
                                style="width: 30%"
                                class="mr-[16px]"
                            />
                            <el-skeleton-item
                                variant="text"
                                style="width: 24%"
                            />
                        </div>
                    </div>
                </template>
            </el-skeleton>
        </div>
    </section>
</template>

<script setup>
const initSeoConfig = useSeoConfigStore();
const router = useRouter();
const props = defineProps({
    blogList: {
        //是否显示选择框
        type: Array,
        default: () => {
            return [];
        },
    },
});

const blogShowList = ref([]); //列表数据

const setLink = computed(() => (val) => {
    return val.content_first_image
        ? `background: url(${val.content_first_image}) 100% 100% / 100% 100%`
        : "";
});

const initPage = () => {
    if (props.blogList.length > 0) {
        blogShowList.value = props.blogList;
    }
};
initPage();

const jumpDetail = (val) => {
    initSeoConfig.updateSeoConfig(val);
    router.push(`/article?id=${val.id}`);
};

watch(
    () => props.blogList,
    (newVal) => {
        blogShowList.value = newVal;
    }
);
</script>

<style lang="less" scoped>
section {
    animation: fadeIn 0.6s linear;
    max-width: 960px;
    margin: 0 auto;
    box-sizing: border-box;

    article {
        width: 280px;
        height: 340px;
        float: left;
        position: relative;
        border-radius: 5px;
        background: rgba(255, 255, 255, 0.5);
        box-sizing: border-box;
        margin: 20px;
        box-shadow: 0 2px 9px 0 rgba(0, 0, 0, 0.08);
        overflow: hidden;
        &:hover {
            box-shadow: 1px 2px 12px 1px rgba(0, 0, 0, 0.15);
            background: #fff;

            .bg-img {
                filter: blur(3px);
                transform: scale(1.1);
            }

            .bg-cover {
                background-color: rgba(0, 0, 0, 0.5);
                transition: 0.5s;
                p {
                    transition: 0.5s;
                    margin-top: 0px;
                    opacity: 1;
                }
            }
        }

        .top-icon {
            width: 46px;
            opacity: 0.86;
            height: 46px;
            position: absolute;
            left: -9px;
            top: -4px;
            text-align: center;
            line-height: 44px;
            color: #fff;
            background: url("../assets/imgs/tag.png");
            background-size: cover;

            i {
                font-size: 19px;
            }
        }

        .bg-container {
            &::before {
                content: "Loading...";
                position: absolute;
                border-radius: 5px 5px 0 0;
                width: 100%;
                left: 0;
                background-color: rgba(169, 169, 169, 0.75);
                text-align: center;
                line-height: 230px;
                font-size: 26px;
                color: #333333;
                z-index: -1;
            }

            &::after {
                content: "";
                position: absolute;
                border-radius: 5px 5px 0 0;
                width: 100%;
                left: 0;
                background-color: rgba(255, 255, 255, 0);
                line-height: 230px;
                z-index: -1;
            }

            .bg-img {
                transition: all 0.5s ease;
                height: 230px;
                border-radius: 5px 5px 0 0;
            }
        }

        .bg-cover {
            position: absolute;
            top: 0;
            overflow: hidden;
            width: 100%;
            height: 100%;
            padding: 40px 28px;
            box-sizing: border-box;

            p {
                font-size: 14px;
                margin: 0;
                margin-top: 26px;
                padding: 0;
                display: -webkit-box;
                -webkit-box-orient: vertical;
                -webkit-line-clamp: 4;
                overflow: hidden;
                opacity: 0;
                line-height: 26px;
                color: #fff;
            }
        }

        .other-bgCover {
            position: absolute;
            z-index: 0;
            right: 0;
            bottom: 1px;
            left: 0;
            width: 110%;
            min-height: 100px;
            transform: rotate(5deg) translate(-10px, -20px);
            background-color: #fff;
        }
        .right-bgCover {
            transform: rotate(-10deg) translate(10px, -30px);
            opacity: 0.7;
            background-color: rgba(0, 0, 0, 0.5) !important;
        }

        .desc {
            width: 100%;
            height: 110px;
            background: #fff;
            position: relative;
            padding: 7px 15px 10px;
            box-sizing: border-box;
            text-align: left;

            .title {
                color: #000;
                font-size: 16px;
                display: -webkit-inline-box;
                -webkit-box-orient: vertical;
                -webkit-line-clamp: 2;
                overflow: hidden;
                &:hover {
                    color: #ff8b18;
                }
            }

            .desc-bottom {
                position: absolute;
                right: 0;
                bottom: 0;
                width: 100%;
                padding: 0 15px 10px;
                text-align: right;

                .d-detail {
                    position: absolute;
                    bottom: 10px;
                    padding: 0px 20px;
                    display: flex;
                    align-items: center;
                }
                .hidden-detail {
                    span {
                        visibility: hidden;
                    }
                }

                .item-icon {
                    background: url(~/assets/imgs/bg-ico.png) no-repeat;
                    height: 37px;
                    width: 36px;
                    float: right;
                    border-radius: 50%;
                    background-size: cover;
                }
            }
        }
    }

    .skeleton-wrap {
        max-width: 960px;
        margin: 0 auto;
        box-sizing: border-box;
        &__item {
            width: 280px;
            height: 340px;
            float: left;
            position: relative;
            border-radius: 5px;
            background: rgba(255, 255, 255, 0.5);
            box-sizing: border-box;
            margin: 20px;
            box-shadow: 0 2px 9px 0 rgba(0, 0, 0, 0.08);
            overflow: hidden;
        }
    }
}
</style>
