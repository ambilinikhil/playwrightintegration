import { test, expect } from '@playwright/test';

test('Context Menu', async ({ page }) => {
  await page.goto('https://the-internet.herokuapp.com/context_menu');
  
  // Right click on hot spot
  const hotSpot = page.locator('#hot-spot');
  await hotSpot.click({ button: 'right' });
  
  // Handle alert
  page.on('dialog', dialog => dialog.accept());
});