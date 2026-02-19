/* URLs y constantes globales */

export const SITE = {
  title: "Game Developer Portfolio",
  description: "Professional Game Developer Portfolio focused on Unity and C#",
  author: "Your Name",
};

export const NAVIGATION = [
  { label: "Home", href: "#hero" },
  { label: "About", href: "#about" },
  { label: "Skills", href: "#skills" },
  { label: "Games", href: "#games" },
  { label: "3D Models", href: "#models" },
  { label: "Contact", href: "#contact" },
];

export const SOCIAL_LINKS = {
  github: "https://github.com",
  linkedin: "https://linkedin.com",
  twitter: "https://twitter.com",
  email: "mailto:tu-email@example.com",
};

export const COLORS = {
  primary: "#0f172a",
  secondary: "#1e293b",
  accent: "#3b82f6",
  "accent-dark": "#1d4ed8",
  text: "#f1f5f9",
  "text-muted": "#cbd5e1",
};

export const BREAKPOINTS = {
  xs: 320,
  sm: 640,
  md: 768,
  lg: 1024,
  xl: 1280,
  "2xl": 1536,
};

export const ANIMATIONS = {
  duration: {
    fast: 150,
    base: 300,
    slow: 500,
  },
  easing: {
    linear: "linear",
    easeIn: "cubic-bezier(0.4, 0, 1, 1)",
    easeOut: "cubic-bezier(0, 0, 0.2, 1)",
    easeInOut: "cubic-bezier(0.4, 0, 0.2, 1)",
  },
};

export const ROUTES = {
  home: "/",
  game: (id: string) => `/game/${id}`,
  model: (id: string) => `/model/${id}`,
};
