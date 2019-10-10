var a = []
for (var i = 0; i < 2; i++) {
  var b = {}
  b.id = i
  b.ids=i+1 
  a.push(b)
}

console.log(a)

var d = [9, 6, 5, 8]
var e = []

for (i in d) {
  var b = {}
  b.q = i
  b.q1 = d[i]
  e.push(b) 
}

console.log(e)