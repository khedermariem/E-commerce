module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    fontFamily:{
      'display': ['Zen Kaku Gothic Antique'],
      'logo':['Kanit'],
    },
    height: {
      '1/4': '350px',
      '50': '50vh' ,
    },
    minWidth: {
      '1/3': '280px',
    },
    width: {
      '200': '200px',
      '6/12': '50%',
    },
    zIndex: {
      '3': '3',
      '2': '2',

    },
    colors: {
      'fb': '#3B5999',
      'insta': '#E4405F',
      'tt': '#55ACEE',
      
      'primaire': '#20dbd8',
      'secondaire': '#ffc319',
      'pin': '#E60023',
      'new': '#fffbb2',
    'send': '#419f88',
    'bleu': '#c6ffeb',   
   },
   screens: {
    'sm': '576px',
    // => @media (min-width: 576px) { ... }

    'md': '960px',
    // => @media (min-width: 960px) { ... }

    'lg': '1440px',
    // => @media (min-width: 1440px) { ... }
  },


    extend: {}
  },
  plugins: [],
}
