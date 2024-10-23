const listOfChildren = ["Nat", "Britt", "Zach"];
listOfChildren.unshift('Bianca') //unshift adds to beginning. push adds to end
listOfChildren.push("Finley")

//for OF for arrays/lists
for (let childName of listOfChildren) {
    console.log(childName);
}

const peopleObject = {billy: 111, janey:222, pricilla:333};

//for IN grabs all keys from an object
for (const key in peopleObject){
    const score = peopleObject[key];
    console.log(`The person ${key.toUpperCase()} has a score of ${score}`);
}