/**
 *      pratice problem 2 
 * write an arrow function it will do the following 
 * a) it will take an array where the array elements will be the name of your friends 
 * b) check if the lenght of each element is even, push elements with even length to new array and retrun the result 
 * print the result 
 */
const evenNames = [];
const friends = (names) => {
    for(const name of names){
        if (name.length % 2 === 0) {
            evenNames.push(name);
        }
    }
    return evenNames;
}
const arrayNameList = ['jishan', 'fima', 'kanta','rabbi','Setu'] ;
friends(arrayNameList);
console.log("given Array is ",arrayNameList);
console.log(evenNames);
