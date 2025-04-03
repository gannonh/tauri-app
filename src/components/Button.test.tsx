import { describe, it, expect, vi } from 'vitest';
import { render, screen, fireEvent } from '@testing-library/react';
import { Button } from './Button';

describe('Button', () => {
  it('renders correctly', () => {
    render(<Button>Click me</Button>);
    expect(screen.getByTestId('button')).toBeInTheDocument();
    expect(screen.getByText('Click me')).toBeInTheDocument();
  });

  it('calls onClick when clicked', () => {
    const handleClick = vi.fn();
    render(<Button onClick={handleClick}>Click me</Button>);
    
    fireEvent.click(screen.getByTestId('button'));
    expect(handleClick).toHaveBeenCalledTimes(1);
  });

  it('applies the correct class for primary variant', () => {
    render(<Button variant="primary">Primary</Button>);
    const button = screen.getByTestId('button');
    expect(button.className).toContain('bg-blue-500');
  });

  it('applies the correct class for secondary variant', () => {
    render(<Button variant="secondary">Secondary</Button>);
    const button = screen.getByTestId('button');
    expect(button.className).toContain('bg-gray-200');
  });

  it('is disabled when disabled prop is true', () => {
    render(<Button disabled>Disabled</Button>);
    expect(screen.getByTestId('button')).toBeDisabled();
    expect(screen.getByTestId('button').className).toContain('opacity-50');
  });
}); 