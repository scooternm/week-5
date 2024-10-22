//string-ordered list of characters
text="abc"
console.log(text[0]) //A
//array- OL of values 
list = ["apple", "banana", "cherry"] //array literal
console.log(list[2]) //cherry
console.log(list[list.length - 1]) //gets the last one

//object - a bag of values accessed by name/keyword
//key "a" : value "apple"
dictionary = { "a" : "apple", "b" : "banana", "c" : "cherry"}
console.log(dictionary["a"]) //apple
console.log(dictionary.b) //dot notation - banana
console.log(fruit.b) //banana

airports = {
    "ATL" : "atlanta airport",
    "TPA" : "tampa airport",
    "ORL" : "orlando airport",
}
console.log(airports.ATL) //dot notation
console.log(airports["ORL"])

zip_code = {97018 : "columbia city, or"}
console.log(zip_code[97018])
z = 97018
console.log(zip_code[z])