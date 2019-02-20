FROM node:alpine

# Create app dir
WORKDIR /usr/src/app

# Install app dependencies
# A wildcard is used to ensure both package.json AND package-lock.json are copied
COPY package*.json ./

# If you are building your code for production
# RUN npm install --only=production
RUN npm install

# Bundle app source
COPY . .

# Bind ports
EXPOSE 8080

# Define the command to run your app
CMD [ "yarn", "start" ]
