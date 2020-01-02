var playerAction = process.argv[process.argv.length - 1]
console.log('你出的是' + playerAction)

var random = Math.random() * 3

var computeAction = ''
if (random < 1) {
  computeAction = 'jiandao'
} else if (random < 2) {
  computeAction = 'shitou'
} else {
  computeAction = 'bu'
}
console.log('电脑出的是' + computeAction)

if (computeAction === playerAction) {
  console.log('平局')
} else if (
  (computeAction === 'jiandao' && playerAction === 'shitou') ||
  (computeAction === 'shitou' && playerAction === 'bu') ||
  (computeAction === 'bu' && playerAction === 'jiandao')
) {
  console.log('你赢了')
} else {
  console.log('你输了')
}

//下边是自执行函数的一种范式
;(function(a, b) {
  console.log(a + b)
  return a + b
})(1, 2)
