/***
 * 
         **      nested if-else 
 * create a javaScript program that calculates the body mass index BMI and assings a health category based on the BMI value . used nested if else statement to determine the health catagory .
 * - Calculate BMI using the formula : BMI = weight (kg) / (height (m)) ^ 2
 * - BMI  < 18.5 you are underweight . 
 * - BMI >= 18.5 And BMI 24.9 , you are normal .
 * - BMI >=  25 and BMI 29.9 , you are overweight .
 * - Otherwise , you are obese .
 */

// create variable for weight height and BMI

let weight = 61 , height = 1.71 , bmi ;
bmi = ( weight / (height)**2 ) ;

// display user height weight and bmi 
console.log("Height : "+height+" m");
console.log("Weight : "+weight+" kg");
console.log("BMI : "+bmi.toFixed(2));
// assings and report 
if(bmi < 18.5){
    console.log("you are underwight");
}else if(bmi >= 18.5 && bmi <= 24.9){
    console.log("you are normal ");
}else if(bmi >= 25 && bmi <= 29.9){
    console.log("you are overweight");
}else {
    console.log("you are obses");
}
