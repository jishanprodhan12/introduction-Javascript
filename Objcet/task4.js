/**
 * Count the number of properties.

Input:

let student = {
    name: 'Ariana Grande',
    age: 21,
    city: 'Gaibandha',
    isStudent: true
};
 */
 let student = {
    name : 'Ariana Grande ',
    age : 21 ,
    city : 'Gaibandha ',
    isStudent : true 
 };
 const keys =Object.keys(student);
 console.log(keys);
    let count = 0 ;
 for(const key of keys){
        count++;
 }
 console.log(count);