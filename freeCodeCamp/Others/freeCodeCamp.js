// Working with string

let greeting = "hello";
console.log(greeting[1]); // In this example, we can access the character at index 1, which is 'e'.
console.log(greeting[greeting.length - 1]); // In this case, the length of hello is 5, and the last character (o) is at index 4 which is 5 - 1. 'o'.

let firstTwo = greeting[1] + greeting[2]; // "el"
console.log(firstTwo);

let poem = "Roses are red,\nViolets are blue,\nJavaScript is fun,\nAnd so are you.";
console.log(poem);
// The same ^→↓
let poemm = `Roses are red,
Violets are blue,
JavaScript is fun,
And so are you.`;
console.log(poemm);

let statement = "She said, \"Hello!\"";
console.log(statement); // She said, "Hello!"


//The indexOf() method in JavaScript allows you to search for a substring within a string.

//let sentence = "JavaScript is awesome!";
//let position = sentence.indexOf("awesome!");
//console.log(position); // In this example, the word awesome starts at index 14

//Now, let's see what happens when the substring isn't found:
//let position = sentence.indexOf("fantastic");
//console.log(position); // Since the word fantastic does not appear in the string, the method returns -1.

//You can also specify where to begin searching within the string by providing a second argument to indexOf(). Here's an example:
let sentence = "JavaScript is awesome, and JavaScript is powerful!";
let position = sentence.indexOf("JavaScript", 10);
console.log(position); // 27

console.log("freeCodeCamp".indexOf("F")) // In this example, the following would return -1 because the capital letter F is not found in the string freeCodeCamp

// METHODS

// charCodeAT() 
let letter = "Alexandra";
console.log(letter.charCodeAt(1)) // return ASCCI value '108'

// fromCharCode()
let search_letter = String.fromCharCode(108);
console.log(search_letter); // return the ASCII value 'l'_

// include()
let phrase = "JavaScript is awesome!";
let result = phrase.includes("awesome");
console.log(result); // return true if found the argument or otherwise false
// check for a substring starting at a specific index in the string by providing a second parameter:
let other_result = phrase.includes("is", 10);
console.log(other_result);

// slice()
let message = "Hello, world fun!";
let world = message.slice(7);
console.log(world);  // world!
let lastWord = message.slice(-4);
console.log(lastWord);  // fun!
let reverse_message = message.split("").reverse().join("");
console.log(reverse_message); // !nuf dlrow ,olleH

// toUpperCase() and toLowerCase().
let upper_message = message.toUpperCase();
console.log(upper_message); // HELLO, WORLD FUN!
let lower_message = message.toLowerCase();
console.log(lower_message); // hello, world fun!

// trim(), trimStart(), and trimEnd()
let whitespace = "   Hello, world!   ";
let _trim = whitespace.trim();
let _trimStart = whitespace.trimStart();
let _trimEnd = whitespace.trimEnd();
console.log(_trim);
console.log(_trimStart);
console.log(_trimEnd);

// replace()
let text = "I love JavaScript!";
console.log(text); // "I love JavaScript!"
let newText = text.replace("JavaScript", "coding");
console.log(newText);  // "I love coding!"


// repeat()
let word = "Hello!";
let repeatedWord = word.repeat(3);
console.log(repeatedWord);  // "Hello!Hello!Hello!"
