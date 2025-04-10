//Task 1 - Declare a variable with a specific type, e.g., `username` (`string`) and `score` (`number`).
console.log('Task 1');
let inputName: string = 'Bharathy Munusamy';
let score: number = 220;
console.log("userName is "+inputName, '&', 'score is '+score);

//Task 2 - Declare a variable that uses a union type and can hold either a number or a string.
// console.log('Task 2');
// let unionValue = number | string; //Getting error error TS2693: 'number' only refers to a type, but is being used as a value here.
// unionValue = 24;
// console.log(unionValue);  

//Task 3 - Create an array of numbers and print each number in the array.
console.log('Task 3');
let arrayOfNumbers: number[] = [2,4,6,8,10,12]
for (let i = 0; i < arrayOfNumbers.length; i++) {
    console.log(arrayOfNumbers[i]);
}

//Task 4 - Subtraction with Type Declaration:- Declare 2 variables `num1` & `num2` with type `number`. Assign values to them and print their difference
console.log('Task 4');
let num1:number = 18;
let num2:number = 8;
let differenceOfNumbers = num1 - num2;
console.log(`Difference of ${num1} & ${num2} is `+differenceOfNumbers);

//Task 5 - Average Calculation:Create a variable `scores` that holds an array of numbers. Calculate and print the average of the numbers in the array.
console.log('Task 5');
let sum=0;
let scores:number[] = [3,6,9,12,15,18];
for(let i=0;i<scores.length;i++){
    sum += scores[i];
}
console.log(sum)
let average=sum/scores.length;
console.log('Average of numbers is '+average);

//Task 6 - Area of a Circle:Declare a variable `radius` with type `number`. Use it to calculate the area of a circle (πr²) and print the result. Use `Math.PI` for the value of π.
console.log('Task 6');
let radius:number = 2;
let areaOfCircle = Math.PI*radius*radius;
console.log('Area of the circle '+areaOfCircle);





