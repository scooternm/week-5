car = {
    price: 9999,
    make: "FORD",
    model: "MUSTANG",
    engine: {
        engineType: "Inline 4",
        pistons: [{rodThrown: false}, {rodThrown: false},]
    }
}

htmlElement = {
    tagName: "div",
    class: ["hidden", "large", "col-3"],
    id: "thingy",
    name: "bob",
    value: "123"
}





list = [] //array literal
list2 = new Array(); //new object
colors = ["red", "orange", "blue"]
console.log(colors[1])
console.log(colors.at(1)) //prints green
console.log(list.length) //prints green


now = new Date();
count = new Number("123");

thing1 = {}; //object literal
thing2 = new Object ();

lots = []
for(let i=0; i<1000; i++) {
    lots.push(i);
}
console.log(lots.length)

lotsaProps = {} //empty object
for (let i=0; i<100000000; i++) {
    lotsaProps[i] = i
}