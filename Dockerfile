FROM node:16-alpine


WORKDIR /app
ADD . ./
ENV NODE_OPTIONS=--max_old_space_size=4096
RUN yarn install
RUN yarn rw build

EXPOSE 8910

ENTRYPOINT ["yarn", "rw", "serve" ]
CMD []
