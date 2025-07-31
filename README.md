# 🎭 Playwright POM Framework - SauceDemo

A scalable Playwright test automation framework with Page Object Model, .env configuration, and Allure reporting.

## ✅ Features
- Page Object Model structure
- Environment config via `.env`
- Allure and HTML reporting
- Modular, readable code

## 📦 Install

```bash
npm install
npx playwright install
```

## 🧪 Run Tests

```bash
npm test
```

## 📊 View Reports

```bash
npm run report          # HTML report
npm run allure:generate
npm run allure:open     # Allure report
```

## 🔒 Credentials

Stored securely in `.env` file:

```env
BASE_URL=https://www.saucedemo.com
USERNAME=standard_user
PASSWORD=secret_sauce
```
