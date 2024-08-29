/* qn-2: write a programe to calculate the avarage marks of mathematics , biology , chemistry , physics and Bangla of a student . 
input : The frist line of the input is the marks of the five subjects mentions above respectively .
output : print the result is 2 decimal place */ 

// lets solve it 

let mathematics =43 ; biology = 50 ; chemistry = 55 ; physics = 80 ; Bangla = 85;
let avarage = (mathematics +biology+chemistry+physics+Bangla )/5;
console.log("mathematics = "+mathematics);
console.log("biology = "+biology);
console.log("chemistry = "+chemistry);
console.log("physics = "+physics);
console.log("Bangla = "+Bangla);
console.log("avarage of the five subject is : "+avarage.toFixed(2));