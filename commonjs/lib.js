console.log('dd')
exports.a = 'a'
exports.b = 'b'

setTimeout(() => {
  console.log(exports.a)
}, 2000)

module.exports = function(a, b) {
  return a + b
}

setTimeout(() => {
  console.log(exports)
}, 2000)
//查看webpack的运行机制
//webpack --devtool none --mode development --target node ./commonjs/index.js