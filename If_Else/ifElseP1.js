/***
 * free drinks 
 * -burger more than 500 tk : free Coke 
 * - else coke : 30 tk 
 */

let burger = 500 ;
let isExpancive ;
let owned = 1000 ;  
let buy =500;
if(owned >= buy){
    isExpancive = buy ;
}
// (owned >=buy) ? isExpancive = buy : isExpancive = 0 ;
if(burger == isExpancive){
    console.log("Congratulations you got a free coke ");
}else{
    console.log("Coke price is 30 tk ");
}