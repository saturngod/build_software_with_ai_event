# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: dashboard.spec.ts >> Dashboard >> shows Install LM Studio step
- Location: tests/dashboard.spec.ts:16:7

# Error details

```
Error: page.goto: net::ERR_CONNECTION_REFUSED at http://localhost:8000/login
Call log:
  - navigating to "http://localhost:8000/login", waiting until "load"

```

# Test source

```ts
  1  | import { test, expect } from '@playwright/test';
  2  | 
  3  | test.describe('Dashboard', () => {
  4  |   test.beforeEach(async ({ page }) => {
> 5  |     await page.goto('/login');
     |                ^ Error: page.goto: net::ERR_CONNECTION_REFUSED at http://localhost:8000/login
  6  |     await page.locator('#email').fill('saturngod@gmail.com');
  7  |     await page.locator('#password').fill('password');
  8  |     await page.locator('[data-test="login-button"]').click();
  9  |     await page.waitForURL('/dashboard');
  10 |   });
  11 | 
  12 |   test('shows Setup Guide heading', async ({ page }) => {
  13 |     await expect(page.getByRole('heading', { name: 'Setup Guide' })).toBeVisible();
  14 |   });
  15 | 
  16 |   test('shows Install LM Studio step', async ({ page }) => {
  17 |     await expect(page.getByText('Install LM Studio and load models')).toBeVisible();
  18 |   });
  19 | });
  20 | 
```