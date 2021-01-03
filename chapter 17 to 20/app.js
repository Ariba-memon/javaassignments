var multiArray = [[0, 1, 2, 3], [1, 0, 1, 2], [2, 1, 0, 1]];


for (var x = 1; x <= 10; x++) {
    document.write(x+"<br/>");
}
var num = prompt("Enter the number to print its multiplication table");
var length = prompt("Enter the length of multiplication table");

document.write("Multiplication table of "+num+"<br/>");
document.write("Length "+length+"<br/><br/>");

for (var x = 1; x <= length; x++) {
    document.write(num+" × "+x+" = "+(num*x)+"<br/>");
}
var fruits = ["apple", "banana", "mango", "orange", "strawberry"];
                            
for (var x = 0; x < fruits.length; x++) {
    sss.innerHTML += (fruits[x]+"<br/>");
}

for (var x = 0; x < fruits.length; x++) {
    sss.innerHTML += ("Element at index "+x+" is "+fruits[x]+"<br/>");
}
document.write("Counting:<br/>");
for(var x=1; x <= 15; x++){
  document.write(x+", ");
}

document.write("<br/><br/>Reverse counting:<br/>");
for(var x=10; x >= 1; x--){
  document.write(x+", ");
}

document.write("<br/><br/>Even:<br/>");
for(var x=0; x <= 20; x+=2){
  document.write(x+", ");
}

document.write("<br/><br/>Odd:<br/>");
for(var x=1; x <= 20; x+=2){
  document.write(x+", ");
}

document.write("<br/><br/>Series:<br/>");
for(var x=2; x <= 20; x+=2){
  document.write(x+"k, ");
}
var arr = ["a", "b", "c", "d", "e"];
var user = prompt("Welcome to ABC Bakery. What do you want to order?");
var available = false;

for (var i = 0; i < arr.length; i++) {
  if (arr[i] === user) {
      document.write(user+" is <strong>available</strong> at index "+arr.indexOf(user)+" in our bakery.");
      available = true;
  }
}

if(!available){
  document.write("We are sorry. "+user+" is <strong>not available</strong> in our bakery.");
}

var A = [24, 53, 78, 91, 12];
var largestNum = Math.max.apply(Math, A);

document.write("Array items: "+A+"<br/>");
document.write("The largest number is "+largestNum);

var A = [24, 53, 78, 91, 12];
var smallestNum = Math.min.apply(Math, A);

document.write("Array items: "+A+"<br/>");
document.write("The smallest number is "+smallestNum);

for(x=5; x <= 100; x+=5){
    document.write(x+", ");
  }