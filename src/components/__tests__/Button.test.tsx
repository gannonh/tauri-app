import { describe, it, expect, vi } from 'vitest';
import { render, screen, fireEvent } from '@testing-library/react';
import { Button } from "../../components/ui/button";

describe('Button', () => {
  it('renders correctly', () => {
    render(<Button data-testid="button">Click me</Button>);
    expect(screen.getByTestId('button')).toBeInTheDocument();
    expect(screen.getByText('Click me')).toBeInTheDocument();
  });

  it('calls onClick when clicked', () => {
    const handleClick = vi.fn();
    render(<Button data-testid="button" onClick={handleClick}>Click me</Button>);
    
    fireEvent.click(screen.getByTestId('button'));
    expect(handleClick).toHaveBeenCalledTimes(1);
  });

  it('applies the correct classes for default variant', () => {
    render(<Button data-testid="button" variant="default">Primary</Button>);
    const button = screen.getByTestId('button');
    expect(button.className).toContain('bg-primary');
  });

  it('applies the correct classes for secondary variant', () => {
    render(<Button data-testid="button" variant="secondary">Secondary</Button>);
    const button = screen.getByTestId('button');
    expect(button.className).toContain('bg-secondary');
  });

  it('is disabled when disabled prop is true', () => {
    render(<Button data-testid="button" disabled>Disabled</Button>);
    expect(screen.getByTestId('button')).toBeDisabled();
    expect(screen.getByTestId('button').className).toContain('disabled:opacity-50');
  });
}); 