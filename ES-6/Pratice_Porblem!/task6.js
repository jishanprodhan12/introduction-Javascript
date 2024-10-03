/**
 *      *pratice problem 3 
 * *        task 6
 *!  write an arrow function where it will do following x^2 
 * a)  square each array element 
 * b) calculate the sum of square elements
 * c) return the average of the sum of the square elements 
 */
const myArrowFun =(numbers)=> {
    let sum = 0;
    for(const number of numbers){
        const square = number*number;
        sum+=square;
    }
    length = numbers.length;
    const average = sum / length;
    return average;
}
const numbers = [1,3,5,6,7,4];
const result = Number((myArrowFun(numbers)).toFixed(2));
console.log(result);