import { test, expect } from '@playwright/test';

test.describe('Broken Images', () => {
  test('should verify which images are broken', async ({ page }) => {
    await page.goto('https://the-internet.herokuapp.com/broken_images');
    // Locate all images on the page
    const images = page.locator('img');
    // There are 3 images; check each for a valid naturalWidth
    const count = await images.count();
    for (let i = 0; i < count; i++) {
      const naturalWidth = await images.nth(i).evaluate(img => img.naturalWidth);
      // If naturalWidth is 0, the image is broken
      console.log(`Image ${i} naturalWidth: ${naturalWidth}`);
    }
  });
});
