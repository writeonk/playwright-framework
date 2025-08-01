FROM mcr.microsoft.com/playwright:v1.54.1-jammy

# Set working directory
WORKDIR /app

# Copy project files
COPY . .

# Install dependencies
RUN npm install

# Install Allure CLI
RUN npm install -g allure-commandline --save-dev

# Default command to run tests
CMD ["npx", "playwright", "test"]
