# About

> Personal website built by Nuxt 3

English | [简体中文](README.zh-CN.md)

## effect

### Home page

![Home page](https://s2.loli.net/2024/10/14/zgehSPt527RxmKM.png)

### Article details

![Article details](https://s2.loli.net/2024/10/14/wohXZJK9BL4c7Hj.png)

## Development

> [!TIP]
> Node version >= 18

Start the development server on `http://localhost:3000`:

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

## production

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

## docker Deployment

```bash
# Build an image
docker build -t my-nuxt-app .
# Run container
docker run -d -p 3000:3000 --name my-running-nuxt-app my-nuxt-app
# View the running container
docker ps
# View all containers
docker ps -a
```

## License

[MIT](./LICENSE) © haohaitao
