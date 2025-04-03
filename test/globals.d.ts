/// <reference types="vitest" />
/// <reference types="@testing-library/jest-dom" />

// Extending the existing matchers interface from Vitest
interface CustomMatchers<R = unknown> {
  toBeInTheDocument(): R;
  toBeDisabled(): R;
  toBeEnabled(): R;
  toBeEmpty(): R;
  toBeEmptyDOMElement(): R;
  toBeInvalid(): R;
  toBeRequired(): R;
  toBeValid(): R;
  toBeVisible(): R;
  toContainElement(element: HTMLElement | null): R;
  toContainHTML(htmlText: string): R;
  toHaveAccessibleDescription(description?: string | RegExp): R;
  toHaveAccessibleName(name?: string | RegExp): R;
  toHaveAttribute(attr: string, value?: any): R;
  toHaveClass(...classNames: string[]): R;
  toHaveFocus(): R;
  toHaveFormValues(expectedValues: Record<string, any>): R;
  toHaveStyle(css: string | Record<string, any>): R;
  toHaveTextContent(text: string | RegExp, options?: { normalizeWhitespace: boolean }): R;
  toHaveValue(value?: string | string[] | number): R;
  toHaveDisplayValue(value: string | RegExp | (string | RegExp)[]): R;
  toBeChecked(): R;
  toBePartiallyChecked(): R;
  toHaveErrorMessage(text?: string | RegExp): R;
}

declare global {
  namespace Vi {
    interface Assertion extends CustomMatchers {}
    interface AsymmetricMatchersContaining extends CustomMatchers {}
  }
} 