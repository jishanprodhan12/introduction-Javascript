/**
 *      *task-1
 * Write an arrow function that will take three parameters we will multiply the parameter and will return the result
 */

// arrow function 
const multiply = (a,b,c)=> a*b*c ;
const result = multiply(2,3,4);
console.log(result);
// regular function 

function multiplyRegular(a,b,c){
    const mult = a*b*c ;
    return mult;
}
const resultRegular = multiplyRegular(2,3,4);
console.log(resultRegular);