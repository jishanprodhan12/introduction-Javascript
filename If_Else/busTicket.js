/**
    **             Ticket fare calculator 
            - Children ( age < 10 ): free 
            - Students get a 50% discount 
            - Senior citizens ( age >= 60 ) gets a 15% discount 
            - Otherwise regular ticket fare 800 tk 

    })
 */

const readline =require('readline');
//create interface 
const rl =readline.createInterface({
    input : process.stdin,
    output : process.stdout 
}) ;

// prompt user input .
rl.question('Enter your age: ',(ageInput) => {
    const age = parseInt(ageInput);
    rl.question('Are you a student ? (yes/no): ',(studentInput) => {
        const isStudent =studentInput.trim().toLowerCase() === 'yes';
        const vara = calculateVara(age ,isStudent);
        console.log(`apnar ticket vara : ${vara} taka `);
    });
    rl.close();
} ) ;
function calculateVara(age , isStudent){
    const regularVara = 800 ;
    let dis;
    if(age<10){
        return 0 ;
        console.log('tumar vara lagbo nah tumi free ');
    }else if(age>=60){
        return regularVara * 0.85 ;
    } else if(isStudent){
        return regularVara * .50 ;
    } else {
        return regularVara ;
    }
}
