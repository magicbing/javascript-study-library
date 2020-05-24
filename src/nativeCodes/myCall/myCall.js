Function.prototype.myCall = function(context) {
  context = Object(context) || window
  context.fn = this
  
  let result

  const args = [...arguments].slice(1)

  result = context.fn(...args)

  delete context.fn

  return result
}

// const obj = {value: 'test value'}

// function func(name, age) {
//   return {
//     value: this.value,
//     name,
//     age,
//   }
// }

// func.myCall(obj, 'xxx', 22)
