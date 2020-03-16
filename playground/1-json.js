
const fs = require('fs')

// const book = { 
//     title: "Ego is the Enemy", 
//     author: 'Ryan Holiday'
// }

// const bookJSON = JSON.stringify(book)
// console.log(bookJSON)

// const parsedData = JSON.parse(bookJSON)
// console.log(parsedData.author)

//Load and parse the data. 
const dataBuffer = fs.readFileSync('1-json.json')
 const dataJSON = dataBuffer.toString()
 
 //Change the name and age property using your info
 
 const user = JSON.parse(dataJSON)

 user.name = 'Milen',
 user.age = '31'

const userJSON = JSON.stringify(user)
fs.writeFileSync('1-json.json', userJSON)