/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './app/templates/**/*.html',
    './app/**/*.py',
    './app/static/**/*.js',
  ],
  theme: {
    extend: {
      // Extended color palette for JustiChain
      colors: {
        primary: {
          DEFAULT: '#003366',  // Dark Blue for primary elements
          light: '#336699',    // Lighter shade for hover effects
          dark: '#002244',     // Darker shade for accents
        },
        secondary: {
          DEFAULT: '#009688',  // Teal for secondary elements
          light: '#33BFC2',    // Light teal for backgrounds or accents
          dark: '#00695C',     // Dark teal for contrast
        },
        accent: {
          DEFAULT: '#F1F1F1',  // Light gray for background and sections
          dark: '#E0E0E0',     // Slightly darker gray for borders or light sections
        },
        text: {
          primary: '#FFFFFF',  // White text for contrast with dark backgrounds
          secondary: '#333333', // Dark gray for body text
          accent: '#607D8B',   // Subtle gray-blue for less emphasized text
        },
        background: {
          light: '#FAFAFA',    // Light background color for sections
          dark: '#424242',     // Darker background for contrast sections
        },
        success: '#4CAF50',    // Success color for notifications or buttons
        danger: '#F44336',     // Danger color for warnings or errors
        warning: '#FF9800',    // Warning color for alerts
      },
      // Font family settings
      fontFamily: {
        sans: ['Roboto', 'Arial', 'sans-serif'], // Main font for the project
        serif: ['Merriweather', 'Georgia', 'serif'], // For headings or emphasized text
        display: ['Montserrat', 'sans-serif'], // Stylish font for headers
      },
      // Font size settings
      fontSize: {
        'xs': '0.75rem',
        'sm': '0.875rem',
        'base': '1rem',
        'lg': '1.125rem',
        'xl': '1.25rem',
        '2xl': '1.5rem',
        '3xl': '2rem',
        '4xl': '2.5rem',
        '5xl': '3rem',
        '6xl': '4rem',
      },
      // Button hover and focus states
      transitionDuration: {
        '0': '0ms',
        '200': '200ms',
        '300': '300ms',
        '500': '500ms',
        '700': '700ms',
      },
      // Custom spacing and padding
      spacing: {
        '72': '18rem',
        '84': '21rem',
        '96': '24rem',
        '128': '32rem',
      }
    },
  },
  variants: {
    extend: {
      // Extend hover, focus, and active states
      backgroundColor: ['hover', 'focus', 'active'],
      borderColor: ['hover', 'focus'],
      boxShadow: ['hover', 'focus'],
      textColor: ['hover', 'focus'],
    },
  },
  plugins: [
    require('@tailwindcss/forms'),
    require('@tailwindcss/typography'),
    require('@tailwindcss/aspect-ratio'),
    require('daisyui'),
  ],
}
