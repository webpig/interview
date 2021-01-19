function SuperType(name) {
    this.name = name
    this.colors = ['red', 'blue', 'green']
}

SuperType.prototype.sayName = function() {
    console.log(this.name)
}

function SubType() {
    SuperType.call(this)
}

// const instance1 = new SubType()
const instance1 = new SuperType('a')
const instance2 = new SuperType('b')

instance2.colors.push('black')
console.log(instance2.colors)
console.log(instance1.colors)
instance1.sayName()
instance2.sayName()
