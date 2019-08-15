FROM node:lts-alpine
EXPOSE 3000
COPY app.js .
CMD ["node", "app.js"]
