exports.CheckoutPage = class CheckoutPage {
  constructor(page) {
    this.firstNameInput = page.locator('[data-test="firstName"]');
    this.lastNameInput = page.locator('[data-test="lastName"]');
    this.postalCodeInput = page.locator('[data-test="postalCode"]');
    this.continueBtn = page.locator('[data-test="continue"]');
    this.finishBtn = page.locator('[data-test="finish"]');
  }

  async fillInfo(first, last, postal) {
    await this.firstNameInput.fill(first);
    await this.lastNameInput.fill(last);
    await this.postalCodeInput.fill(postal);
    await this.continueBtn.click();
  }

  async finishCheckout() {
    await this.finishBtn.click();
  }
};
