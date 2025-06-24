import React from 'react';

interface ButtonProps {
  children: React.ReactNode;
  variant?: 'primary' | 'secondary' | 'outline';
  size?: 'sm' | 'md' | 'lg';
  className?: string;
  href?: string;
  onClick?: () => void;
}

const Button: React.FC<ButtonProps> = ({
  children,
  variant = 'primary',
  size = 'md',
  className = '',
  href,
  onClick,
}) => {
  const baseClasses = 'inline-block font-medium rounded-md transition-all duration-200 text-center';
  
  const variantClasses = {
    primary: 'bg-blue-600 hover:bg-blue-700 text-white shadow-sm hover:shadow',
    secondary: 'bg-indigo-100 hover:bg-indigo-200 text-blue-700 hover:text-blue-800',
    outline: 'border-2 border-blue-600 text-blue-600 hover:bg-blue-50',
  };
  
  const sizeClasses = {
    sm: 'text-sm py-1.5 px-3',
    md: 'py-2 px-6',
    lg: 'text-lg py-3 px-8',
  };
  
  const allClasses = `${baseClasses} ${variantClasses[variant]} ${sizeClasses[size]} ${className}`;
  
  if (href) {
    return (
      <a href={href} className={allClasses}>
        {children}
      </a>
    );
  }
  
  return (
    <button onClick={onClick} className={allClasses}>
      {children}
    </button>
  );
};

export default Button;