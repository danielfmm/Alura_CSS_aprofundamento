tailwind.config = {
  theme: {
      extend: {
          screens: {
              '3xl': '1800px',
            },
          colors: {
              azul: {
                  claro: '#C5DFFF',
                  escuro: '#061E3C',
                  hover: '#1057B0'
              },
          },
          fontFamily: {
              inter: ['Inter', 'sans-serif']
          },
          keyframes: {
              sino_kf: {
                  '0%, 100%': {
                      transform: 'rotate(-10deg)'
                  },
                  '50%': {
                      transform: 'rotate(10deg)'
                  }
              }
          },
          animation: {
              sino: 'sino_kf 300ms ease-in-out infinite'
          }

      }
  }
}