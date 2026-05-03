// <<==============Javascript Data Type==============>>
let strType = "Black Sarker";
console.log(typeof strType);
console.log(strType);

let numType = 111;
console.log(typeof numType);
console.log(numType);

let boolType = false;
console.log(typeof boolType);
console.log(boolType);

// <<================toUpper or toLower Case Method===============>>
const bigLeter = "i'm comening!";
console.log(bigLeter.toUpperCase());

const smallLeter = "I'M COMENING!"
console.log(smallLeter.toLowerCase());

// <<================ For Exampel ===============>>
//const userInput = prompt("Write Your Capetal Text");
//console.log(userInput.toLowerCase());

// <<=========Js indexOf() Or split() =============>>
let nagative = "I Love You";
console.log(nagative.split("You"));

let position = "I Heat You";
console.log(position.indexOf("You"));

// <<=========Js parseFlot() Or parseInt() =============>>
let num1 = 22;
let num2 = 44;
let total = num1 + num2;
console.log(total);

let num3 = "22.54"; //string 
let num4 = 44;
num3 = parseFloat(num3); //convart number
let mot = num3 + num4;
console.log(mot);

let num7= "22.55"; // string
let num8 = 44;
num7 = parseInt(num7); //convart number
let mote = num7 + num8;
console.log(mote);

let num5 = 22; //int number
let num6 = 44;
num5 = " " + num5; //convart string
let result = num5 + num6;
console.log(result);

// <<=================Javasceipt Operators===================>>
let num9 = 50;
let num10 = 70;
let addition = num9 + num10;
console.log(addition);

let num11 = 50;
let num12 = 70;
let subtraction = num11 - num12;
console.log(subtraction);

let num13 = 50;
let num14 = 70;
let multiplication = num13 * num14;
console.log(multiplication);

let num15 = 30;
let num16 = 5;
let division = num15 / num16;
console.log(division);

let num17 = 30;
let num18 = 5;
let remainder = num17 % num18;
console.log(remainder);

// <<=================Javasceipt Predifined Math Function===================>>
let num20 = 10;
let num21 = 20;
let num22 = num20 - num21;
let sum = Math.abs(num22); //result Positive korbe
console.log(sum);

let num23 = 10.5;
let num24 = 20;
let num25 = num23 + num24;
let sum1 = Math.round(num25); //result 10.5 =11 korbe
console.log(sum1);

let num26 = 10.3;
let num27 = 20;
let num28 = num26 + num27;
let sum2 = Math.round(num28); //result 10.3 =10 korbe
console.log(sum2);

let num29 = 10.3;
let num30 = 20;
let ceil = num29 + num30;
let sum3 = Math.ceil(ceil); //result 10.3 =11 korbe
console.log(sum3);

let num32 = 20;
let num33 = 10.7;
let floor = num32 + num33;
let sum4 = Math.floor(floor); //result 10.7 =10 korbe
console.log(sum4);

let target = Math.random();
console.log(target);



let randomNumber= Math.random() * 10; // string
let addNumber = 1;
randomNumber = parseInt(randomNumber); //convart numb
let lock = randomNumber + addNumber;
console.log(lock); 

/*let input1 = parseFloat(prompt("Enter First Number"));
let input2 = parseFloat(prompt("Enter Sceound Number"));
let ceil1 = input1 + input2;
let sum5 = Math.ceil(ceil1); //result 10.3 =11 korbe
console.log(sum5);*/

//<<=======Logical Conditional Statement=========>>
// <<======if, else, else if or Switch ==========>>
let a = 10;
let b = 10;
if(a > b){
    console.log("One Statement");
}
else if(a < b){
    console.log("Tow Statement");
}else{
    console.log("Three Satement");
}

let x = 500;
switch(x){
    
    case 40:
        console.log("One Statement");
        break;
    case 30:
        console.log("Yow Statement");
        break;
    case 50:
        console.log("Three Statement");
        break;
    default:
        console.log("foure Statement")
}



