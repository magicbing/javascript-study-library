Function.prototype.myBind = function(context) {
  if (typeof this !== 'function') {
    throw new Error('not a function')
  }

  const self = this

  const args1 = [...arguments].slice(1)

  const bindFn = function() {
    const args2 = [...arguments]

    return self.apply(this instanceof bindFn ?
      this : context, args1.concat(args2))
  }

  function proFn() {}
  proFn.prototype = self.prototype
  bindFn.prototype = new proFn()

  return bindFn
}

function func(name, age) {
  this.test = 'func test'
}
func.prototype.pro = 'prototype pro data'

const obj = {value: 'test value'}
let bindFn = func.myBind(obj, 'xxx', 22)
var bindObj = new bindFn();
bindObj.__proto__.pro = 'modi data';

console.log(bindObj.__proto__ === func.prototype)

console.log(bindObj.pro)

console.log(func.prototype.pro)
