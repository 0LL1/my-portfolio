import Typography from 'typography'

const typography = new Typography({
  googleFonts: [
    {
      name: 'Playfair Display',
      styles: ['700'],
    },
    {
      name: 'Source Sans Pro',
      styles: ['400'],
    },
  ],
  headerFontFamily: ['Playfair Display', 'serif'],
  bodyFontFamily: ['Source Sans Pro', 'sans-serif'],
  // Defaults:
  // baseFontSize: '16px',
  // baseLineHeight: 1.5,
})

export default typography
