# Stage 1: Build
FROM node:20-alpine AS build

WORKDIR /app

# Copy only package files first (for caching)
COPY package.json package-lock.json* pnpm-lock.yaml* ./

# Install dependencies
RUN npm install   # or yarn / pnpm

# Copy all source code except ignored files
COPY . .

# Build the app
RUN npm run build

# Stage 2: Serve
FROM nginx:alpine
RUN rm -rf /usr/share/nginx/html
COPY --from=build /app/dist /usr/share/nginx/html
EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]
