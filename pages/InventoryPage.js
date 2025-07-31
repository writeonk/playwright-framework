exports.InventoryPage = class InventoryPage {
  constructor(page) {
    this.page = page;
    this.cartIcon = page.locator('.shopping_cart_link');
    this.items = page.locator('.inventory_item');
  }

  async addRandomItems(count) {
    const elements = await this.items.all();
    const shuffled = elements.sort(() => 0.5 - Math.random()).slice(0, count);
    for (const item of shuffled) {
      await item.locator('button').click();
    }
  }

  async goToCart() {
    await this.cartIcon.click();
  }
};
