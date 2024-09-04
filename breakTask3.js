/* 
Write a loop that goes from 1 to 100, but stops (using break) when it encounters the first square number (like 4, 9, 16, etc.)
*/
let n=2 ;
let reach=100;
while(n<=reach){
    if(Number.isInteger(Math.sqrt(n))){
        break;
    }
    console.log(n);
    n++;
  
}
