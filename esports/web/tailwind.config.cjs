/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/**/*.tsx',
    './index.html',
  ],
  theme: {
    extend: {
      backgroundImage: {
        galaxy: "url('/background-galaxy.png')", 
        'nlw-gradiant': 'linear-gradient(89.86deg, #9572FC 23.08%, #43E7AD 80.94%, #E1D55D 44.57%);',
      },
  },
},
  plugins: [],
}
