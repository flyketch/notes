let address = '北京海淀区'
let name = 'lala'
let str = `${name}在${address}上班...`
console.log(str)
// 模拟一个方法 myTemplate(str) 最终输出 'lala在北京海淀区上班...'
function myTemplate(str) {
    // try it
}
console.log(myTemplate(str)) // lala在北京海淀区上班...

function action(num = 20) {
    console.log(20)
}

action(90)
action()

const list = [1, 2, 3]
list.map(x => x + 1)

var people = (name, age) => {
    const info = `name is ${name}, age is ${age}`
    console.log(info)
    return info
}

people('Steve', 24)
