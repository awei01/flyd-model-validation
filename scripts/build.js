var webpack = require('webpack')
var merge = require('webpack-merge')
var chalk = require('chalk')

var base = require('../webpack.config.js')
var build = require('../build.config.js')

var config = merge(base, build)

webpack(config, function (err, result) {
  if (err) {
    throw err
  }
  process.stdout.write(result.toString({
    colors: true,
    modules: false,
    children: false,
    chunks: false,
    chunkModules: false
  }) + '\n\n')
  console.log(chalk.cyan('Build complete\n'))
})
