/**
 * 3) you have an array of objects: 
    const instructor = [
         {name: 'nodi' , age:28 , position:'Senior}, 
         {name: 'Akil' , age:26 , position:'Junior}, 
         {name: 'Shobuj' , age:30 , position:'Senior}
     ];
Your task is display the insturctor names that has the position is Senior using filter .
 */

const instructor = [
    { name: 'nodi', age: 28, position: 'Senior' },
    { name: 'Akil', age: 26, position: 'Junior' },
    { name: 'Shobuj', age: 30, position: 'Senior'}
];
const display = instructor.filter(x=> x.position === 'Senior');
console.log(display);