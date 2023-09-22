// const num = 5;

// for (let i = 0; i <= num; i++){
//     console.log(i);
// }
// -------------------------------------------------------------------------

// let sum =0;
// n = 100;

// for (let i = 1; i <= n; i++){
//     sum +=i;
// }
// console.log(`sum:`, sum);
// ----------------------------------------------------------------------------

// let time = 10;

// if (time < 10) {
//     console.log(`Good morning`);
// }
// else if (time < 20) {
//     console.log(`Good evening`);
// }
// else {
//     console.log(`Good afternoon`);
// }

// console.log(time) = 8;
// console.log(9);
// console.log(1);
// --------------------------------------------------------------------------------------

// function isSpeedLimit(value) {
//     if (value < 60) {
//         return (`Good Safe Driwing`);
//     }

//     if (value > 65) {
//         let a = 0;
//         a = (value - 60) / 5;
//         console.log(a);

//         if (a || c >= 25) {
//             return (`Your licence cancel`);
//         }

//         if (a >= 15) {
//             let c = 0;
//             c = a * 2;
//             console.log (c);

//             if (c >= 20){
//                 return (`Your are driwing overspeed limit get penallity ` + c);
//             }

//         }

//         else {
//             return (`You crossed speed limit get penallity ` + a);
//         }

//     }
// }

// let check = isSpeedLimit(150);
// console.log(check);
// ----------------------------------------------------------------------------------------------------------------------

// function isOddOrEvenNumber(num){

//     for (num=0; num<=10; num++){

//         if (num % 2 ===0){
//             console.log(`${num} Even Number`);
//         }
//         else{
//             console.log(`${num} Odd Number`);
//         }
//     }
// }

// isOddOrEvenNumber(10);
// -------------------------------------------------------------------------------------------------

// function isNumValid (num){
//     if (isNaN(num)){
//         console.log(`${num} varible is not a number`);
//     }
//     else{
//         console.log(`${num} variable is a valid number`);
//     }
// }

// isNumValid(10);
// isNumValid(`one`);
// isNumValid(`two`)
// -----------------------------------------------------------------------------------------------------------

// function findLargest (num1, num2){
//     if (num1 > num2){
//         console.log(`${num1} is largest than ${num2}`);
//     }

//     else if (num2 > num1){
//         console.log(`${num2} is Largest than ${num1}`);
//     }

//     else {
//         console.log(`${num1} is equal to ${num2}`);
//     }
// }

// findLargest (10,9);
// ------------------------------------------------------------------------------------------

// function findLargestnum(num1, num2, num3){
//     if (num1 > num2 && num1 > num3){
//         console.log(`${num1} is Largest than ${num2} and ${num3}`)
//     }

//     else if (num2 > num1 && num2 > num3){
//         console.log (`${num2} is Largest than the ${num1} and ${num3}`);
//     }

//     else {
//         console.log(`${num3} is Largest Number`);
//     }
// }

// findLargestnum(10, 9,8);
// findLargestnum(12, 13, 11);
// findLargestnum(11, 10, 50)
// --------------------------------------------------------------------------------------------------------

// function isTriagleEqulateralIsolatedScalence(side1, side2, side3){
//     if ((side1==side2) && side2==side3){
//         console.log(`Trigle is Equlateral`);
//     }

//     else if (side1==side2 || side2==side3 || side1==side3){
//         console.log(`Trigle is Isolated`);
//     }

//     else {
//         console.log(`Trigle is Scalence`);
//     }
// }

// isTriagleEqulateralIsolatedScalence (10,10,19);
// isTriagleEqulateralIsolatedScalence (12,12,12);
// isTriagleEqulateralIsolatedScalence (90,89,76);
// --------------------------------------------------------------------------------------------

// function checkLeapYear(year){
//     if (((year % 4 ===0 && year % 100 !==0) || year % 400===0)){
//         console.log(`${year} is Leap year`);
//     }

//     else{
//         console.log(`${year} is not Leap year`);
//     }
// }

// checkLeapYear(2011);
// checkLeapYear(2012);
// checkLeapYear(2013);
// checkLeapYear(2014);
// checkLeapYear(2015);
// checkLeapYear(2016);
// checkLeapYear(2018);
// -----------------------------------------------------------------------------------------------------------

// function sumOfMultipleValue(num){
//     let sumOfMultipleValue = 0;

//     for (let i=0; i<=num; i++){

//         if (i % 3===0 || i % 5===0){
//             console.log(i);
//             sumOfMultipleValue +=i;
//         }
//         console.log(`sumOfMultipleValue of 3 & 5 upto ${num}  is `, sumOfMultipleValue);
//     }
// }
// sumOfMultipleValue(12);
// // -----------------------------------------------------------------------------------------------------------------

// function sumOfMultipleValue(curLimit){

//     let sumOfMultipleValue = 0;

//     for( let i= 1; i <= curLimit; i++){
//         if(i % 3 ===0 || i % 5 ===0){
//             // console.log(i);
//             sumOfMultipleValue +=i;
//         }
//     }
//     console.log(`sumOfMultipleValue of 3 & 5 upto ${curLimit} digit is:`, sumOfMultipleValue)
// }

// sumOfMultipleValue(10);
// ---------------------------------------------------------------------------------------------------------------------------


// let rows = 10;

// // pattern variable carries the final pattern in string format
// let pattern = "";

// // outer loop runs for `rows` no. of times
// for (let n = 1; n <= rows; n++) {
//    // inner loop runs for n
//    for (let num = 1; num <= n; num++) {
//       pattern += num;
//    }

//    // Add a new line character after contents of each line
//    pattern += "\n";
// }
// console.log(pattern);
// -----------------------------------------------------------------------------------------------------------------------------

// var changetext = document. getElementById(`changetext`);
// console.log(changetext);
// headertitle.textContent =`change`


// function sumOfMultipleValue(num){
//    if (num % 2 ===0 & num % 4 ===0){
//       return (`The num ${num} is divisible by 2 & 4 `);
//    }

//    else {
//       return (`The num ${num} is not divisible by 2 & 4 `);
//    }
// }

// check1 = sumOfMultipleValue(20);
// console.log(check1);
// ---------------------------------------------------------------------------------------------------------

// function isSpeedLimit(speed){
//    if (speed < 70){
//       return (`Good safe driwing`);
//    }

//    if (speed > 70){
//       let a =0;
//       b = (speed - 70) /5;

//       if(speed > 120){
//          return (`Your liecense cancelled`);
//       }
//       else {
//          return (`your penality point is ` + b);
//       }
//    }
// }

// check = isSpeedLimit (65);
// console.log(check);
// check1 = isSpeedLimit (80);
// console.log(check1);
// check2 = isSpeedLimit (130);
// console.log(check2);
// ----------------------------------------------------------------------------------------------


// function isSpeedLimit(speed) {
//     if (speed < 70) {
//         // console.log(`Good safe driwing`);
//         return (`Good Safe Driwing`);
//     }

//     if (speed > 70) {
//         a = 0;
//         b = (speed - 70) / 5;
//         // console.log(b);

//         if (b > 9) {
//             return (`Your licence is cencelled`);
//         }

//         else {
//             return (`your pentally point is ` + b);
//         }

//     }


// }

// // check = isSpeedLimit (69);
// // console.log (check);
// // check1 = isSpeedLimit (80);
// // console.log (check1);
// check2 = isSpeedLimit (115);
// console.log (check2);
// ------------------------------------------------------------------------------------------------------------------

// function checkAge(age) {
//     if (age >= 18) {
//         // console.log (`Permission Granteed`);
//         return true;
//     }

//     else {
//         return confirm (`You need to get permission to your parent`);
//     }
// }

// let age = prompt(`How old are You `)

// if (checkAge(age)) {
//     alert(`access granted`);
// }

// else {
//     alert(`access denied`);
// }


// check = checkAge (17);
// alert (check);
// check1 = checkAge(20);
// alert (check1);
// ------------------------------------------------------------------------------------------------------------------

// function sum (a,b){
//     return a + b;
// }

// function sub (c,d){
//     return c - d;
// }

// function mul (e,f){
//     return e * f;
// }

// function div (g,h){
//     return g / h;
// }

//  let firstNumber = prompt (`enter your first no.`);
// let secondNumber = prompt (`enter your second no.`);

// firstNumber = Number (firstNumber);
// secondNumber = Number (secondNumber);
// console.log (typeof(firstNumber));
// console.log (typeof(secondNumber));

// let Addition = sum(firstNumber, secondNumber);
// Additionresult = firstNumber + secondNumber;
// alert ("The result of addition is  " + Additionresult);

// let substraction = sub (firstNumber, secondNumber);
// subtractionresult = firstNumber - secondNumber;
// alert (`The result of substraction is ` + subtractionresult);
// ------------------------------------------------------------------------------------------------------------------------

function showMessage (){
    let message = 'Hello Altaf';
    console.log(message);
}

let greeter = `hi`;
let hello = `hey hi`;
let times = 4;

if (times > 3){
    let hello = "say hello instead";
    console.log(hello);
}