// tailwind.config.js
module.exports = {
    darkMode: 'class', // Enable dark mode using class
    content: [
      './app/**/*.{js,ts,jsx,tsx,mdx}', // Include all files in the `app` directory
      './components/**/*.{js,ts,jsx,tsx,mdx}', // Include all files in the `components` directory
    ],
    theme: {
      extend: {
        backgroundImage: {
          'custom-pattern-light': "url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='24' height='24' viewBox='0 0 24 24'%3E%3Cg fill='%23eae7ef' fill-opacity='0.28'%3E%3Cpolygon fill-rule='evenodd' points='8 4 12 6 8 8 6 12 4 8 0 6 4 4 6 0 8 4'/%3E%3C/g%3E%3C/svg%3E\")",
          'custom-pattern-dark': "url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='24' height='24' viewBox='0 0 24 24'%3E%3Cg fill='%23333' fill-opacity='0.28'%3E%3Cpolygon fill-rule='evenodd' points='8 4 12 6 8 8 6 12 4 8 0 6 4 4 6 0 8 4'/%3E%3C/g%3E%3C/svg%3E\")",
        },
      },
    },
    plugins: [],
  };