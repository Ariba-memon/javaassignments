// Write a program that displays current date and time in
// your browser.

var currentDate = new Date();
alert(currentDate);

// Write a program that alerts the current month in words. For example December.
var currentDate = new Date();
var months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
var month = currentDate.getMonth();
for(var i = 0; i < months.length; i++){
    if(i === month){
    alert("Current Month: " + months[i]);
    break;
    }
}
// Write a program that alerts the first 3 letters of the current
// day, for example if today is Sunday then alert will show
// Sun.
var currentDate = new Date();
var days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
var day = currentDate.getDay();
for(var i = 0; i < days.length; i++){
    if(i === day){
    var day2 = days[i].slice(0, 3);
    alert("Today is: " + day2);
    break;
    }
}
// Write a program that displays a message “It’s Fun day” if
// its Saturday or Sunday today

var currentDate = new Date();
var days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
var day = days[currentDate.getDay()];
for(var i = 0; i < days.length; i++){
    if(day === "Sunday"){
        var day2 = "Fun" + day.slice(3);
        alert("Today is: " + day2);
        break;
    }else if(day === "Saturday"){
        var day2 = "Fun" + day.slice(5);
        alert("Today is: " + day2);
        break;
    }else{
        alert("Today is: " + day);
        break;
    }
}

// Write a program that shows the message “First fifteen
// days of the month” if the date is less than 16th of the month
// else shows “Last days of the month”
var currentDate = new Date();
var todayDate = currentDate.getDate();
if(todayDate < 16){
    alert("First fifteen days of the month");
}else{
    alert("Last days of the month");
}

// Write a program that determines the minutes since
// midnight, Jan. 1, 1970 and assigns it to a variable that
// hasn't been declared beforehand. Use any variable you like
// to represent the Date object.
var currentDate = new Date();
var milliSeconds = currentDate.getTime();
alert("Current Date: " + currentDate + "\n" + "Elapsed milliseconds since January 1, 1970: " + milliSeconds + "\n" + "Elapsed minutes since January 1, 1970: " + milliSeconds/1000/60);

// Write a program that tests whether it's before noon and
// alert “Its AM” else “its PM
var currentDate = new Date();
var time = currentDate.getHours();
if(time < 12){
    alert("It's AM");
}else{
    alert("It's PM");
}

// Write a program that creates a Date object for the last day
// of the last month of 2020 and assigns it to variable named
// laterDate.
var laterDate = new Date("December 31, 2020");
alert("Later date: " + laterDate);

// Create a date object of the starting date of this Ramadan
// and alert the number of days past since 1st Ramadan?
// Note: 1st Ramadan was on June 18, 2015
var newDate = new Date();
var firstRamzanDate = new Date("June 18, 2015");
var newDateMilli = newDate.getTime();
var firstRamzanDateMilli = firstRamzanDate.getTime();
var milliDiff = newDateMilli - firstRamzanDateMilli;
var daysCalc = Math.ceil(milliDiff / 1000 / 60 / 60 / 24) ;
alert(daysCalc + " days have passed since 1st Ramzan, 2015");

// Write a program that displays in your browser the
// seconds that elapsed between the reference date and the
// beginning of 2015.
var refDate = new Date("December 5, 2015 22:50:16");
var beginDate = new Date("January 1, 2015");
var refDateMilli = refDate.getTime();
var beginDateMilli = beginDate.getTime();
var milliDiff = refDateMilli - beginDateMilli;
var secCalc = Math.ceil(milliDiff / 1000 / 60) ;
alert(secCalc + " seconds had passed since begining of 2015");

// Create a Date object for the current date and time.
// Extract the hours, reset the date object an hour ahead and
// finally display the date object in your browser.



// Write a program that creates a date object and show the
// date in an alert box that is reset to 100 years back?
var newDate = new Date();
var yearBack = new Date();
var currentYear = newDate.getFullYear();
currentYear = currentYear - 100;
yearBack.setFullYear(currentYear)
alert("Current Date: " + newDate + "\n" + "100 years back, it was " + yearBack);

// Write a program to ask the user about his age. Calculate
// and show his birth year in your browser.

var userAge = prompt("Enter your age...")
var currentDate = new Date();
var birthYear = currentDate.getFullYear() - userAge ;
alert("Your age is " + userAge + "\n" + "Your birth year is " + birthYear);

// Write a program to generate your K-Electric bill in your
// browser. All the amounts should be rounded off to 2
// decimal places. Display the following fields:
// a. Customer Name
// b. Current Month
// DATE METHODS | JAVASCRIPT
// Page 5 of 5
// c. Number of units
// d. Charges per unit
// e. Net Amount Payable (within Due Date)
// f. Late Payment Surcharge
// g. Gross Amount Payable (after Due Date)
// Where,
var custName = prompt("Enter Customer Name");
var months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
var newDate = new Date();
var currentMont = months[newDate.getMonth()];
var totalUnits = Number(prompt("Enter Number of Units"));
var chargesUnits = Number(prompt("Enter Charges of Per Unit"));
var netAmount = totalUnits * chargesUnits;
  netAmount = Number(netAmount.toFixed(2));
var lateSurcharge = (netAmount/100)*12;
  lateSurcharge = Number(lateSurcharge.toFixed(2));
var GrossAmount = Number(netAmount + lateSurcharge);
  GrossAmount = Number(GrossAmount.toFixed(2));
var newTab = window.open();
newTab.document.write("< h1 >K-Electric Bill< / h1 >");
newTab.document.write("< p >Customer Name: " + "< strong >" + custName + "< / strong >"  +"< / p >");
newTab.document.write("< p >Month: " + "< strong >" + currentMont + "< / strong >"  +"< / p >");
newTab.document.write("< p >Number of Units: " + "< strong >" + totalUnits + "< / strong >"  +"< / p >");
newTab.document.write("< p >Charges per Units: " + "< strong >" + chargesUnits + "< / strong >"  +"< / p >");
newTab.document.write("< br / >");
newTab.document.write("< p >Net Amount Payable (within Due Date): " + "< strong >" + netAmount + "< / strong >"  +"< / p >");
newTab.document.write("< p >Late payment surcharge: " + "< strong >" + lateSurcharge + "< / strong >"  +"< / p >");
newTab.document.write("< p >Gross Amount Payable (after Due Date): " + "< strong >" + GrossAmount + "< / strong >"  +"< / p >");