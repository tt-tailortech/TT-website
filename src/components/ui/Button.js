import Link from 'next/link';

const Button = ({ 
  children, 
  href, 
  variant = 'primary', 
  size = 'md',
  className = '',
  onClick,
  type = 'button',
  ...props 
}) => {
  // Base button classes
  const baseClasses = 'inline-flex items-center justify-center font-medium rounded-md transition-all duration-300';
  
  // Size variations
  const sizeClasses = {
    sm: 'py-1.5 px-4 text-sm',
    md: 'py-2.5 px-6 text-base',
    lg: 'py-3 px-8 text-lg'
  };
  
  // Variant styles
  const variantClasses = {
    primary: 'bg-primary text-white hover:bg-opacity-90',
    secondary: 'bg-secondary text-white hover:bg-opacity-90',
    outline: 'border-2 border-primary text-primary hover:bg-primary hover:text-white',
    ghost: 'text-primary hover:bg-primary hover:bg-opacity-10'
  };
  
  // Combine all classes
  const buttonClasses = `${baseClasses} ${sizeClasses[size]} ${variantClasses[variant]} ${className}`;
  
  // If href is provided, render as a link
  if (href) {
    return (
      <Link href={href} className={buttonClasses} {...props}>
        {children}
      </Link>
    );
  }
  
  // Otherwise render as a button
  return (
    <button 
      type={type} 
      className={buttonClasses} 
      onClick={onClick}
      {...props}
    >
      {children}
    </button>
  );
};

export default Button;
