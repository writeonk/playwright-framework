require('dotenv').config();
const { test } = require('@playwright/test');
const { LoginPage } = require('../pages/LoginPage');
const { InventoryPage } = require('../pages/InventoryPage');
const { CartPage } = require('../pages/CartPage');
const { CheckoutPage } = require('../pages/CheckoutPage');
const { ConfirmationPage } = require('../pages/ConfirmationPage');

test('User can complete checkout with 3 random items', async ({ page }) => {
  const loginPage = new LoginPage(page);
  const inventoryPage = new InventoryPage(page);
  const cartPage = new CartPage(page);
  const checkoutPage = new CheckoutPage(page);
  const confirmationPage = new ConfirmationPage(page);

  await page.goto(process.env.BASE_URL);
  await loginPage.login(process.env.USERNAME, process.env.PASSWORD);
  await inventoryPage.addRandomItems(3);
  await inventoryPage.goToCart();
  await cartPage.proceedToCheckout();
  await checkoutPage.fillInfo('Kunal', 'Soni', '12345');
  await checkoutPage.finishCheckout();
  await confirmationPage.isOrderConfirmed();
});
