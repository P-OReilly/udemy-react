// const person = {
//     name: 'Andrew',
//     age: 26,
//     location: {
//         city: 'Philadelphia',
//         temp: 92
//     }
// };

// const {name: name = 'Anon', age} = person;

// // const name = person.name;
// // const age = person.age;

// console.log(`${name} is ${age}.`)

// const {city, temp: temperature} = person.location;

// console.log(`It's ${temperature} in ${city}.`)


// const book = {
//     title: 'Ego is the Enemy',
//     author: 'Ryan Holiday',
//     publisher: {
//         name: 'Penguin'
//     }
// }

// const {name: publisherName = 'Self-Published'} = book.publisher;

// console.log(publisherName)



// const address = ['1299 South Juniper St.', 'Philadelphia', 'Pennsylvania', '19147'];

// const [street, city, state, zip] = address;

// console.log(`You are in ${city} ${state}`)

const item = ['Coffee (hot)', '$2.00', '$2.50', '$2.75'];

const [drinkType, , medPrice] = item;

console.log(`A medium ${drinkType} costs ${medPrice}`)