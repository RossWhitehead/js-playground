const triple = function(x){
    return x * 3
}

console.log(triple(3))

const animals = [
    { name:'fluffy', species:'cat' },
    { name:'rover', species:'dog' },
    { name:'henry', species:'horse' },
    { name:'chomper', species:'dog' },
    { name:'toby', species:'tortoise' },
    { name:'ali', species:'aligator' },
]

const isDog = animal => animal.species === 'dog'

const dogs = animals.filter(isDog)
const others = animals.filter(x => !isDog(x))
console.log(dogs)
console.log(others)

const names = animals.map(animal => animal.name)
console.log(names)

const orders = [
    { amount: 100 },
    { amount: 400 },
    { amount: 120 },
    { amount: 98 }
]

const total = orders.reduce((sum, order) => sum + order.amount, 0)
console.log(total)