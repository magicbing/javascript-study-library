const res = function(time) {
  return new Promise(function (resolve, reject) {
    setTimeout(() => {
      resolve(`res${time}`)
    }, (time));
  })
}

const rej = function(time) {
  return new Promise(function (resolve, reject) {
    setTimeout(() => {
      reject(`rej${time}`)
    }, (time));
  })
}

const prsArray = [res(300), res(100), rej(100), res(50), rej(50)]
