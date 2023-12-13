/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    screens: {
      xlg: {max: '1512px'},
      lg: { max: '1200px'},
      md: { max: '999px' },
      sm: { max: '769px' },
      xs: { max: '606px' },
    },
    extend: {
      fontFamily: {
        abc: ['Lexend'],
        aaa: ['Ephesis'],
      },
      backgroundImage: {
        heroGradient:
          'linear-gradient(180deg, #FFF 63.64%, rgba(255, 255, 255, 0.00) 95.45%)',
          mainblue:
          'liner-gradient(256deg, #478BF9 0%, #9DADF2 100%)',
      },
      colors: {
        'main-blue': '#478BF9',
        'main-white': '#FFFFFF',
        'navy-blue': '#110A1D',
        'transp-white-12': '#FFFFFF1F',
        'main-blue-hover': '#9DADF2',
        'dep-blue': '#1E1231',
        'transp-white-white-60': 'rgba(255, 255, 255, 0.60)'
      },
      
      backgroundImage: {
        'vector': "url('./images/Vector.png')",
        'vector-grad': "url('./images/VectorGrad.png')",
      },
      animation: {
        centr: 'centr 8s linear infinite',
        wiggle: 'stuff1 8s linear infinite',
        centrHorizontal: 'centrHorizontal 8s linear infinite',
        stuffHorizontal: 'stuffHorizontal 8s linear infinite',
      },
      keyframes: {
        stuff1: {
          '0%': {
            transform: 'translateY(0%)',
          },
          '100%': {
            transform: 'translateY(-50%)',
          }
        },
        centr: {
          '0%': {
            transform: 'translateY(-50%)',
          },
          '100%': {
            transform: 'translateY(0%)',
          }
        },
        stuffHorizontal: {
          '0%': {
            transform: 'translateX(5%)',
          },
          '100%': {
            transform: 'translateX(-50%)',
          }
        },
        centrHorizontal: {
          '0%': {
            transform: 'translateX(-50%)',
          },
          '100%': {
            transform: 'translateX(0%)',
          }
        },
        
      },
      

    },
  },
  plugins: [],
}

