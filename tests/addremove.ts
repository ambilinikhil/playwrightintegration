import { test, expect } from '@playwright/test';

test.describe('Add/Remove Elements', () => {
  test('should add and remove elements', async ({ page }) => {
    await page.goto('https://the-internet.herokuapp.com/add_remove_elements/');
    // Click the "Add Element" button to add a new Delete button
    await page.click('text=Add Element');
    // Verify that a "Delete" button appears
    await expect(page.locator('button', { hasText: 'Delete' })).toHaveCount(1);
    // Click the Delete button to remove it
    await page.click('text=Delete');
    // Verify that the Delete button is removed (count goes back to 0)
    await expect(page.locator('button', { hasText: 'Delete' })).toHaveCount(0);
  });
});
