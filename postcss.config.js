module.exports = {
  plugins: [
    require('postcss-easy-import'),
    require('postcss-nested'),
    require('postcss-nested-ancestors'),
    require('autoprefixer'),
    require('cssnano'),
  ].filter(Boolean),
}
