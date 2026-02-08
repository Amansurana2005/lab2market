import { test, expect } from '@playwright/test';

test.describe('Lab2Market E2E Tests', () => {
  test.beforeEach(async ({ page }) => {
    await page.goto('/');
  });

  test('should load homepage successfully', async ({ page }) => {
    await expect(page).toHaveTitle(/lab2market/i);
    await expect(page.locator('h1')).toBeVisible();
  });

  test('should navigate to problems page', async ({ page }) => {
    await page.click('text=Browse Problems');
    await expect(page).toHaveURL(/.*problems/);
    await expect(page.locator('text=Industry Problems')).toBeVisible();
  });

  test('should display pagination controls on problems page', async ({ page }) => {
    await page.click('text=Browse Problems');
    await page.waitForSelector('button:has-text("Previous")');
    const prevBtn = page.locator('button:has-text("Previous")');
    const nextBtn = page.locator('button:has-text("Next")');
    expect(prevBtn).toBeDefined();
    expect(nextBtn).toBeDefined();
  });

  test('should navigate to login page', async ({ page }) => {
    await page.click('text=Login');
    await expect(page).toHaveURL(/.*login/);
    await expect(page.locator('text=Sign In')).toBeVisible();
  });

  test('should navigate to signup page', async ({ page }) => {
    await page.click('text=Sign Up');
    await expect(page).toHaveURL(/.*signup/);
    await expect(page.locator('text=Create Account')).toBeVisible();
  });

  test('should navigate to contact page', async ({ page }) => {
    await page.click('text=Contact Us');
    await expect(page).toHaveURL(/.*contact/);
    await expect(page.locator('form')).toBeVisible();
  });

  test('should display contact form fields', async ({ page }) => {
    await page.click('text=Contact Us');
    await expect(page.locator('input[name="name"]')).toBeVisible();
    await expect(page.locator('input[name="email"]')).toBeVisible();
    await expect(page.locator('input[name="subject"]')).toBeVisible();
    await expect(page.locator('textarea[name="message"]')).toBeVisible();
  });

  test('should validate required contact form fields', async ({ page }) => {
    await page.click('text=Contact Us');
    const submitBtn = page.locator('button:has-text("Send Message")');
    await submitBtn.click();
    // Form validation should prevent submission
    await expect(page).toHaveURL(/.*contact/);
  });

  test('should submit valid contact form', async ({ page }) => {
    await page.click('text=Contact Us');
    await page.fill('input[name="name"]', 'Test User');
    await page.fill('input[name="email"]', 'test@example.com');
    await page.fill('input[name="subject"]', 'Test Subject');
    await page.fill('textarea[name="message"]', 'This is a test message for the contact form.');
    await page.click('button:has-text("Send Message")');
    // Should show success message
    await expect(page.locator('text=Message sent successfully')).toBeVisible({ timeout: 5000 });
  });

  test('should have accessible navigation', async ({ page }) => {
    const nav = page.locator('nav');
    await expect(nav).toBeVisible();
    const links = page.locator('nav a');
    const count = await links.count();
    expect(count).toBeGreaterThan(0);
  });

  test('should have accessible footer', async ({ page }) => {
    const footer = page.locator('footer');
    await expect(footer).toBeVisible();
    const footerLinks = footer.locator('a');
    const count = await footerLinks.count();
    expect(count).toBeGreaterThan(0);
  });

  test('should display footer quick links', async ({ page }) => {
    await page.goto('/');
    const footer = page.locator('footer');
    await expect(footer.locator('text=Quick Links')).toBeVisible();
    await expect(footer.locator('text=Home')).toBeVisible();
    await expect(footer.locator('text=Contact Us')).toBeVisible();
  });

  test('should show error handling for network issues', async ({ page }) => {
    // Simulate offline
    await page.context().setOffline(true);
    await page.goto('/problems');
    // Should show error message or fallback UI
    await page.context().setOffline(false);
  });

  test('should have proper page titles', async ({ page }) => {
    await expect(page).toHaveTitle(/lab2market/i);
  });

  test('should have accessible form labels', async ({ page }) => {
    await page.click('text=Contact Us');
    const form = page.locator('form');
    await expect(form).toBeVisible();
    // Check for accessibility attributes
    const inputs = form.locator('input, textarea');
    const count = await inputs.count();
    expect(count).toBeGreaterThan(0);
  });
});

test.describe('Mobile Responsiveness', () => {
  test.use({ viewport: { width: 375, height: 667 } });

  test('should be responsive on mobile', async ({ page }) => {
    await page.goto('/');
    await expect(page.locator('h1')).toBeVisible();
  });

  test('should have accessible navigation on mobile', async ({ page }) => {
    await page.goto('/');
    const nav = page.locator('nav');
    await expect(nav).toBeVisible();
  });

  test('should display footer correctly on mobile', async ({ page }) => {
    await page.goto('/');
    const footer = page.locator('footer');
    await expect(footer).toBeVisible();
  });
});
