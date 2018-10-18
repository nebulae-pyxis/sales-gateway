FROM node:10.12.0-alpine
USER node
COPY sales-gateway /nebulae/pyxis/sales-gateway
WORKDIR /nebulae/pyxis/sales-gateway
RUN npm install --prod
CMD [ "npm","start" ]