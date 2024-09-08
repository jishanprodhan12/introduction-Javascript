/**
 * ### Task-1: 
        Count how many times a string has the letter `a`
 */

const statement = 'fima and jishan';
const str = statement.split('');
console.log(statement);
let count = 0 ;
for(let i=0 ; i<str.length;i++){
    if(str[i] === 'a'){
        count ++;
    }
}
console.log('there are ',count+' times a string has the letter `a`');


/*  another way 
console.log(statement.split());
let s =0 ;
for(const num of statement){
    console.log(num);
    if(num === 'a'){
        s++;
    }

}
console.log(s);
*/
