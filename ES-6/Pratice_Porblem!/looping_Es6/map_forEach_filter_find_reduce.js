
const produces = [
    {id:1 , name:'lenovo', price : 65000},
    {id:2 , name:'dell', price : 45000},
    {id:3 , name:'hp', price : 40000},
    {id:4 , name:'mac', price : 165000}
]
//! map  Calls a defined callback function on each element of an array, and returns an array that contains the results.
//its return an array
//todo syntax : array.forEach(p=> code);
const names = produces.map(product => product.name);
console.log(names);
const prices = produces.map(product => product.price)
console.log(prices);
//! forEach Performs the specified action for each element in an array. 
// when we dose not need to return 
//todo syntax : array.forEach(p=> code);
produces.forEach(p=> console.log(p.id));

//! filter (conditon) return an array 
//todo syntax : array.filter(p=> condition);
const expensive = produces.filter(p=> p.price > 50000);
console.log(expensive);

//!  find only single element return
//todo syntax : array.find(p=> condition);

const affordable = produces.find(p=>p.price < 50000);
console.log(affordable);

/* reduce() have minimum two perameter first one is a call back function and second one is initial value 
*/
//! here initial value is 0 
//todo syntax : array.reduce((Acumulator,current)=>code,0);

const total = produces.reduce((previous , current )=> previous + current.price ,0);
console.log(total);
