var Table = require('./lib/table')
var table = new Table()

var id = table.insert({
    fname: 'Hung',
    lname: 'Tran'
})

var obj1 = table.findByAttribute('lname', 'Tran')
var obj2 = table.findById(id)

console.log(obj1)
console.log(obj2)
