import { test, expect } from '@playwright/test';

test('has title', async ({ page }) => {
  await page.goto('/');
  
  // Test that the app title is visible
  await expect(page).toHaveTitle(/Tauri/);
});

test('can navigate through the app', async ({ page }) => {
  await page.goto('/');
  
  // Check the main content is visible
  const mainContent = page.getByTestId('app-container');
  await expect(mainContent).toBeVisible();
  
  // Test interaction with the mode toggle button
  const themeButton = page.locator('button[data-testid="mode-toggle"]');
  await expect(themeButton).toBeVisible();
});

test('can interact with button', async ({ page }) => {
  await page.goto('/');
  
  // Test clicking the test button
  await page.getByText('Test Button').click();
  
  // Check clicked message appears
  await expect(page.getByText('Button Clicked!')).toBeVisible();
}); 