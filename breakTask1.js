/* 
Write a loop 1 to 200. Use break to exit the loop once you find 100.
*/

let loopStart = 1 , loopEnd = 200; loopBreak = 100;
for(loopStart ; loopStart <= loopEnd ; loopStart++){
    if(loopStart == loopBreak+1){
        break;
    }
    console.log(loopStart);
}