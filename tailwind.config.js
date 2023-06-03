/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [],
  theme: {
    extend: {
      colors : {
        '$brand-color-red' : '#B91C1C',
        '$dark-100%' : '#111827',
        '$dark-70%' : '#353436',
        '$gray-20%' : '#F3F4F6',
         message : '#2962FF',
         success : '#0BB07B',
         warning : '#FFCE52',
         error : '#AA1818',
         information : '#E0E0E0',
         'roxa-50%' : '#481A8F'
      },

      fontFamily: {
        mukta : ['Mukta', 'sans-serif'],
        inter : ['Inter', 'sans-serif']
      }
    }
  },
  plugins: [],
}

