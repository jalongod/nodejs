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
