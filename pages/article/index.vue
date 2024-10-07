<template>
    <div>
        <Head>
            <Title>{{ blog.title }}</Title>
        </Head>
        <article v-if="Object.keys(blog).length > 0" class="detail-article">
            <div class="art-header">
                <h1>{{ blog.title }}</h1>
                <div class="header-info">
                    <el-icon><ElIconNotebook /></el-icon>
                    <!-- <nuxt-link
                        :to="`/category?categoryId=${blog.categories}`"
                        >{{ blog.category_name }}</nuxt-link
                    > -->
                    {{ blog.category_name }}
                    <el-icon><ElIconCalendar /></el-icon>
                    {{ blog.post_date }}
                    <el-icon><ElIconView /></el-icon>
                    {{ blog.pageviews }}
                    <el-icon><ElIconChatDotSquare /></el-icon>
                    <span>{{ blog.total_comments }}</span>
                </div>
                <div class="header-tag">
                    <el-tag
                        v-for="item in tagData"
                        :key="item.id"
                        @click="jumpTagDetails(item)"
                        >{{ item.name }}</el-tag
                    >
                </div>
                <div class="tag-time">
                    <el-icon><ElIconCalendar /></el-icon>
                    {{ blog.date ? blog.date.split("T")["1"] : "1970-01-01" }}
                </div>
            </div>
            <div id="blog" @click.stop="" v-html="blog.content" />
            <div class="content-footer">
                <p>
                    本文由
                    <nuxt-link to="/">{{
                        blog.author === 1 ? "Hao" : "博主"
                    }}</nuxt-link
                    >创作，转载请注明
                </p>
                <p>
                    最后编辑时间：{{
                        (blog.modified
                            ? blog.modified.split("T")["0"]
                            : "1970-01-01") +
                        " " +
                        (blog.modified
                            ? blog.modified.split("T")["1"]
                            : "00:00:00")
                    }}
                </p>
                <div id="vcomments" />
            </div>
        </article>
        <!-- 骨架屏占位 -->
        <article v-else class="skeleton-wrap detail-article">
            <el-skeleton animated class="skeleton-wrap__item">
                <template #template>
                    <div class="p-[14px]">
                        <el-skeleton-item variant="p" />
                        <div class="flex items-center mt-[50px]">
                            <el-skeleton-item
                                variant="text"
                                class="mr-[16px]"
                                style="width: 15%"
                            />
                            <el-skeleton-item
                                variant="text"
                                class="mr-[16px]"
                                style="width: 15%"
                            />
                            <el-skeleton-item
                                variant="text"
                                class="mr-[16px]"
                                style="width: 5%"
                            />
                            <el-skeleton-item
                                variant="text"
                                style="width: 5%"
                            />
                        </div>
                        <div class="flex justify-end">
                            <el-skeleton-item
                                variant="text"
                                class="mt-[14px] mr-[16px]"
                                style="width: 15%"
                            />
                        </div>
                        <div>
                            <el-skeleton :rows="14" class="mt-[20px]" />
                        </div>
                    </div>
                </template>
            </el-skeleton>
        </article>
    </div>
</template>

<script setup>
const route = useRoute();
const router = useRouter();
const postId = route.query.id;
const blog = ref({});
const tagData = ref([]); // 标签

const initTagData = async (tags) => {
    try {
        if (tags.length > 0) {
            tagData.value = []; //如果tags有内容，清空tagData
            const promises = tags.map(async (item) => {
                const response = await getPostsTagsApi(item);
                return response.data;
            });
            const results = await Promise.all(promises);
            tagData.value = results;
        }
    } catch {
        tagData.value = [];
    }
};
const initPage = () => {
    getPostsDetailsApi(postId).then((res) => {
        res.data.title = res.data.title.rendered;
        res.data.content = res.data.content.rendered;
        res.data.categories = res.data.categories["0"];
        blog.value = res.data;
        initTagData(res.data.tags);
    });
};
initPage();
//跳转到标签分类页
const jumpTagDetails = (item) => {
    router.push({ path: "/tag", query: { tagId: item.id } });
};
</script>

<style lang="less" scoped>
.detail-article {
    min-height: 600px;
}
.skeleton-wrap {
    margin: 0 auto;
    box-sizing: border-box;
    padding-top: 100px;
    &__item {
        box-sizing: border-box;
        overflow: hidden;
    }
}
article {
    animation: fadeIn 0.6s linear;
    max-width: 700px;
    padding: 0 25px 30px;
    margin: 0 auto;
    background-color: #fff;
    position: relative;
    text-align: left;
    font-size: 15px;
    line-height: 32px;

    .art-header {
        padding-top: 100px;
        padding-bottom: 12px;
        border-bottom: 1px dashed #b7b7b7;
        position: relative;

        h1 {
            font-size: 22px;
            color: #222;
            font-weight: 400;
            line-height: 1.8;
        }

        .header-info {
            margin: 12px 0px 0;
            display: flex;
            align-items: center;
            i {
                &:not(:first-child) {
                    margin-left: 12px;
                }

                font-size: 14px;
                margin-top: -2px;
            }
        }
        .header-tag {
            width: 85%;
            margin-top: 14px;
            height: 33px;
            span {
                margin-right: 12px;
            }
        }

        .tag-time {
            position: absolute;
            right: 0;
            bottom: 12px;
            line-height: 14px;
            display: flex;
            align-items: center;

            i {
                font-size: 14px;
                margin-top: -2px;
            }
        }
    }
    .content-footer {
        border-top: 1px solid #e0e0e0;
        padding-top: 26px;
        color: #24292e;
        font-size: 14px;
        text-align: center;

        a {
            border-bottom: 1px solid #ccc;

            &:hover {
                border-bottom: 1px solid #eb5055;
            }
        }
    }
}
#blog {
    padding-top: 15px;
}
.drawerTitle {
    padding: 20px 0 20px 30px;
}
.contentList {
    padding: 0 0 20px 30px;
}
.contentList > a:hover {
    color: #66b1ff !important;
}
</style>
