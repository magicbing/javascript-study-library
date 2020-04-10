Promise.map = function(promiseArray, callback) {
  let afterMap = promiseArray.map(prs => {
    return new Promise(function(resolve, reject) {
      callback(prs, resolve)
    })
  })

  let result = Promise.all(afterMap)

  return result
}

/*
var p1 = Promise.resolve( 21 );
var p2 = Promise.resolve( 42 );
var p3 = Promise.reject( "Oops" );
// 把列表中的值加倍，即使是在Promise中
var p = Promise.map([p1,p2,p3], function(pr,done){
  // 保证这一条本身是一个Promise
  Promise.resolve(pr).then(
    // 提取值作为v
    function(v){
      // map完成的v到新值
      done( v * 2 );
    },
    // 或者map到promise拒绝消息
    done
  );
}).then(function(vals){
  console.log(vals); // [42,84,"Oops"]
});
*/
