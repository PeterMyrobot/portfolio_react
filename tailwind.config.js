module.exports = {
  content: ['./pages/**/*.{js,ts,jsx,tsx}', './src/components/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        bluedark: '#031926',
        c1: '#49586e',
        c2: '#FBFBFB',
        c3: '#9E4770',
        c4: '#f42c04',
      },
      height: {
        '400px': '400px',
        '200px': '200px',
        '130px': '130px',
        '60px': '60px',
      },
      width: {
        '350px': '350px',
        '130px': '130px',
        '60px': '60px',
      },
      margin: {
        '10px': '10px',
      },
      animation: {
        'wiggle-slow': 'wiggle 3s linear infinite',
        'x-scrolling': 'slider 40s linear infinite',
        'x-smallscrolling': 'smallslider 40s linear infinite',
      },
      keyframes: {
        wiggle: {
          '0%, 100%': { transform: 'rotate(-3deg)' },
          '50%': { transform: 'rotate(3deg)' },
        },
        slider: {
          // '0%, 100%': { left: '0%' },
          // '50%': { left: '-100%' },
          '100%': { transform: 'translateX(calc(-150px * 17))' },
        },
        smallslider: {
          '100%': { transform: 'translateX(calc(-70px * 17))' },
        },
      },
    },
  },
  plugins: [],
};
