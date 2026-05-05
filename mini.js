

let userInput1 = prompt("Enter You 1st Number:");
let userInput2 = prompt("Enter You 2nd Number:");
userInput1 = parseFloat(userInput1);
userInput2 = parseFloat(userInput2);

const addition = userInput1 + userInput2;
const subtraction = userInput1 - userInput2;
const multiplication = userInput1 * userInput2;
const division = userInput1 / userInput2;
const remainder = userInput1 % userInput2;

document.write("Your addition Result :" + addition + "<br>");
document.write("Your subtraction Result :" + subtraction + "<br>");
document.write("Your multiplication Result :" + multiplication+ "<br>")
document.write("Your division Result :" + division + "<br>")
document.write("Your remainder Result :" + remainder + "<br>")