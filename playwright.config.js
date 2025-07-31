module.exports = {
  testDir: './tests',
  retries: 0,
  timeout: 30000,
  reporter: [['html'], ['allure-playwright']],
  use: {
    headless: true,
    viewport: { width: 1280, height: 720 },
    screenshot: 'only-on-failure',
    video: 'retain-on-failure'
  }
};
