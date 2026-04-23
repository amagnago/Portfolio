/* URLs y constantes globales */

export const SITE = {
  title: "Game Developer Portfolio",
  description: "Professional Game Developer Portfolio focused on Unity and C#",
  author: "Your Name",
};

export const NAVIGATION = [
  { label: "Home", href: "#hero" },
  { label: "Games", href: "#games" },
  { label: "3D Models", href: "#models" },
  { label: "About", href: "#about" },
  { label: "Contact", href: "#contact" },
];

export const SOCIAL_LINKS = {
  github: "https://github.com/amagnago",
  linkedin: "https://www.linkedin.com/in/agustin-magnago-121044367/",
  twitter: "https://twitter.com/slomedev",
  email: "mailto:amagnago18@example.com",
};

export const COLORS = {
  primary: "#0d0a1a",
  secondary: "#13102b",
  accent: "#a855f7",
  "accent-dark": "#7c3aed",
  text: "#f3e8ff",
  "text-muted": "#c084fc",
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
