module.exports = {
  plugins: [
    require('posthtml-include')({
      root: `src/partials` // "partials" can be renamed
    })
  ]
};