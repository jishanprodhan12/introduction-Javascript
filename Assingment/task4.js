
function calculateFinalScore(obj) {
    if(typeof obj !== 'object'){
        return "Invalid Input" ;
    }
    console.log("ok")
}
const test = calculateFinalScore( { name: "Rajib", testScore: 15,  schoolGrade: 25, isFFamily : true  });
console.log(test);