const readline =require('readline');
// create an interface for input and output 
const rl = readline.createInterface({
    input : process.stdin ,
    output : process.stdout
});
rl.question('please enter somthing : ',(input) => {
    console.log(`you entered : ${input}`);
    rl.close();
})