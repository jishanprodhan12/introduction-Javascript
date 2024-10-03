/**
    **Task-2
    You are giving an array says: [33,50,79,78,90,101,30].Now return/Get all the elements which are divisible by 10 using array.filter() method .
** now do the same task of question 2. but do this using array.find() method . then compare the output of question 2 & question 3 .
 */

//todo using filter()
const numbers = [33, 50, 79, 78, 90, 101, 30];
const divisibleBy10_filter = numbers.filter(num => num % 10 === 0);
console.log(divisibleBy10_filter);

//todo using find()
const divisibleBy10_find = numbers.find(n=> n % 2 ===0);
console.log(divisibleBy10_find);

/**
 * filter() its return an array 
 * find() it return just a single element
 */