/**
 * *        # Task-2: 
    Count how many times a string has the letter `a` or `A`
 */

    const statement = "i am jishan and i am A hard working person";
    console.log(statement);
    let count = 0 ;
    let small = 0 , capital = 0;
    for(const str of statement){
        if( str === 'a' || str === 'A' ){
                count ++ ;
        }
        if(str === 'a'){
            small ++ ;
        }
        if(str === 'A'){
            capital ++ ;
        }
    }
    console.log('there are ',count+' times a string has the letter `a` or `A');
    console.log('there are ',small+' times a string has the letter `a`');
    console.log('there are ',capital+' times a string has the letter `A`');