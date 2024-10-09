FROM node:18.20.3-alpine

WORKDIR /home/nuxt-vue/default
COPY . .

ENV NUXT_HOST=0.0.0.0
ENV NUXT_PORT=3000

EXPOSE 3000 

ENTRYPOINT ["node", ".output/server/index.mjs"]