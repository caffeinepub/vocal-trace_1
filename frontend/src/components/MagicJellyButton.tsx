import React from 'react';

interface MagicJellyButtonProps {
  children: React.ReactNode;
  onClick?: () => void;
  size?: 'sm' | 'md' | 'lg';
  className?: string;
  type?: 'button' | 'submit' | 'reset';
  disabled?: boolean;
}

const MagicJellyButton: React.FC<MagicJellyButtonProps> = ({
  children,
  onClick,
  size = 'md',
  className = '',
  type = 'button',
  disabled = false,
}) => {
  const sizeClass =
    size === 'lg'
      ? 'magic-jelly-btn-lg'
      : size === 'sm'
      ? 'magic-jelly-btn-sm'
      : '';

  return (
    <button
      type={type}
      onClick={onClick}
      disabled={disabled}
      className={`magic-jelly-btn ${sizeClass} ${className} ${disabled ? 'opacity-60 cursor-not-allowed' : ''}`}
    >
      {children}
    </button>
  );
};

export default MagicJellyButton;
