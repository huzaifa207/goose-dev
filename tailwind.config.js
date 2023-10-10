/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{html,js,svelte,ts}'],
  theme: {
    extend: {
      colors: {
        transparent: 'transparent',
        current: 'currentColor',
        section: '#002661',
        fieldsBg: "#EEEEEE",
        fieldText: "#606060",
        qoutes: "#DDDDDD"
      },
      backgroundImage: {
        'hero-pattern': "url('/hero.png')",
        'hero-pattern-mob': "url('/mob-hero.png')"
      },
      lineHeight: {
        12: '4rem'
      },
      flex: {
        '2': "2 2 0%",
        '3': "3 3 0%",
        '4': "4 4 0%",
      },
      borderWidth: {
        '12': '12px',
        '16': '16px'
      },
      boxShadow: {
        'quote': "13px -13px 0 0 #002661, 14px -14px 0 0 white, 14px -12px 0 0 white, 11px -14px 0 0 white"
      },
      fontSize: {
        'xxs': '8px'
      },
      width: {
        'w5': "11px",
        "w4": "9px",
        "w3": "7px",
        "w2": "5px",
        "w1": "3px"
      }
    },
  },
  plugins: [],
}

