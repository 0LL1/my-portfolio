import Typography from 'typography'

const typography = new Typography({
  googleFonts: [
    {
      name: 'Playfair Display',
      styles: ['400', '700', '900'],
    },
    {
      name: 'Source Sans Pro',
      styles: ['400', '700'],
    },
  ],
  headerFontFamily: ['Playfair Display', 'serif'],
  bodyFontFamily: ['Source Sans Pro', 'sans-serif'],
})

export default typography
