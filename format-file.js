const fs = require('fs')

var output = fs.readFileSync('data/customers.csv', 'utf8')
    .trim()
    .split('\n')
    .map(line => line.split(','))
    .reduce((customers, line) => {
        customers[line[6]] = customers[line[6]] || []
        customers[line[6]].push({
            id: line[0],
            name: line[1]
        })
        return customers
    }, {})

console.log(JSON.stringify(output, null, 4))