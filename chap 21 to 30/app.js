// Write a program that takes user input. Convert and show the input
// in capital letters.
var userInput = prompt("Write a word");
alert("User Input: " + userInput + "\n" + "Upper case: " + userInput.toUpperCase());
// 2. Write a program that takes user input. Convert and show the
// input in title case.
var userInput = prompt("Write a word");
var firstWord = userInput.slice(0,1);
var remWords = userInput.slice(1);
alert("User input: " + userInput + "\n" + "Title case: " + firstWord.toUpperCase() + remWords);


// Strings: measuring length and extracting parts
// 1. Write a program to take a user input about his favorite mobile
// phone model. Find and display the length of user input in your
// browser.
var favMobile = prompt("What is your favorite mobile phone model?");
alert("My favorite phone is: " + favMobile + "\n" + "Length of string: " + favMobile.length);

// Write a program to display the last character of a user input.

var userInput = prompt("Enter Some Text");
alert("User input: " + userInput + "\n" + "Last character of input: " + userInput.charAt(userInput.length - 1));

// Strings: finding segments
// 1. Write a program to find the index of letter “n” in the word “Pakistani”
// and display the result in your browser.
var str = "Pakistani";
var strIndex = str.indexOf('n');
alert("String: " + str + "\n" + "Index of 'n': " + strIndex);

// 2. Write a program to take user input and store username in a
// variable. If the username contains any special symbol among (@ . ,
// !), prompt the user to enter a valid username.

var userName = prompt("Write your Username");
for (i = 0 ; i < userName.length ; i++){
    if(userName.charAt(i+1) === "@" || userName.charAt(i+1) === "." || userName.charAt(i+1) === "," || userName.charAt(i+1) === "!"){
        alert("Please Enter a Valid Username");
    }
}

// 3. You have a string “The quick brown fox jumps over the lazy
// dog”. Write a program to count number of occurrences of word “the”
// in given string.

var text = ("The quick brown fox jumps over the lazy dog");
var temp = 0;
for (var i = 0 ; i < text.length ; i++){
    if ((text.slice(i, i+3)).toLowerCase() === "the"){
        temp++
    }
    }
alert("Text: " + text + "\n" + "There are " + temp + " occurrence(s) of word 'the' ");

// Strings: finding a character at a location

// 1. Write a program to find the character at 3 rd index in the word
// “Pakistani” and display the result in your browser.

var str = "Pakistani";
var charIndex = str.charAt(3);
alert("String: " + str + "\n" + "Character at index 3: " + charIndex);


// Strings: replacing characters
// 1. Write a program to replace the “Hyder” to “Islam” in the word
// “Hyderabad” and display the result in your browser.

var oldText = "Hyderabad";
var newText = oldText.replace("Hyder", "Islam");
alert("City: " + oldText + "\n" + "After replacement: " + newText);

// 2. Write a program to replace all occurrences of “and” in the string
// with “&” and display the result in your browser.

// var message = “Ali and Sami are best friends. They play cricket and
// football together.”;
var message = "Ali and Sami are best friends. They play cricket and football together.";
var newMessage = message.replace(/and/g, "&");
alert("Message: " + message + "\n" + "After replacement: " + newMessage);


      // rounding numbers
//       1. Write a program that takes a positive integer from user & display the following in your browser.
// a. number
// b. round off value of the number
// c. floor value of the number
// d. ceil value of the number

var inputPositve = Number(prompt("Write Positve Number"));
var roundOffValue = Math.round(inputPositve);
var floorValue = Math.floor(inputPositve);
var ceilValue = Math.ceil(inputPositve);
alert("number: " + inputPositve + "\n" + "round off value: " + roundOffValue + "\n" + "floor value: " + floorValue + "\n" + "ceil value: " + ceilValue);

// 2. Write a program that takes a negative floating point number
// from user & display the following in your browser.
// a. Number (example number: -2.678 )
// b. round off value of the number
// c. floor value of the number
// d. ceil value of the number

var inputPositve = Number(prompt("Write Negative Number"));
var roundOffValue = Math.round(inputPositve);
var floorValue = Math.floor(inputPositve);
var ceilValue = Math.ceil(inputPositve);
alert("number: " + inputPositve + "\n" + "round off value: " + roundOffValue + "\n" + "floor value: " + floorValue + "\n" + "ceil value: " + ceilValue);



// Generating random numbers

// 1. Write a program that simulates a dice using random() method of JS
// Math class. Display the value of dice in your browser.

var randomNumber = Math.random();
randomNumber = Math.ceil(randomNumber * 6);
alert("random dice value is: " + randomNumber);

// 2. Write a program that simulates a coin toss using random() method
// of JS Math class. Display the value of coin in your browser.
// 2 = Heads and 1 = Tails

var randomNumber = Math.random();
randomNumber = Math.ceil(randomNumber * 2);
var coinToss = ["Error", "Tails", "Heads"]; 
alert(randomNumber + "\nrandom coin value is: " + coinToss[randomNumber]);

// 3. Write a program that stores a random secret number from 1 to 10 in a
// variable. Ask the user to input a number between 1 and 10. If the user input
// equals the secret number, congratulate the user.

var randomNumber = Math.random();
randomNumber = Math.ceil(randomNumber * 10);
var userInput = Number(prompt("Enter a number between 1 and 10"));
if (userInput !== randomNumber){
    alert("Try again!\nCorrect answer was: " + randomNumber);
}else{
    alert("Congrats... You've guessed correct!");
}

//        Converting strings to integers and decimals

// 1. Write a program that asks the user about his weight. Parse the user
// input and display his weight in your browser.
// Possible user inputs can be:
// a. 50
// b. 50kgs
// c. 50.2kgs

// d. 50.2kilograms

var temp = false;
var userInput = prompt("Enter your weight in kilograms");
for(var i = 0 ; i < userInput.length ; i++){
    if(userInput.slice(i, i+4) === " kgs"){
        userInput = userInput.slice(0, i) + " kilograms";
        temp = true;
        break;
    }else if(userInput.slice(i, i+3) === "kgs"){
        userInput = userInput.slice(0, i) + " kilograms";
        temp = true;
        break;
    }else if(userInput.slice(i, i+10) === " kilograms"){
        temp = true;
        break;
    }else if(userInput.slice(i, i+9) === "kilograms"){
        userInput = userInput.slice(0, i) + " kilograms";
        temp = true;
        break;
    }
}
if (temp === false){
    userInput = userInput + " kilograms";
}
alert("The weight of user is " + userInput);


// Converting strings to numbers, numbers to strings

// 1. Write a program that converts a string “472” to a number 472.
// Display the values & types in your browser.
// Hint: (use typeof())
var str = "472";
var strNumb = Number(str);
alert("Value: " + str + "\n" + "Type: " + typeof(str) + "\n" + "Value: " + strNumb + "\n" + "Type: " + typeof(strNumb));

// Write a program that converts the variable num to string.
// var num = 35.36 ;
// Remove the dot to display “3536” display in your browser.

var num = 35.36 ;
var numToString = num.toString();
var newText = numToString.replace(".", "");
alert("Number: " + num + "\n" + "Result: " + newText);

// 1. Write a program to control the length of decimals to 2.
// var percentage = 30 / 45 * 100; -> 66.66666666666666

var str = num.toString();
 if (str.charAt(str.length - 1) === "5") {
 str = str.slice(0, str.length - 1) + "6";
 }
 num = Number(str);
 prettyNum = num.toFixed(2);