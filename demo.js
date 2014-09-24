var Table = require('./lib/table')
var table = new Table()

var id = table.insert({
    fname: 'Hung',
    lname: 'Tran'
});

for(var i = 0; i < 2000; i++){
    table.insert({
        fname: 'Hung' + i,
        lname: 'Tran' + i
    })
}

var obj1 = table.findByAttribute('lname', 'Tran100');
var obj2 = table.findById(id);

console.log(obj1);
console.log(obj2);
