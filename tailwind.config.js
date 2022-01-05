module.exports = {
  content: ['./pages/**/*.{js,ts,jsx,tsx}', './src/components/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      width: {
        '130px': '130px',
      },
      margin: {
        '5px': '5px',
      },
      animation: {
        'wiggle-slow': 'wiggle 3s linear infinite',
        'x-scrolling': 'slider 20s linear infinite',
      },
      keyframes: {
        wiggle: {
          '0%, 100%': { transform: 'rotate(-3deg)' },
          '50%': { transform: 'rotate(3deg)' },
        },
        slider: {
          // '0%, 100%': { left: '0%' },
          // '50%': { left: '-100%' },
          '100%': { transform: 'translateX(calc(-140px * 8))' },
        },
      },
    },
  },
  plugins: [],
};
