/** 
 * 1. declear an object and make it josn formate 
 * 2 . and json formate to object formate 
 */
const person = {
    name : 'jishan ',
    age : 22, 
    id : 1141,
    section : '61 B',
    course : ['CSE','EEE','MAT']
}
console.log(person);
// object to json object or string 
const stringifyPerson = JSON.stringify(person);
console.log(stringifyPerson);
// json object or string to object from
const newPerson = JSON.parse(stringifyPerson);

console.log(newPerson);