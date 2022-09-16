// Changing Case
// Q01
var inp = prompt("Enter your Name in small Letter");
var ans = inp.toUpperCase(inp);
alert(ans);

// Q02
var inp = prompt("Enter your Name in Capital Letter");
var ans = inp.toLowerCase(inp);
alert(ans)

// Strings: measuring length and extracting parts
// Q01


// Q02



// Strings: finding segments
// Q01
var name = "pakistani";
document.write(name.indexOf("n"))

// Q02
var inp = prompt("enter username");
var check = inp.includes("@")
var check1 = inp.includes("!")
var check2 = inp.includes(".")
var check3 = inp.includes(",")
var _new;
if(_new = check || check1 || check2 || check3){
    document.write("<br/>"+"<br/>"+"Enter Valid username")
}else{
    document.write("<br/>"+"<br/>"+"correct")
}

// Q03



// Strings: finding a character at a location
// Q01
var inp = "pakistani";
document.write(inp.charAt(3))



// Strings: replacing characters
// Q01
var string = "Hyderabad";
alert(string.replace("Hyder" , "Islam"))

// Q02
var string = "Ali and Sami are best friends. They play cricket and football together";
alert(string.replace(/and/g , "&"))


// Rounding numbers
// Q01
var num = +prompt("Enter positive number with decimal points")
document.write("<br/>"+"<br/>"+num)
document.write("<br/>"+ Math.round(num))
document.write("<br/>"+ Math.floor(num))
document.write("<br/>"+ Math.ceil(num))

// Q02
var num = +prompt("Enter negative number with decimal points")
document.write("<br/>"+"<br/>"+num)
document.write("<br/>"+ Math.round(num))
document.write("<br/>"+ Math.floor(num))
document.write("<br/>"+ Math.ceil(num))


// Generating random numbers
// Q01
var dice = Math.floor(Math.random() * 6) + 1;
document.write("<br/>"+"<br/>",dice)

// Q02
var toss = Math.floor(Math.random() * 2) + 1;
if(toss === 2){
    document.write("<br/>"+"<br/>","Head")
}else{
    document.write("<br/>"+"<br/>","Tails")
}

// Q03
var secret1 = +prompt("Guess the Number")
var secret = Math.floor(Math.random() * 10) + 1;
if(secret1 === secret){
    document.write("<br/>"+"<br/>","Congratulate")
}else{
    document.write("<br/>"+"<br/>","Better Luck Next Time")
}



// Converting strings to integers and decimals
// Q01
var weight = +prompt("Enter your Weight");
document.write("<br/>"+"<br/>"+"a. "+Math.round(weight))
document.write("<br/>"+"b. "+Math.round(weight)+"kgs")
document.write("<br/>"+"c. "+weight.toFixed(2)+"kgs")
document.write("<br/>"+"c. "+weight.toFixed(2)+"kilograms")


// Converting strings to numbers, numbers to strings
// Q01
var waoo = "472"
var waoo1 = Number(waoo)
document.write("<br/>"+"<br/>"+typeof(waoo1))

// Q02
var waoo = 35.36;
var striing = waoo.toString()
document.write("<br/>"+"<br/>"+striing.replace(".",""))


// Controlling the length of decimals
// Q01
var percentage = 30 / 45 * 100; 
document.write("<br/>"+"<br/>"+percentage.toFixed(2))






// Date Methods
// Q01
var date = new Date;
document.write("<br/>"+"<br/>"+date)

// Q02
var date = new Date;
var months = ["January","February","March","April","May","June","July","August","September","October","November","December"]
var _newDate = date.getMonth()
document.write("<br/>"+"<br/>"+ months[_newDate])

// Q03
var date = new Date;
var week = ["Sun","Mon","Tue","Wed","Thu","Fri","Sat"]
var _newDate = date.getDay()
document.write("<br/>"+"<br/>"+ week[_newDate])

// Q04
var date = new Date;
var week = ["Sun","Mon","Tue","Wed","Thu","Fri","Sat"]
var _newDate = date.getDay()
var newday = week[_newDate]
if (newday == "Sat" || "Wed" ){
    document.write("<br/>"+"<br/>"+"It’s Fun day")
}

// Q05
var date = new Date;

var _newDay = date.getDate()
if(_newDay <= 15){
    document.write("<br/>"+"<br/>"+"First fifteen days of the month")
}else{
    document.write("<br/>"+"<br/>"+"last days of the month")
}

// Q06
var date = new Date;
var _newDay = date.getTime()
var min = _newDay/1000
var min1 = min/60
document.write("<br/>"+"<br/>"+"Current Date: " + date)
document.write("<br/>"+"Elaped milliseconds since January 1, 1970: " + min)
document.write("<br/>"+"Elaped minutes since January 1, 1970: " + min1)

// Q07
var date = new Date;
var _newDay = date.getHours()
if(_newDay <= 12){
    document.write("It's AM")
}else{
    document.write("It's PM")
}

// Q08
var laterDate = new Date('12-31-2020')
document.write("<br/>"+"<br/>"+laterDate)

// Q09
var specidaydate = new Date('06-18-2015');
var todaydate = new Date('03-22-2023');
var a = (todaydate.getTime())
var b = (specidaydate.getTime())
var age_in_milSec = a-b;
var sec  = Math.round(age_in_milSec/1000)
var min  = Math.round(sec/60)
var hour  = Math.round(min/60)
var day  = Math.round(hour/24)
document.write("<br/>","<br/>",day +" days have passed since 1st Ramdan, 2015")

// Q10
var specidaydate = new Date('01-01-2015');
var todaydate = new Date('12-05-2015');
var a = (todaydate.getTime())
var b = (specidaydate.getTime())
var age_in_milSec = a-b;
var sec  = Math.round(age_in_milSec/1000)
document.write("<br/>","<br/>","On reference date "+ todaydate)
document.write("<br/>",sec, " seconds had passed since begining of 2015")

// Q11

// Q12

// Q13
var inp = +prompt("Enter Your Age")
var date = new Date()
var year = (date.getFullYear()-inp)
document.write("<br/>","<br/>","Your age is "+ inp)
document.write("<br/>"+"Your birth year is "+ year)

// Q14
var Name = prompt("Enter Your Name")
var Unit = +prompt("Enter Your Number of Units")
var charges = 16; 
var late = 350;
var date = new Date()
var months = ["January","February","March","April","May","June","July","August","September","October","November","December"]
var _newDate = date.getMonth()
document.write("<br/>"+"<br/>"+"K-Electric Bill")
document.write("<br/>"+"<br/>"+"Customer Name: "+ Name)
document.write("<br/>"+"Month: "+ months[_newDate])
document.write("<br/>"+ "Number of units: " + Unit)
document.write("<br/>"+ "Charges per unit: " + charges)
document.write("<br/>"+"<br/>"+ "Net Amount Payable (within Due Date): "+ Unit*charges)
document.write("<br/>"+ "Late payment surcharge: " + late)  
document.write("<br/>"+ "Gross Amount Payable (after Due Date): " + ((Unit*charges)+late))  






// Function
// Q01
function date(){
    var date = new Date;
    document.write("<br/>"+"<br/>"+date)
}
date()

// Q02
function name(){
    var Fname = prompt("enter your First name")
    var Lname = prompt("enter your Last name")
  
    document.write("<br/>"+"<br/>"+"Assalam-o-Alaikum Mr. "+Fname +" " + Lname+" How are you Sir!")
  }
  name()

//   Q03
function sum(){
    var a = +prompt("Enter first value");
    var b = +prompt("Enter second value");
    var c = (a+b);
    return c;
}
document.write(sum())

// Q04
function newFunc(){

    var num1 = +prompt("Enter First VAlue")
    var operator = prompt("Enter Operator")
    var num2 = +prompt("Enter Second VAlue")
    
    if(operator == "+"){
        document.write("<br/>"+"<br/>"+num1+num2)
    }
    else if(operator == "-"){
        document.write("<br/>"+"<br/>"+num1-num2)
    }
    else if(operator == "*"){
        document.write("<br/>"+"<br/>"+num1*num2)
    }
    else if(operator == "/"){
        document.write("<br/>"+"<br/>"+num1/num2)
    }
    }
    newFunc()


// Q05
function square(){
    var inp = +prompt("Enter your argument")
    return inp*inp;
}
document.write("<br/>"+"<br/>"+square())

// Q06
function fact(){
    var number = +prompt("Enter a positive integer: ");
    if (number === 0) {
        document.write("<br/>"+"<br/>"+"The factorial of "+number+" is 1.");
    }
    else {
        var fact = 1;
        for (i = 1; i <= number; i++) {
            fact *= i;
        }
        document.write("<br/>"+"<br/>"+"The factorial of "+number+" is "+fact);
    }
    }
    fact()

// Q07
function fact(){
var fvalue = +prompt("Enter starting number");
var evalue = +prompt("Enter ending number");

for(var i=fvalue; i<=evalue; i++){
    document.write("<br/>"+"<br/>"+i)
}
}
fact()

// Q08
function multi(){
    var base = +prompt("Enter Value of Base")
    var perp = +prompt("Enter Value of Perpendicular")
    
        function square(){
            var basee = (base*base)
            var perpen = (perp*perp)
            var hypo = (basee+perpen)
    
           
            document.write("<br/>"+"<br/>"+hypo)
    }
    square()
    }
    multi()

    // Q09
    function A()
{
    var wid = +prompt("Enter Width")
    var heig = +prompt("Enter Height")
    var A = (wid*heig)
    return A;

}
document.write("<br/>"+"<br/>"+A())

// Q10
// Q11
// Q12
// Q13

// Q14


