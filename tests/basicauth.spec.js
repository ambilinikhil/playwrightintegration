const { test, expect } = require('@playwright/test');
test('Basic Auth - Success', async ({ page }) => {
await page.goto('https://admin:admin@the-internet.herokuapp.com/basic_auth');
await expect(page.locator('h3')).toContainText('Basic Auth');
await expect(page.locator('p')).toContainText('Congratulations!');
});