function Person(first, last, age){
    return {
        first : first,
        last : last,
        age : humanAge
    }; //returns literal object
}

personObject = Person("Kay", "McCray", 29);

console.log(
    `
    FIRST: ${personObject.first}
    LAST: ${personObject.long}
    AGE: ${personObject.age}
`);