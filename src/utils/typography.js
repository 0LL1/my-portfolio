import Typography from 'typography'

const typography = new Typography({
  googleFonts: [
    {
      name: 'Fira Sans',
      styles: ['400', '700'],
    },
  ],
  headerFontFamily: ['Fira Sans', 'sans-serif'],
  bodyFontFamily: ['Fira Sans', 'sans-serif'],
  baseFontSize: '22px',
  baseLineHeight: 1.5,
  scaleRatio: 2,
})

export default typography
