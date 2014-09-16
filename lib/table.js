function Table(){
    this.records = []
    this.indexes = {}
}

Table.prototype.insert = function(obj){
    var obj = this.addToDB(obj)
    this.addToIndexes(obj)
    return obj['id']
}

Table.prototype.findByAttribute = function(attribute, value) {
    var index = this.getIndex(attribute)
    var obj = this.findFromIndex(index, value)
    return obj
};

Table.prototype.findById = function(index){
    return this.records[index - 1]
}

Table.prototype.nextId = function() {
    return this.records.length + 1
};

Table.prototype.findFromIndex = function(index, value){
    var id = index[value]
    var obj =  this.findById(id)
    return obj
}

Table.prototype.addToIndexes = function(obj){
    var id = obj['id']
    for(attribute in obj){
        if (attribute != 'id'){
            var index = this.getOrCreateIndex(attribute)
            var value = obj[attribute]
            this.addToIndex(index, value, id)
        }
    }
}

Table.prototype.addToIndex = function(index, attribute, id){
    index[attribute] = id
}

Table.prototype.addToDB = function(obj){
    var id = this.nextId()
    obj['id'] = id
    this.records.push(obj)
    return obj
}

Table.prototype.getOrCreateIndex = function(attribute){
    if (this.getIndex(attribute)){
        return this.getIndex(attribute)
    } else {
        return this.createIndex(attribute)
    }
}

Table.prototype.getIndex = function(attribute){
    return this.indexes[attribute] || false
}

Table.prototype.createIndex = function(attribute){
    return this.indexes[attribute] = {}
}

module.exports = Table