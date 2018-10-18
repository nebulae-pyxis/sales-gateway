FROM node:9.11.1
USER node
COPY sales-gateway /nebulae/pyxis/sales-gateway
WORKDIR /nebulae/pyxis/sales-gateway
RUN npm install --prod
CMD [ "npm","start" ]