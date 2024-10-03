/**
 *      pratice problem 2  alternative of task-5
 * write an arrow function and short hand the code  it will do the following 
 * a) it will take an array where the array elements will be the name of your friends 
 * b) check if the lenght of each element is even, push elements with even length to new array and retrun the result 
 * c ) check if the length of each element is odd , push elements with odd length ot new array and return the result .
 * 
 * print the result 
 */

const arrayNameList = ['jishan', 'fima', 'kanta', 'rabbi', 'Setuu'];

const evenNameList = arrayNameList.filter(arrayNameList => arrayNameList.length % 2 === 0);
const oddNameList = arrayNameList.filter(arrayNameList => arrayNameList.length % 2 === 1)
console.log(...arrayNameList);
console.log(evenNameList);
console.log(oddNameList);
