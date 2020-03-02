FROM node:alpine

RUN apk --no-cache add unzip bzip2 && \
    mkdir -p /var/factor

WORKDIR /var/factor

COPY ./ ./
RUN chown -R node:node /var/factor

USER node
RUN yarn install && yarn factor build

EXPOSE 3000
CMD ["yarn", "factor", "serve"]
