/**
 * ### Task 1

Write a JavaScript code to reverse the array colors `without using the reverse method`.

**Input:**
`const colors = ['red', 'blue', 'green', 'yellow', 'orange']`

**Output:**

`['orange', 'yellow', 'green', 'blue', 'red']`

 */
let reverse ='';
let s;
const colors = ['red','blue','green','yellow','orange'];
for(const color of colors){
    reverse =color +' '+ reverse;
}
console.log(colors);
console.log(reverse);


