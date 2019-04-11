import Typography from 'typography'

const typography = new Typography({
  googleFonts: [
    {
      name: 'Playfair Display',
      styles: ['400', '700'],
    },
  ],
  headerFontFamily: ['Playfair Display', 'serif'],
  bodyFontFamily: ['Playfair Display', 'serif'],
  baseFontSize: '24px',
  baseLineHeight: 1.5,
  scaleRatio: 1.666,
})

export default typography
