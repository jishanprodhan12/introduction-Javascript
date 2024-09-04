/* 
Write a while loop that adds numbers starting from 1, but stops (using break) as soon as the sum reaches or exceeds 100
*/

let sum = 0 , n = 100;
for(let i = 1 ; i< n ; i++){
    sum+=i;

    if(sum >= 100){
        break;
    }
    
    console.log(sum+" + "+i+" = "+sum);
}
console.log('using while loop ');
let i=1 ,total =0;
while(true){
    total+=i;
    if(total>=100){
        break;
    }
    i++;
    console.log(total+" + "+i+" = "+total);

}
