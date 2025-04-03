import { test, expect } from '@playwright/test';

test('has title', async ({ page }) => {
  await page.goto('/');
  
  // Test that the app title is visible
  await expect(page).toHaveTitle(/Tauri/);
});

test('can navigate through the app', async ({ page }) => {
  await page.goto('/');
  
  // Replace with actual selectors from your app
  const mainContent = page.getByTestId('app-container');
  await expect(mainContent).toBeVisible();
  
  // Test interaction with a button when you add one to your app
  // const button = page.getByTestId('button');
  // await button.click();
  // await expect(page.getByText('Clicked!')).toBeVisible();
}); 