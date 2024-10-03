/**
 *      *task4 
 * write a js code that check weather a fuction have  an arguments or not .
 */
function checkArguments(){
    const length = arguments.length ;
    if(length === 0){
        console.log("the function dose not recived any arguments ");
    } else {
        console.log("The function recived ",length,"arguments");
    }

}
checkArguments();
