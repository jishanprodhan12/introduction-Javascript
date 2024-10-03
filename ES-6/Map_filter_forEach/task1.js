/**
 *   *Task-1
 * 1) You have an odd array(array with odd numbers). [1,3,5,7,9].
 * Now convert this array into a eben array with even numbers . [2,4,6,8,10]. do this using for loop and array dot map method.hints: Add one to any odd number and it will become an even number.
 */
const oddNumbers = [1,3,5,7,9];
const evenNumber = oddNumbers.map(num=> num+1);
console.log(evenNumber);