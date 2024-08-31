/**
    **             Ticket fare calculator 
            - Children ( age < 10 ): free 
            - Students get a 50% discount 
            - Senior citizens ( age >= 60 ) gets a 15% discount 
            - Otherwise regular ticket fare 800 tk 

    })
 */


 let ticket = 800 , dis ,age = 68;
 let isChildren = "children" ;
 let isStudent = "student" ;
 let seniorCityzens = "senior" ;
 let isSeniorCityzens ;
 if(age >= 60){
    isSeniorCityzens = true ;
 }else{
    isSeniorCityzens = false;
 }
 let isRegular = "regular" ;
 let ticketType ;
 console.log("children");
 console.log("student");
 console.log("senior");
 console.log("regular");

    const readline = require('readline');
//create an interface for input and output 
    const rl =readline.createInterface({
        input: process.stdin ,
        output: process.stdout 
    });
// prompt user for input 
 rl.question('chose your ticket type and age : ',(input) => {
      ticketType = input ;

    //   console.log(`you : ${input}`);
    rl.close();
    console.log("*******************")
    
 if( ticketType == isChildren){
    console.log("Ticket free ");
 }else if(ticketType == isStudent){
     dis = ticket / 2 ;
     ticket = ticket - dis ;
    console.log("ticket price for student "+ticket+" tk");
 }else if(ticketType==seniorCityzens){
    if(isSeniorCityzens){   
     dis = ticket * 0.15 ;
     ticket = ticket - dis ;
    console.log("ticket price for Senior citizens "+ticket+" tk");
    }else{
    console.log("you are not senior cityzen");
    }
 }else if(ticketType == isRegular){
    console.log("ticket price is "+ticket+" tk");
 }
 }); 

