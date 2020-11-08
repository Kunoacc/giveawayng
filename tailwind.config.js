module.exports = {
  future: {
    // removeDeprecatedGapUtilities: true,
    // purgeLayersByDefault: true,
  },
  purge: [],
  theme: {
    darkSelector: '.dark-mode',
    container: {
      center: true,
      padding: {
        default: '1rem',
        sm: '2rem',
        lg: '4rem',
        xl: '0rem',
      },
    },
    extend: {
      colors: {
        'primary': '#D21AB8',
        'primary-light': '#DA89BA',
        'primary-lightest': '#FDD5ED',
        'secondary': '#21B1E2'
      },
      inset: {
        '2': '2px',
        '3': '3px',
        '4': '4px',
        '5': '5px',
        '6': '6px',
        '7': '7px',
        '8': '8px',
        '9': '9px',
        '10': '10px',
        '12': '12px',
        '14': '14px',
        '16': '16px',
        '20': '20px',
        '24': '24px',
        '32': '32px',
        '36': '36px',
        '48': '48px',
        '56': '56px',
        '64': '64px',
        '72': '72px',
        '100': '100px',
        '1/2': '50%'
      }
    },
    fontFamily: {
      'body': ['Product Sans', 'sans-serif']
    }
  },
  variants: {
    backgroundColor: [
      "dark",
      "dark-hover",
      "dark-group-hover",
      "dark-even",
      "dark-odd"
    ],
    borderColor: ["dark", "dark-focus", "dark-focus-within"],
    textColor: ["dark", "dark-hover", "dark-active"]
  },
  plugins: [
    require('tailwindcss-dark-mode')()
  ],
}
