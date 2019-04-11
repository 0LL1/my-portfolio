import Typography from 'typography'

const typography = new Typography({
  googleFonts: [
    {
      name: 'Roboto',
      styles: ['400', '700'],
    },
  ],
  headerFontFamily: ['Roboto', 'sans-serif'],
  bodyFontFamily: ['Roboto', 'sans-serif'],
  baseFontSize: '24px',
  baseLineHeight: 1.5,
  scaleRatio: 1.666,
})

export default typography
