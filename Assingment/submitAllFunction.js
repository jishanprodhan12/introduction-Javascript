function calculateTax(income, expenses) {
    if(income < 0 || expenses < 0 || income < expenses || (typeof income !=='number' || typeof expenses !== 'number') ){
      return "Invalid Input" ;
    }
    return ( income - expenses ) * .20 ;
  }

  function sendNotification(email) {
    const isEmail = email.includes('@');
   if(typeof email !== 'string' || (isEmail === false)){
      return "Invalid Input" ;
   }
   const userName = email.split('@').splice(0 , 1);
   const domainName = email.split('@').splice(1);
   const mgs = userName.concat("sent you an email from").concat(domainName);
   return mgs.join(' ') ;
}


function checkDigitsInName(name) {
    if(typeof name !== 'string'){
        return "Invalid Input" ;
    }
    for(let i = 0 ; i<name.length; i++){
        if (name[i] >= '0' && name[i] <= '9') {
            return true; 
        }
    }
    return false; 
}


function calculateFinalScore(obj) {
    if(typeof obj !== 'object'){
        return "Invalid Input" ;
    }
    if(typeof obj.name !== 'string'){
        return "Invalid name" ;
        
    }
    if(typeof obj.testScore !== 'number' || obj.testScore > 50 ){
        return "Invalid test Score" ;
    }
    if(typeof obj.schoolGrade !== 'number' || obj.schoolGrade > 30 ){
        return "Invalid school Grade " ;
    }
    let finalScore = 20 ;
    if(obj.isFFamily){
        finalScore +=obj['testScore']+obj['schoolGrade'];
    }else{
        finalScore =obj['testScore']+obj['schoolGrade'] ;
    }
    if(finalScore >= 80){
        return true;
    }
    return false ;
}


function  waitingTime(waitingTimes  , serialNumber) {
    if(!(Array.isArray(waitingTimes)) || (typeof serialNumber !== 'number')){
        return "Invalid Input" ;
    }
    if(serialNumber > waitingTimes.length){
        let avg = 0;
        for(let i=0;i<waitingTimes.length;i++){
            avg += waitingTimes[i] ;
            
        }
        avg = avg / waitingTimes.length ;
        roundAvg = Math.round(avg);
        let restPerson = serialNumber - 1;
        let restTime = restPerson - waitingTimes.length ;
         let timeLagbo = restTime * roundAvg ;
         return timeLagbo ;
    }else{
        return 'Moja nio nah serial age e ses hoiya gache ';
    }
    
}

