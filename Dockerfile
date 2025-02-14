# Use official Node.js image
FROM node:14

# Set working directory inside the container
WORKDIR /app

# Copy package.json and install dependencies
COPY package.json .
RUN npm install

# Copy the app files
COPY . .

# Expose the app port
EXPOSE 8080

# Start the application
CMD ["npm", "start"]
