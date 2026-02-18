import React from "react";
import { NAVIGATION } from "../../utils/constants";

interface NavigationProps {
  onNavigate?: () => void;
}

const Navigation: React.FC<NavigationProps> = ({ onNavigate }) => {
  const handleNavigate = (href: string) => {
    if (href.startsWith("#")) {
      const element = document.querySelector(href);
      element?.scrollIntoView({ behavior: "smooth" });
    }
    onNavigate?.();
  };

  return (
    <nav className="flex flex-col md:flex-row gap-4 md:gap-8">
      {NAVIGATION.map((item) => (
        <a
          key={item.label}
          href={item.href}
          onClick={(e) => {
            e.preventDefault();
            handleNavigate(item.href);
          }}
          className="text-text-muted hover:text-accent transition-colors duration-300 font-medium text-sm md:text-base"
        >
          {item.label}
        </a>
      ))}
    </nav>
  );
};

export default Navigation;
