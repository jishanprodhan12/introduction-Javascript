// option 1 
// <button onclick="console.log('hello')">print on console </button>
//  option 2  
// <button onclick="document.body.style.backgroundColor = 'green' ">Make green</button>
// option 3 
function makeRed (){
    document.body.style.backgroundColor = 'red';
 }
//  option 4  most of the  time we use it 
 document.getElementById('btn-blue').addEventListener('click',function(){
    document.body.style.backgroundColor = 'blue';
   })