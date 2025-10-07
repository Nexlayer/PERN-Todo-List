# Fetching the minified node image on alpine linux
FROM node:18-alpine

# Declaring env
ENV NODE_ENV production
ENV PORT 3000

# Setting up the work directory
WORKDIR /app

# Copy package.json and package-lock.json to install dependencies
COPY package*.json ./

# Installing dependencies
RUN npm ci --only=production

# Copy the rest of the app's source code
COPY . .

# Exposing server port (configurable)
EXPOSE $PORT

# Starting our application
CMD [ "node", "index.js" ]