import { test, expect } from '@playwright/test';

test('Add/Remove Element', async ({ page }) => {
  await page.goto('https://the-internet.herokuapp.com/add_remove_elements/');
  
  // Add elements
  await page.click('button:has-text("Add Element")');
  await page.click('button:has-text("Add Element")');
  
  // Verify elements added
  const deleteButtons = page.locator('.added-manually');
  await expect(deleteButtons).toHaveCount(2);
  
  // Remove elements
  await deleteButtons.first().click();
  await expect(deleteButtons).toHaveCount(1);

});
