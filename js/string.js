//ES5 
var name = 'lux'
console.log('hello ' + name)

//es6
const nn = 'lux'
console.log(`hello ${nn}`) //hello lux

// ES5
var msg = "Hi " +
"man!" + 
" "
console.log(msg)

// ES6
const template = `<div>
    <span>hello world</span>
</div>`

console.log(template)

// 1.includes：判断是否包含然后直接返回布尔值
const str = 'hahay'
console.log(str.includes('y')) // true

// 2.repeat: 获取字符串重复n次
const strs = 'he'
console.log(strs.repeat(3)) // 'hehehe'
//如果你带入小数, Math.floor(num) 来处理
// s.repeat(3.1) 或者 s.repeat(3.9) 都当做成 s.repeat(3) 来处理

// 3. startsWith 和 endsWith 判断是否以 给定文本 开始或者结束
const stro =  'hello world!'
console.log(stro.startsWith('hello')) // true
console.log(stro.endsWith('!')) // true

// 4. padStart 和 padEnd 填充字符串，应用场景：时分秒
setInterval(() => {
    const now = new Date()
    const hours = now.getHours().toString()
    const minutes = now.getMinutes().toString()
    const seconds = now.getSeconds().toString()
    console.log(`${hours.padStart(2, 0)}:${minutes.padStart(2, 0)}:${seconds.padStart(2, 0)}`)
}, 1000)