import React from "react";
import { classNames } from "../../utils/helpers";

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "primary" | "secondary" | "ghost";
  size?: "sm" | "md" | "lg";
  icon?: React.ReactNode;
  isLoading?: boolean;
}

export const Button: React.FC<ButtonProps> = ({
  variant = "primary",
  size = "md",
  icon,
  isLoading,
  children,
  className,
  ...props
}) => {
  const baseStyle =
    "font-medium transition-all duration-300 flex items-center gap-2 rounded-lg";

  const variantStyles = {
    primary: "bg-accent hover:bg-accent-dark text-white",
    secondary: "border border-accent text-accent hover:bg-accent/10",
    ghost: "text-accent hover:bg-accent/10",
  };

  const sizeStyles = {
    sm: "px-4 py-2 text-sm",
    md: "px-6 py-3 text-base",
    lg: "px-8 py-4 text-lg",
  };

  return (
    <button
      className={classNames(
        baseStyle,
        variantStyles[variant],
        sizeStyles[size],
        isLoading && "opacity-50 cursor-not-allowed",
        className
      )}
      disabled={isLoading || props.disabled}
      {...props}
    >
      {isLoading ? (
        <>
          <div className="animate-spin w-4 h-4 border-2 border-current border-t-transparent rounded-full" />
          Cargando...
        </>
      ) : (
        <>
          {icon}
          {children}
        </>
      )}
    </button>
  );
};
