const person = {
    first: "Kay",
    last: "McCray",
    age : "29",
    DOB : new Date("5-8-1995")

}
console.log(person.DOB)

const fruit = [ //create an array literal of oredered indidvidual items
    "apple",
    "banana",
    "cherry"
];
console.log(fruit[1]) //access by offset position

fruit.push("pineapple") //adds to the end of the list
console.log(fruit[3]);

const person2 = { //create an object literal of key value pairs
    first : "J",
    last : "Gray",
    age : 38,
    phone : "555-5555",
    DOB : new Date("9-25-1995")
}

function print(p){ //receive one whole object
    return `
    NAME: ${p.first} ${p.last}
    PHONE: ${p.phone}
    `;    
}
console.log(print(person));
console.log(print(person2));
console.log(print({first: "danny", last:"boy", phone: "555-5555"}))