import { test, expect } from '@playwright/test';

test.describe('Dashboard', () => {
  test.beforeEach(async ({ page }) => {
    await page.goto('/login');
    await page.locator('#email').fill('saturngod@gmail.com');
    await page.locator('#password').fill('password');
    await page.locator('[data-test="login-button"]').click();
    await page.waitForURL('/dashboard');
  });

  test('shows Setup Guide heading', async ({ page }) => {
    await expect(page.getByRole('heading', { name: 'Setup Guide' })).toBeVisible();
  });

  test('shows Install LM Studio step', async ({ page }) => {
    await expect(page.getByText('Install LM Studio and load models')).toBeVisible();
  });
});
