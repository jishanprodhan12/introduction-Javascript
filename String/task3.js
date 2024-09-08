/*
        *### Task-3: 
       const string = "hi i am jishan and i love fimu";
    Check whether a string contains all the vowels `a`, `e`, `i`, `o`, `u` 
 */
    const string = "hi i am jishan and i love fimu";
    const vowels = ['a', 'e', 'i', 'o', 'u'];
    const lowerStr = string.toLowerCase();
    let allVowelsPresent = true;
    
    // Use a for loop to check if each vowel is in the string
    for (let i = 0; i < vowels.length; i++) {
      if (!lowerStr.includes(vowels[i])) {
        allVowelsPresent = false;
        break; // Exit the loop if any vowel is missing
      }
    }
    
    if (allVowelsPresent) {
      console.log("The string contains all the vowels.");
    } else {
      console.log("The string does not contain all the vowels.");
    }
    
   