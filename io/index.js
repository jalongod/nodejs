const glob = require('glob')

//查找本地目录
var result = null
console.time('glob')
glob(__dirname, '/**/*', res => {
  result = res
})
console.timeEnd('glob')
console.log(result)
