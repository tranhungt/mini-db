var BTree = function(){
    this.root = new Node();
}

BTree.degree = 2;

BTree.prototype.insert = function(key, value){
    return this.root.insert(key, value);
}

BTree.prototype.remove = function(key){
    return this.root.remove(key);
}

BTree.prototype.search = function(key){
    return this.root.search(key);
}

var Node = function(){
    this.keys = [];
    this.values = [];
    this.children = [];
}

Node.prototype.isFull = function(){
    return this.keys.length >= 2 * BTree.degree - 1;
}

Node.prototype.insert = function(key, value){
    var i = 0;
    while (key > this.keys[i]) i++;

    if (this.isLeaf()){
        this.keys.splice(i, 0, key);
        this.values.splice(i, 0, value);
    } else  {
        var child = this.children[i];
        if (child.isFull()){
            this.split(i);
        }
        child.insert(key, value);
    }
}

Node.prototype.split = function(index){
    var splitChild = this.children(index);
    var newChild = new Node();
    var middle = BTree.degree - 1;

    newChild.keys = splitChild.keys.splice(middle + 1);
    newChild.values = splitChild.values.splice(middle + 1);
    newChild.children = splitChild.children.splice(middle + 1);

    this.children.splice(i, 0, newChild);
    this.keys.splice(i, 0, splitChild.keys[middle]);
    this.keys.splice(i, 0, splitChild.values[middle]);

    splitChild.keys.splice(middle);
    splitChild.values.splice(middle);
}

Node.prototype.remove = function(key){

}

Node.prototype.isLeaf = function(){
    return this.children.length === 0;
}

Node.prototype.search = function(key){
    var i = 0;
    while (key > this.keys[i]) i++;
    if (key === this.keys[i]){
        return this.values[i];
    } else if (this.isLeaf()) {
        return;
    }

    return this.children[i].search(key);
}

module.exports = BTree;