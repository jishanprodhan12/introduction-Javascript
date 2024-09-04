/***
Generate a multiplication table for number 9
 */

/*programming hero*/

console.log('Generate a multiplication table for number 9');
mult = 1 ;
const consotant = 9;
const tableEnd = 10 ;
for( let i = 1 ; i <= tableEnd ;i++){
    mult = i * consotant;
    console.log( consotant + ' * '+i+' = '+mult);
}