var funs = []
for(let i = 0; i < 10; i++) {
    funs.push(function() {console.log('let ' + i)})
}

funs.forEach(func => func())

var funcs = []
for(var i = 0; i < 10; i++) {
    console.log('var i is ' + i)
    funcs.push(function() {console.log('var ' + i)})
}

funcs.forEach(func => func())

console.log('i is ' + i)

// 上面代码中，变量i是var命令声明的，在全局范围内都有效，所以全局只有一个变量i。每一次循环，变量i的值都会发生改变，
// 而循环内被赋给数组a的函数内部的console.log(i)，里面的i指向的就是全局的i。也就是说，所有数组a的成员里面的i，
// 指向的都是同一个i，导致运行时输出的是最后一轮的i的值，也就是 10。

for (let i = 0; i < 3; i++) {
    let i = 'abc';
    console.log(i);
}
