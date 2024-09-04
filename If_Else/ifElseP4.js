/**
            **      nested if-else 
    if you get more then 80 then inside your friend score .
        if your friend get more than 80 . then go for a lunch .
        if your friend get below 80 but greater than or equal 60 then tell your friend , good luck next time .
        if your friend get below 60 but more than or equal 40 then , keep your friend's message unseen .
        if your friend get less than 40 , block your friend .
    if you get less than 80 go to the home and sleep and act sad .

    note : nested if-else 
 */
// declear and assing variable 
let myMark = 90 , fdMark = 60 ;
// dicision making process 
    if(myMark >= 80 && myMark <= 100){

        if(fdMark >= 80 && fdMark <= 100) {
        console.log("go for a lunch.");
        }else if(fdMark >= 60 && fdMark <= 79){
            console.log("good luck next time  .");
        }else if(fdMark >= 40 && fdMark <= 59){
            console.log("message unseen .");
        }else if(fdMark >=0 && fdMark <= 39){
            console.log("blockd");
        }else{
        console.log("Friend mark is  invalid . ");

        }

    }else if(myMark >= 0 && myMark <= 79){
    console.log("go to the home and sleep and act sad .");
    }
    else{
        console.log("My mark is invalid .");
    }