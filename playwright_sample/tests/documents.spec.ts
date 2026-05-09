import { test, expect } from '@playwright/test';

test.describe('Documents page', () => {
  test.beforeEach(async ({ page }) => {
    await page.goto('/login');
    await page.locator('#email').fill('saturngod@gmail.com');
    await page.locator('#password').fill('password');
    await page.locator('[data-test="login-button"]').click();
    await page.waitForURL('**/dashboard');
  });

  test('shows "No documents yet" when empty', async ({ page }) => {
    await page.goto('/documents');
    await expect(page.getByText('No documents yet')).toBeVisible();
  });
});
