function Person(name) {
    this.name = name
}

Person.prototype.walk = function () {
    console.log(this.name + ' is walking.')
}

var bob = new Person('Bob')
bob.walk() // Outputs 'Bob is walking.'
var john = new Person('John')
john.walk() // Outputs 'John is walking.'
