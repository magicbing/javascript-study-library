Function.prototype.myApply = function(context, args) {
  context = Object(context) || window

  context.fn = this

  let result

  if (!args) {
    result = context.fn()
  } else {
    result = context.fn(...args)
  }

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

// func.myApply(obj, ['xxx', 22])
