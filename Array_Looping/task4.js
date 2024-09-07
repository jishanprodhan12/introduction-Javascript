/**
 * ### Task 4 (Hard)

Reverse the words of a sentence. Only the position of the word will be reversed. check out the output

**Input:**
`const statement = 'I am a hard working person'`

**Output:**

`'person working hard a am I'`
 */

const statement = 'I am a hard working person';
const strs = statement.split(' ');
console.log(strs);
const rev = [];
for(const str of strs){
    rev.unshift(str);
}
console.log(rev.join(' ').trim());