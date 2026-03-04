# Use Node.js official image
FROM node:18-alpine

# Set working directory
WORKDIR /app

# Copy package.json files and install dependencies
COPY package*.json ./
RUN npm install

# Copy all files
COPY . .

# Expose the port your app uses
EXPOSE 3000

# Start the app
CMD ["npm", "start"]