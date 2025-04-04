# Changelog

All notable changes to this project will be documented in this file.

## [0.1.0] - 2024-04-04

### Added

- Initial project setup and structure
- MIT License added to the project
- React 19.1.0 and TypeScript 5.8.2 integration
- Tailwind CSS configuration and integration
- Form implementation using react-hook-form and Zod for validation
- Testing setup with Vitest and Playwright
- GitHub Actions workflow for CI/CD
- Dependabot configuration for automated dependency updates

### Changed

- Enhanced project structure and testing setup
- Updated README with CI workflow details and testing instructions
- Refactored App component to utilize new button imports
- Improved styling with Tailwind CSS standards

### Fixed

- Rollup optional dependencies in GitHub Actions workflow
- GitHub Actions workflow to install libwebkit2gtk-4.1-dev for Tauri dependencies
- Corrected README badge link to point to the correct GitHub Actions workflow

### CI/CD Improvements

- Refactored GitHub Actions workflow for clean installation of dependencies
- Updated workflow to trigger tests on all branches and pull requests
- Enhanced dependency installation process in CI environment

### Dependencies

- Updated @types/node to version 22.14.0
- Added new dependencies for @floating-ui and @hookform
- Updated @testing-library/react to version 16.3.0
- Updated jsdom to version 26.0.0
- Removed outdated esbuild modules to streamline the package
- Updated undici-types to version 6.21.0 for improved compatibility
