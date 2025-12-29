import { test, expect } from '@playwright/test';

test('JavaScript Alerts', async ({ page }) => {
  await page.goto('https://the-internet.herokuapp.com/javascript_alerts');
  
  // Handle JS Alert
  page.once('dialog', dialog => dialog.accept());
  await page.click('button:has-text("Click for JS Alert")');
  await expect(page.locator('#result')).toContainText('You successfully clicked an alert');
  
  // Handle JS Confirm
  page.once('dialog', dialog => dialog.dismiss());
  await page.click('button:has-text("Click for JS Confirm")');
  await expect(page.locator('#result')).toContainText('You clicked: Cancel');
  
  // Handle JS Prompt
  page.once('dialog', dialog => dialog.accept('Test Message are Displaying'));
  await page.click('button:has-text("Click for JS Prompt")');
  await expect(page.locator('#result')).toContainText('You entered: Test Message');

});
