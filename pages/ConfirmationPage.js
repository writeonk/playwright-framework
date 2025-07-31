const { expect } = require('@playwright/test');
exports.ConfirmationPage = class ConfirmationPage {
  constructor(page) {
    this.page = page;
  }

  async isOrderConfirmed() {
    const successText = this.page.locator('.complete-header');
    await successText.waitFor();
    return successText;
  }
};