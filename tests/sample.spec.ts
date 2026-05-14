import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
  await page.goto('https://www.google.com/?zx=1778771249040');
  await page.getByRole('link', { name: 'Googleについて' }).click();
  await expect(
    page.getByRole('link', { name: 'Google について' }),
  ).toBeVisible();
  await expect(
    page.getByRole('link', { name: 'Google について' }),
  ).toBeVisible();
});
