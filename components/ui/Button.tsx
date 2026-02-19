import React from 'react';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'outline' | 'gold';
  className?: string;
}

export const Button: React.FC<ButtonProps> = ({ 
  children, 
  variant = 'primary', 
  className = '', 
  ...props 
}) => {
  const baseStyles = "font-sans text-sm font-bold uppercase tracking-widest px-8 py-4 rounded-md transition-all duration-300 transform active:scale-95";
  
  const variants = {
    primary: "bg-primary hover:bg-terracotta text-white shadow-md hover:shadow-lg",
    secondary: "bg-transparent border border-primary text-primary hover:bg-primary hover:text-white",
    outline: "bg-transparent border border-gold text-white hover:bg-gold hover:text-primary",
    gold: "bg-gold hover:bg-terracotta text-white shadow-md",
  };

  return (
    <button 
      className={`${baseStyles} ${variants[variant]} ${className}`} 
      {...props}
    >
      {children}
    </button>
  );
};