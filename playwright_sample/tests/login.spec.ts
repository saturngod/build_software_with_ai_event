import { test, expect } from '@playwright/test';

test.describe('Login page', () => {
  test.beforeEach(async ({ page }) => {
    await page.goto('/login');
  });

  test('shows login form', async ({ page }) => {
    await expect(page.getByRole('heading', { name: 'Log in to your account' })).toBeVisible();
    await expect(page.locator('#email')).toBeVisible();
    await expect(page.locator('#password')).toBeVisible();
    await expect(page.locator('[data-test="login-button"]')).toBeVisible();
  });

  test('successful login redirects away from /login', async ({ page }) => {
    await page.locator('#email').fill('saturngod@gmail.com');
    await page.locator('#password').fill('password');
    await page.locator('[data-test="login-button"]').click();

    await expect(page).not.toHaveURL('/login');
  });

  test('invalid credentials shows error', async ({ page }) => {
    await page.locator('#email').fill('wrong@example.com');
    await page.locator('#password').fill('wrongpassword');
    await page.locator('[data-test="login-button"]').click();

    // Stay on login page and show an error
    await expect(page).toHaveURL('/login');
    await expect(page.locator('body')).toContainText(/invalid|incorrect|credentials|These credentials/i);
  });

  test('email field is required', async ({ page }) => {
    await page.locator('#password').fill('password');
    await page.locator('[data-test="login-button"]').click();

    const emailInput = page.locator('#email');
    await expect(emailInput).toBeFocused();
  });

  test('password field is required', async ({ page }) => {
    await page.locator('#email').fill('saturngod@gmail.com');
    await page.locator('[data-test="login-button"]').click();

    const passwordInput = page.locator('#password');
    await expect(passwordInput).toBeFocused();
  });

  test('password is masked by default', async ({ page }) => {
    await expect(page.locator('#password')).toHaveAttribute('type', 'password');
  });

  test('show/hide password toggle works', async ({ page }) => {
    await page.locator('#password').fill('password');
    await page.getByRole('button', { name: 'Show password' }).click();
    await expect(page.locator('#password')).toHaveAttribute('type', 'text');
  });

  test('forgot password link navigates correctly', async ({ page }) => {
    await page.getByRole('link', { name: 'Forgot password?' }).click();
    await expect(page).toHaveURL('/forgot-password');
  });

  test('sign up link navigates correctly', async ({ page }) => {
    await page.getByRole('link', { name: 'Sign up' }).click();
    await expect(page).toHaveURL('/register');
  });

  test('remember me checkbox can be toggled', async ({ page }) => {
    const checkbox = page.locator('#remember');
    await expect(checkbox).toHaveAttribute('aria-checked', 'false');
    await checkbox.click();
    await expect(checkbox).toHaveAttribute('aria-checked', 'true');
  });
});
