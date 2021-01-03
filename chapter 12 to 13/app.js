var num = parseInt(prompt("Enter a number.."));
if(num%3 === 0){
  alert(num+" is divisible by 3")
}
else{
  alert(num+" is not divisible by 3")
}
var num = parseInt(prompt("Enter a number.."));
if(num%2 === 0){
  alert(num+" is a even number.");
}
else{
  alert(num+" is a odd number.");
}
var age = parseInt(prompt("Enter your age.."));
if(age>18){
  alert("Old enough");
}
else{
  alert("Too young");
}
var name = prompt("Hi, I am Ariba. Whats your name?");
if(name == "Ariba"){
  alert("Hehe, We both are Ariba :)");
}
var num  = prompt("Enter a number..");
switch (num%3) {
    case 0:
        alert(num+" is divisible by 3");
        break;
    default: 
        alert(num+" is not divisible by 3");
}
var user  = prompt("Enter a number..");
var code = user.charCodeAt(0);
if(code >=65 && code<=90){
  alert(user+" is a uppercase character");
}
else if(code >=97 && code<=122){
  alert(user+" is a lowercase character");
}
else if(isNaN(user) === false && user){
  alert(user+" is a number.");
}
else{
  alert(user+" is a not number, uppercase letter or lower case letter.");
}
var num1 = parseInt(prompt("Enter the first number.."));
var num2 = parseInt(prompt("Enter the second number.."));
var operation = prompt("What do you want? e.g (+, -, *, /, %)");

switch (operation) {
    case "+":
        alert(num1+" + "+num2+" = "+(num1+num2));
        break;
    case "-":
        alert(num1+" - "+num2+" = "+(num1-num2));
        break;
    case "*":
        alert(num1+" x "+num2+" = "+(num1*num2));
        break;
    case "/":
        alert(num1+" ÷ "+num2+" = "+(num1/num2));
        break;
    case "%":
        alert(num1+" % "+num2+" = "+(num1%num2));
        break;
    default: 
        alert("Oops! Something went wrong!");
}
var time =  prompt("Please enter time in 24 hour format.. (e.g. 1650)");

if(time >= 0000 && time < 1200){
  alert("Good morning!")
}
else if(time >= 1200 && time < 1700){
  alert("Good afternoon!")
}
else if(time >= 1700 && time < 2100){
  alert("Good evening!")
}
else if(time >= 2100 && time < 2359){
  alert("Good night!")
}
else{
  alert("Invalid time!")
}
