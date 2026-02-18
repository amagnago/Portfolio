/**
 * Tailwind CSS Configuration
 */

module.exports = {
  theme: {
    extend: {
      colors: {
        "custom-blue": "#1DA1F2",
        "custom-dark": "#14171A",
        "custom-light": "#F5F8FA",
      },
      typography: {
        DEFAULT: {
          css: {
            color: '#333333',
            h1: {
              color: '#1DA1F2',
            },
            h2: {
              color: '#14171A',
            },
          },
        },
      },
      animations: {
        fade: 'fade 1s ease-in-out',
      },
    },
  },
  plugins: [],
};
