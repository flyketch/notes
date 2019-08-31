var funs = []
for(var i = 0; i < 10; i++) {
    console.log(i)
    funs.push(function() {console.log(i)})
}

funs.forEach(function(func){
    func()
})