FROM node:hydrogen-alpine3.21

WORKDIR /pokemon

COPY package.json package-lock.json ./
RUN npm install

COPY . .

EXPOSE 5858

CMD ["node", "app.js"]

# docker build . -t pokemon
# docker run -p 5858:5858 pokemon