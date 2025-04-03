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
- TailwindCSS and shadcn/ui components with theme support
- Dark/light mode toggle

## Testing

### Test Organization

The project follows a clean, maintainable test structure:

```
project/
├── src/
│   ├── components/
│   │   ├── ui/
│   │   │   └── button.tsx
│   │   ├── __tests__/               # Unit tests alongside components
│   │   │   └── Button.test.tsx
├── test/
│   ├── vitest.setup.ts              # Global test setup for Vitest
│   ├── globals.d.ts                 # TypeScript declarations for testing
│   ├── util/                        # Shared test utilities
│   └── e2e/                         # End-to-end tests
│       └── app.spec.ts
```

This organization provides several benefits:

- Unit tests stay close to the components they're testing (co-location)
- E2E tests and test configuration are separated in a dedicated test directory
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

### Linting

TypeScript is configured to check for type errors without emitting files:

```bash
# Check for type errors
npm run lint
```

### Continuous Integration

This template includes a GitHub Actions workflow that:

- Runs on push to any branch and pull requests
- Executes unit tests and e2e tests in parallel jobs
- Sets up Tauri dependencies automatically
- Handles platform-specific build requirements
- Caches dependencies for faster runs
- Uploads test results as artifacts

The workflow has been configured to handle common CI issues with native dependencies like Rollup and LightningCSS on Linux environments.

## UI Components

This project uses shadcn/ui components with TailwindCSS for styling. The components are customizable and themeable.

### Theme Support

The application includes a dark/light mode toggle implemented with shadcn/ui's dropdown menu component. The theme preference is stored in localStorage and persists between sessions.

## Development

```bash
# Install dependencies
npm install

# Development
npm run tauri dev       # Run your app in development mode with Tauri features
# OR
npm run dev             # Run Vite dev server only (without Tauri)

# Building
npm run tauri build     # Build for production and generate installers

# Utility
npm run preview         # Preview the Vite production build
npm run lint            # Check for TypeScript errors
```

## Adding to the Template

This template is designed to be extended with additional technologies and tools. When adding new features, follow these steps:

1. Install the necessary packages
2. Configure the tools as needed
3. Add basic examples to validate the setup
4. Update this README with information about the new feature

## Recommended IDE Setup

- [VS Code](https://code.visualstudio.com/) + [Tauri](https://marketplace.visualstudio.com/items?itemName=tauri-apps.tauri-vscode) + [rust-analyzer](https://marketplace.visualstudio.com/items?itemName=rust-lang.rust-analyzer)
