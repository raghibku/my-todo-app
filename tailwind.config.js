/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    
    extend: {
      colors: {
        // ...
        'mojito': {
          light: '#64E9FF',
          
          dark: '#103CE7',
        },
        'lime:': {
          light : '#2DFFF5',
          dark: '#FFF878'
        },
        'neon': {
          light : '#EE49FD',
          dark: '#6157FF'
        },
        'butterfly': {
          light : '#FFF16A',
          dark: '#FF4066'
        },
        'malibu': {
          light : '#DDFFC9',
          dark: '#0700DE'
        },
        'azure': {
          light : '#74FEBD',
          dark: '#0172AF'
        },

        // ...
      },
    },
    
    
  },
  plugins: [],
}

