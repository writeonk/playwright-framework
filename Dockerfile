# Use latest Playwright image
FROM mcr.microsoft.com/playwright:v1.54.1-jammy

# Set working directory
WORKDIR /app

# Copy project files
COPY package*.json ./

# Install dependencies
RUN npm ci

# Install Allure CLI
RUN npm install -g allure-commandline --save-dev

# Now copy the full source (tests, pages, etc.)
COPY . .

# Default command to run tests
CMD ["npx", "playwright", "test"]