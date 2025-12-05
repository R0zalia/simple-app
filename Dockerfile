FROM node:18
WORKDIR /app
COPY . .
RUN npm install --ignore-scripts
EXPOSE 3000
CMD ["node", "app.js"]
