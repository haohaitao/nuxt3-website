# 关于

> Nuxt 3 构建的个人网站

## 效果

### 首页

![首页](https://s2.loli.net/2024/10/14/zgehSPt527RxmKM.png)

### 详情

![文章详情](https://s2.loli.net/2024/10/14/wohXZJK9BL4c7Hj.png)

## 开发

> [!TIP]
> Node version >= 18

启动开发服务器： `http://localhost:3000`

```bash
# npm
npm install
npm run dev

# pnpm
pnpm install
pnpm run dev

# yarn
yarn install
yarn dev
```

## 生产

构建用于生产的应用程序：

```bash
# npm
npm run build

# pnpm
pnpm run build

# yarn
yarn build

# bun
bun run build
```

本地预览生产构建：

```bash
# npm
npm run preview

# pnpm
pnpm run preview

# yarn
yarn preview

# bun
bun run preview
```

## docker 部署

```bash
# 构建镜像
docker build -t my-nuxt-app .
# 运行容器
docker run -d -p 3000:3000 --name my-running-nuxt-app my-nuxt-app
# 查看在运行的容器
docker ps
# 查看所有容器
docker ps -a
```

## License

[MIT](./LICENSE) © haohaitao
