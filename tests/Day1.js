//Task 1-Declare var `name` & assign it a string value. Declare variables `age` (number) & `isStudent` (boolean)
console.log('Task 1');
userName = 'Bharathy';
age = 20;
isStudent = true;
console.log('Name of the user is '+userName,'&','Age of the user is ' +age, '|','Type of isStudent is '+typeof isStudent);

//Task 2-Use `const` to declare a variable for a constant value (e.g., the speed of light). 
//Use `let` for another variable representing a changeable value
console.log('Task 2')
const constantValue ='the speed of light';
let changeableValue = 'Dispersion of light';
//constantValue ='new string'; ( Error occured when another value for assigned for const variable)
console.log('Constant value '+constantValue,'&','Changeable value '+changeableValue);

//Task 3-Create two string variables `firstName` and `lastName`. Concatenate them and print the full name.
console.log('Task 3');
firstName ='Bharathy';
lastName ='Munusamy';
fullName = firstName+' '+lastName;
console.log('Full name is '+fullName);

//Task 4-Addition: Declare two variables `a` and `b` with numeric values. Print their sum to the console.
console.log('Task 4_Direct Addition');
firstNumber = 2;
secondNumber = 4;
sum = firstNumber+secondNumber;
console.log('First number is '+firstNumber, 'Second number is '+secondNumber, 'Sum of the two numbers is '+sum);

//Using the method readline to get input from user as i got error using prompt
console.log('Task 4_Get input from user and then perform Addition');
const readline = require('readline');
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});
//Asking for inputs
rl.question('Enter the first number: ', (num1) => {
    rl.question('Enter the second number: ', (num2) => {
        //convert inputs to numbers & add them
        let sum = parseFloat(num1) + parseFloat(num2);
        console.log(`The sum of ${num1} and ${num2} is: ${sum}`);
        rl.close();
    });
});

//Task 5-Multiplication-Declare variable `x` with the value of 10 and `y` with value of 15.Print the result
console.log('Task 5');
x = 10;
y = 15;
console.log('Multiplication value of 2 numbers is '+x*y);

//Task 6-Perimeter of Rect:Declare 2 variables length & width.Assign values & calculate perimeter, Print result
console.log('Task 6');
length = 6;
width = 3;
Perimeter = 2*(length+width);
console.log('Perimeter of rectangle '+Perimeter);
console.log('added for git')