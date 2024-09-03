
/***
Subtask-1:
Display sum of all the odd numbers from 91 to 129.
 */
let sum = 0 ;
console.log('Display sum of all the odd numbers from 91 to 129.')
for ( let i = 91 ; i <= 129 ; i++){
    if( i % 2 !== 0){
        sum+=i;
    }
}
console.log('sum of all the odd numbers from 91 to 129 is : ',sum);
/***
Subtask-2:
Display sum of all the even numbers from 51 to 85.
 */

/*programming hero*/

console.log('Display sum of all the even numbers from 51 to 85.');

let total = 0;
for ( let i = 51 ; i <= 85 ; i++){
    if( i % 2 == 0){
        total+=i;
    }
}
console.log('sum of all the even numbers from 51 to 85 is : ',total);
