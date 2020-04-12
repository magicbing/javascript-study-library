Promise的类all，rece方法其实都是一个方法，需要返回一个全新的Promise，这时候要用new Promise创建。
把传入数组的每一项都进行Promise.resolve处理，成功和返回都进入一个辅助函数core里，
根据不同的功能，设置一个共有变量存储需要的状态，在core中进行处理，
一般还需要数组总长度和当前进度标示index，在core里先更新index进度：index++，
之后就是index，length，特殊状态lastResolve之类的这三个值进行比较，判断输出。

里面写的promise不是太好用，一个是宏任务微任务没法模拟，还有就是状态机确实不太好写，等有时间再改吧。
