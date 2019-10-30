//Implement a function that outputs all even integers between 2 and 100. //
console.log("Loop 1: ");

function loop1() {
    for (var i = 2; i <= 100; i+=2) {
        console.log(i);
    }
}
loop1(100);

//Implement a function that outputs all integers from 1 to a number given as argument.
function printNumbers(howMany){
    for(let i=0; i<=howMany; i++){
        console.log(i);

    }
}
printNumbers(9);

//Implement a function that outputs all integers from a number given as argument to another number given as argument.
let givenArgs = (j,k) => {
    for(i= j, i<=k; i++;){
        console.log(i);
    }
};


//Implement function printSquare(sideLength)j that prints a square using the printStarsfunction. For example, call printSquare(4) outputs:

console.log("Loop 5");

function printStars(sideLength) {
    for (var i = 0; i < sideLength; i++) {
        console.log('*')
    }

}
printStars(1);

//mplement function printRectangle(width, height)j that prints a rectangle using the printStars  function. For example, call printRectangle(17,3) outputs: *************** *************** **************


console.log("Loop 6:");
function printRectangle(width, height) {
    for (var i = 0; i < height; i++) {
        printStars(width);
    }
}
printRectangle(1, 1);

//Implement function printTriangle(size) that prints a rectangle using the printStarsfunction. For example, call printTriangle(5) outputs: * * ** ** ***

console.log("Loop 7:");
function printTriangle(size) {

    for (var i = 1; i <= size; i++) {
        printStars(i);
    }
}
printTriangle(5);

//Implement function seriesSum(n) that returns the sum 1+2+3+...+n where n is an integer given as argument. Output the sum of integers from 1 to 100.
console.log("Loop 8:");

function loop8(height) {
    for (var i = 0; i < height; i++) {
        printStars(i);
    }
}
loop8(10);

//Implement function factorial(n)j that return the factorial of integer n. The formula for factorial is n! = 1*2*3*...*n. Additionally, it is defined that the factorial of 0 is 1, that is 0! = 1. Output the factorial of integer 10.


//Implement a function that outputs heading texts. Then implement a function that calls all the functions above and adds heading texts for each exercise output.