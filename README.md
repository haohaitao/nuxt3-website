# 关于

> Nuxt 3 构建的个人网站

# 目录结构

```
├── Dockerfile
├── LICENSE
├── README.md
├── api
│   └── request.ts
├── app.vue
├── assets
│   ├── animate.css
│   ├── cur
│   │   ├── cursor.cur
│   │   └── pointer.cur
│   ├── highlight.css
│   ├── imgs
│   │   ├── beast-404.png
│   │   ├── beast-404_LE.png
│   │   ├── beast-404_RE.png
│   │   ├── category.jpg
│   │   └── tag.png
│   └── themes.css
├── components
│   └── SectionArticle.vue
├── composables
│   ├── index.ts
│   └── queryData.ts
├── eslint.config.mjs
├── layouts
│   ├── components
│   │   ├── Footer.vue
│   │   └── Header.vue
│   └── default.vue
├── nuxt.config.ts
├── package-lock.json
├── package.json
├── pages
│   ├── [...404].vue
│   ├── about
│   │   └── index.vue
│   ├── article
│   │   └── index.vue
│   ├── everyday
│   │   └── index.vue
│   └── index.vue
├── public
│   ├── favicon.ico
│   └── robots.txt
├── server
│   └── tsconfig.json
├── site.config.ts
├── stores
│   └── seoConfig.ts
└── tsconfig.json
```

## 运行

Make sure to install the dependencies:

```bash
# npm
npm install

# pnpm
pnpm install

# yarn
yarn install

# bun
bun install
```

## 启动服务

Start the development server on `http://localhost:3000`:

```bash
# npm
npm run dev

# pnpm
pnpm run dev

# yarn
yarn dev

# bun
bun run dev
```

## 生产

Build the application for production:

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

Locally preview production build:

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
