/*
 *          *task-2
 * Write the following Sentence in three lines and print the  resultt
 * I am a web developer I love to Code  I love to eat biryani
 */
  //  fokira way  or not the best way 1
const string = ' I am a web developer \n I love to code \n I love to eat biryani ';
console.log(string);
//fokira way 2 
const string2 = 'I am a web developer \n'+'I love to code \n'+'I love to eat biryani';
console.log(string2);
//best pratice or best case using templet (`backtick`) 
const Sentence = `I am a web developer. 
I love to code .
I love to eat biryani .`
console.log(Sentence);
