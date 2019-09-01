// 请使用 ES6 重构一下代码

// 第一题
var jsonParse = require('body-parser').jsonParse

// 第二题
var body = request.body
var username = body.username
var password = body.password

// 1.
import { jsonParse } from 'body-parser'
// 2. 
const { body, body: { username, password } } = request