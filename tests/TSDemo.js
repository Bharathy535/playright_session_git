//Task 1 - Declare a variable with a specific type, e.g., `username` (`string`) and `score` (`number`).
console.log('Task 1');
var inputName = 'Bharathy Munusamy';
var score = 220;
console.log("userName is " + inputName, '&', 'score is ' + score);
//Task 2 - Declare a variable that uses a union type and can hold either a number or a string.
// console.log('Task 2');
// let unionValue = number | string; //Getting error error TS2693: 'number' only refers to a type, but is being used as a value here.
// unionValue = 24;
// console.log(unionValue);  
//Task 3 - Create an array of numbers and print each number in the array.
console.log('Task 3');
var arrayOfNumbers = [2, 4, 6, 8, 10, 12];
for (var i = 0; i < arrayOfNumbers.length; i++) {
    console.log(arrayOfNumbers[i]);
}
//Task 4 - Subtraction with Type Declaration:- Declare 2 variables `num1` & `num2` with type `number`. Assign values to them and print their difference
console.log('Task 4');
var num1 = 18;
var num2 = 8;
var differenceOfNumbers = num1 - num2;
console.log("Difference of ".concat(num1, " & ").concat(num2, " is ") + differenceOfNumbers);
//Task 5 - Average Calculation:Create a variable `scores` that holds an array of numbers. Calculate and print the average of the numbers in the array.
console.log('Task 5');
var sum = 0;
var scores = [3, 6, 9, 12, 15, 18];
for (var i = 0; i < scores.length; i++) {
    sum += scores[i];
}
console.log(sum);
var average = sum / scores.length;
console.log('Average of numbers is ' + average);
//Task 6 - Area of a Circle:Declare a variable `radius` with type `number`. Use it to calculate the area of a circle (πr²) and print the result. Use `Math.PI` for the value of π.
console.log('Task 6');
var radius = 2;
var areaOfCircle = Math.PI * radius * radius;
console.log('Area of the circle ' + areaOfCircle);
