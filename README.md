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

## Testing Setup

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

- Multi-browser testing
- Powerful selectors and assertions
- Integration with Tauri

To run e2e tests:
```bash
# Run e2e tests
npm run test:e2e

# Run all tests (unit and e2e)
npm run test:all
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
