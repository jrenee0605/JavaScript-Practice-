let myBook = { 
    title: '1984', 
    author: 'George Orwell', 
    pageCount: 326
}
console.log(`${myBook.title} by ${myBook.author}`)

myBook.title = 'Animal Farm'
console.log(`${myBook.title} by ${myBook.author}`)

//challenge 
//name, age, location
//print message, modify and print again 


let bio = {
    name: 'Jessica',
    location:'Arizona',
    age: 31
}
console.log(`Hi my name is ${bio.name}. I am ${bio.age} and I live in ${bio.location}`)

bio.name = "Austin"
bio.age = 36

console.log(`My boyfriend's name is ${bio.name}. He is ${bio.age}`)