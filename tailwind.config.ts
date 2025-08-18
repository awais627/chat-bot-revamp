/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './app/**/*.{js,jsx,ts,tsx}',
    './pages/**/*.{js,jsx,ts,tsx}',
    './components/**/*.{js,jsx,ts,tsx}',
    './views/**/*.{js,jsx,ts,tsx}'
  ],
  theme: {
    extend: {
      colors: {
        secondary: '#f5f6f8',
        'gray-medium': '#8e8c8c',
        'gray-light': '#d9d9d9',
        tertiary: '#6518cf',
        'blue-medium': '#407bfd',
        'blue-light': '#cedaf1',
        purple: '#6518cf',
        'green-medium': '#69b072',
        'dark-blue': '#042484',
        'red-dark': '#e81434',
        'text-gray': '#9ca3af',
        'medium-light-gray': '#9ca3af',
        white: '#ffffff'
      },
      backgroundImage: {
        'gradient-primary': 'linear-gradient(to right, #9333ea, #6b21a8)'
      },
      boxShadow: {
        custom: 'var(--shadow)'
      }
    },
    container: {
      center: true,
      padding: '1rem',
      screens: {
        '2xl': { min: '1536px' },
        xl: { min: '1280px' },
        lg: { min: '1024px' },
        md: { min: '768px' },
        sm: { min: '600px' },
        xs: { min: '480px' },
        xss: { max: '479px' }
      }
    }
  },
  plugins: [],
  variants: {
    extend: {
      backgroundImage: ['hover']
    }
  }
};
