import React from "react";
import { classNames } from "../../utils/helpers";

interface CardProps extends React.HTMLAttributes<HTMLDivElement> {
  hover?: boolean;
  variant?: "default" | "glass";
}

export const Card: React.FC<CardProps> = ({
  hover = true,
  variant = "default",
  className,
  children,
  ...props
}) => {
  const baseStyle =
    "rounded-xl border transition-all duration-300 p-6";

  const variantStyles = {
    default: "bg-secondary border-white/5",
    glass: "backdrop-blur-md bg-white/5 border-white/10",
  };

  const hoverStyle = hover ? "hover:border-accent/30 hover:shadow-lg" : "";

  return (
    <div
      className={classNames(
        baseStyle,
        variantStyles[variant],
        hoverStyle,
        className
      )}
      {...props}
    >
      {children}
    </div>
  );
};
