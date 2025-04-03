# Tauri + React Template

[![Tests](https://github.com/gannonh/tauri-app/actions/workflows/test.yml/badge.svg)](https://github.com/gannonh/tauri-app/actions/workflows/test.yml)

This project serves as a template/starter for Tauri + React applications, featuring a collection of pre-configured tools and packages for modern development.

## Features

- Tauri 2.0 for native desktop app functionality
- React 19 for the UI
- TypeScript for type safety
- Vite for fast development and bundling
- Complete testing setup with Vitest (unit/component) and Playwright (e2e)
- GitHub Actions CI workflow for automated testing
- TailwindCSS and shadcn/ui for styling
- Dark mode support

## Testing

### Test Organization

The project follows a clean, maintainable test structure:

```
project/
├── src/
│   ├── components/
│   │   ├── Button.tsx
│   │   ├── __tests__/               # Unit tests alongside components
│   │   │   └── Button.test.tsx
│   ├── test/
│   │   └── setup.ts                 # Global test setup for Vitest
├── e2e/
│   ├── flows/                       # End-to-end tests in their own directory
│   │   └── app.spec.ts
```

This organization provides several benefits:

- Unit tests stay close to the code they're testing (co-location)
- E2E tests are separated due to their cross-component testing nature
- Consistent naming conventions: `.test.tsx` for unit tests, `.spec.ts` for E2E tests

### Unit and Component Testing

This project uses Vitest for unit and component testing:

- Fast execution aligned with Vite
- Jest-compatible API
- React Testing Library integration

To run unit tests:

```bash
# Run tests once
npm test

# Run in watch mode
npm run test:watch

# Run with UI
npm run test:ui

# Run with coverage report
npm run test:coverage
```

### End-to-End Testing

Playwright is configured for end-to-end testing:

- Multi-browser testing (Chromium, Firefox, WebKit)
- Powerful selectors and assertions
- Integration with Tauri

To run e2e tests:

```bash
# Run e2e tests
npm run test:e2e

# Run with visible browser (helpful for debugging)
npx playwright test --headed

# Run all tests (unit and e2e)
npm run test:all
```

### Writing Tests

#### Unit Test Example

```tsx
// src/components/__tests__/ComponentName.test.tsx
import { describe, it, expect } from 'vitest';
import { render, screen } from '@testing-library/react';
import { ComponentName } from '../../components/ComponentName';

describe('ComponentName', () => {
  it('renders correctly', () => {
    render(<ComponentName data-testid="component">Test</ComponentName>);
    expect(screen.getByTestId('component')).toBeInTheDocument();
  });
});
```

#### E2E Test Example

```tsx
// e2e/flows/feature.spec.ts
import { test, expect } from '@playwright/test';

test('user can interact with feature', async ({ page }) => {
  await page.goto('/');
  await page.getByTestId('feature-button').click();
  await expect(page.getByText('Feature activated')).toBeVisible();
});
```

### Continuous Integration

This template includes a GitHub Actions workflow that:

- Runs on push to main and pull requests
- Executes unit tests and e2e tests in parallel
- Sets up Tauri dependencies automatically
- Caches dependencies for faster runs
- Uploads test results as artifacts

## Development

```bash
# Install dependencies
npm install

# Start development server
npm run dev

# Build for production
npm run build
```

## Adding to the Template

This template is designed to be extended with additional technologies and tools. When adding new features, follow these steps:

1. Install the necessary packages
2. Configure the tools as needed
3. Add basic examples to validate the setup
4. Update this README with information about the new feature

## Recommended IDE Setup

- [VS Code](https://code.visualstudio.com/) + [Tauri](https://marketplace.visualstudio.com/items?itemName=tauri-apps.tauri-vscode) + [rust-analyzer](https://marketplace.visualstudio.com/items?itemName=rust-lang.rust-analyzer)
