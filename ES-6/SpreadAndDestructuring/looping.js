const numbers= [1,2,3,4,5,6,7,8];
// for (let i=0 ;i<number.length ; i++){console.log(i)}
//while
for(const num of numbers){
    console.log(num);
}

// on string 
const nobab = 'siraj ud doula ';
for(const char of nobab){
    console.log(char)
}

//object 
const glass = {
    name:'glass',
    color:'golden',
    price: 12,
    isCleaned:true 
};
for(const key in glass){
    const value = glass[key];
    console.log(key,value);
}
//optional using for of 
const keys = Object.keys(glass);
console.log(keys);
for(const key of keys){
    console.log(key)
}
const  values = Object.values(glass);
console.log(values)
for(const value of values ){
    console.log(value);
}