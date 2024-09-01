# Use an official Node.js runtime as a parent image
FROM node:18-alpine

# Set the working directory in the container
WORKDIR /app

# Copy package.json and package-lock.json to the working directory
COPY package*.json ./

# Install dependencies
RUN npm install

# Copy the entire project to the working directory
COPY . .

# Build the React app
RUN npm run build

# Install the serve package globally
RUN npm install -g serve

# Expose port 3000 to the outside world
EXPOSE 3000

# Command to run the app, serving the build output
CMD ["serve", "-s", "dist"]
