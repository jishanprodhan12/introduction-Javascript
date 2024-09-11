/**
 * Loop through an object and print the key-value pairs with their types

Input:

let myObject = {

name: 'John Doe',
age: 25,
city: 'Example City',
isStudent: true
};
 */
let myObject = {
    name : 'John Doe',
    age : 25 ,
    city : 'Example City',
    isStudent : true
};
console.log(myObject);
let keys = Object.keys(myObject);
let values = Object.values(myObject);
for(const key of keys){
    console.log(key)
}