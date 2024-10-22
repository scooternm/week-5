//array (ordered) of objects (key:value pairs)
const data = [
    {name :"Dandy", kind: "Dog"},
    {name: "Koshi", kind: "Dog"},
    {name: "Bianca", kind: "Cat"},
    {name: "Finley", kind: "Cat"},
];

function petToString(pet){
    return `
        PET NAME: ${pet.name}
        KIND: Good ${pet.kind}
    `
}

console.log(petToString(data[0]));
console.log(petToString(data[data.length - 1]));

//CLASSIC
// for(i=0; i<data.length; i++){
//     console.log(petToString(data[i]));
// }

//data.forEach(petToString); 

//ANON Function
//data.forEach((pet) => console.log(petToString(pet)))

data.forEach(printPet);
