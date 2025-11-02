import { test, expect } from '@playwright/test';

test('should display at least two name cards on the results page', async ({ page }) => {
  // Navigate to the results page with some dummy data
  await page.goto('/results?name=Test&gender=Male&style=Modern&meaning=');

  // Wait for the name cards to be visible
  await page.waitForSelector('.relative.w-full.bg-white\\/50');

  // Find all the name cards
  const nameCards = await page.$$('.relative.w-full.bg-white\\/50');

  // Assert that there are at least two name cards
  expect(nameCards.length).toBeGreaterThanOrEqual(2);
});
