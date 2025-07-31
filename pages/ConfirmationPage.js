const { expect } = require('@playwright/test');
exports.ConfirmationPage = class ConfirmationPage {
  constructor(page) {
    this.confirmationHeader = page.locator('.complete-header');
  }

  async isOrderConfirmed() {
    await expect(this.confirmationHeader).toHaveText('Thank you for your order!');
  }
};
