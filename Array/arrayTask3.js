/*
### 3. Checking Array Membership with ‘includes’ : 
*      *Instructions:* note : includes function is case scensitive .

1. Create an array of books containing different book.

2. Use the includes method to check if the array contains a javascript book.

3. Print a message to the console indicating whether the element is present in the array or not.
*/


const books = ['bangla' , 'english', 'math','physics','javascript'];

const isPresent = books.includes('javascript');
if(isPresent){
    console.log('element is present in the array');
}else {
    console.log('element is not present in the array');
}

// index.of() if the value is not present then it will return -1 .