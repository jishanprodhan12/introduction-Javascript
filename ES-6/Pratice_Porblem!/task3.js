/**
 *          *task-3
 *   Write an arrow function that will take two parameter 1 parameter will come from you and another parameter will be a default parameter that add those two  parameters and return the result
 */
const defaultArrowFunction = (x,y=0) => x+y ;
const result = defaultArrowFunction(5);
console.log(result);

/**
 * extra task 
 * write an arrow function that will double a number , and print it . if any argument not pass then it will double 100 .
 */

const arrow = (x=100) => x*2 ;
const result2 = arrow();
console.log(result2);
