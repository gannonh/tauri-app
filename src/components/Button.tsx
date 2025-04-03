import React from 'react';

interface ButtonProps {
  onClick?: () => void;
  children: React.ReactNode;
  variant?: 'primary' | 'secondary';
  disabled?: boolean;
  style?: React.CSSProperties;
}

export function Button({ 
  onClick, 
  children, 
  variant = 'primary', 
  disabled = false,
  style = {}
}: ButtonProps) {
  const baseStyle = 'px-4 py-2 rounded focus:outline-none';
  const variantStyles = {
    primary: 'bg-blue-500 text-white hover:bg-blue-600',
    secondary: 'bg-gray-200 text-gray-800 hover:bg-gray-300',
  };
  
  const classes = `${baseStyle} ${variantStyles[variant]} ${disabled ? 'opacity-50 cursor-not-allowed' : ''}`;

  return (
    <button
      onClick={onClick}
      disabled={disabled}
      className={classes}
      style={style}
      data-testid="button"
    >
      {children}
    </button>
  );
} 