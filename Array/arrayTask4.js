/**
 * ### 4. Checking if it's an Array

**                  Instructions:**

1. Create different variables, each containing either an array or a non-array value.

2. Now use isArray to check if each variable is an array.

3. Print a message to the console indicating whether each variable is an array or not.

 */

    const numbers= [1,2,3,4,5,6,7];
    const check = Array.isArray(numbers);
    if(check){
        console.log(`It's an Array`);
    }else{
        console.log(`It's not an Array`);
    }
    
  /**
   * we also use this shorthand 
      console.log(Array.isArray(numbers));
   */
