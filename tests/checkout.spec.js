require('dotenv').config();
const { test, expect } = require('@playwright/test');
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
  await expect(page.locator('.inventory_list')).toBeVisible(); // assert landing on product page

  await inventoryPage.addRandomItems(3);
  const cartCount = await page.locator('.shopping_cart_badge').innerText();
  expect(parseInt(cartCount)).toBe(3); // assert cart has 3 items

  await inventoryPage.goToCart();
  await expect(page).toHaveURL(/.*cart/); // assert on cart page

  await cartPage.proceedToCheckout();
  await expect(page).toHaveURL(/.*checkout-step-one/); // assert on checkout info page

  await checkoutPage.fillInfo('Kunal', 'Soni', '12345');
  await expect(page).toHaveURL(/.*checkout-step-two/); // assert on order summary

  await checkoutPage.finishCheckout();
  await expect(page).toHaveURL(/.*checkout-complete/); // assert on confirmation page

  await expect(await confirmationPage.isOrderConfirmed()).toContainText('Thank you for your order!');
});