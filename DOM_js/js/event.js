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

   // option 5 
   const pinkBtn = document.getElementById('btn-pink');
       pinkBtn.onclick = pink ;
       function pink(){
        document.body.style.backgroundColor = 'pink';
       }