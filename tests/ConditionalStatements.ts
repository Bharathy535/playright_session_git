//Task 1 - Write a program to check if a given number is odd or even.
console.log("Task 1__odd_even|Hardcoded value");
//variable declaration
let j:number = 23;
//variable assign & conditional statement
if(j%2==0){
    console.log("It is a even number");
}
else{
    console.log("It is a odd number");
}

console.log("Task 1__odd_even|calling a function");
//function declaration
function checkOddOrEven(num: number): string {
    if (num % 2 === 0) {
        return "Even";
    } else {
        return "Odd";
    }
}

console.log(checkOddOrEven(3)); // returns odd
console.log(checkOddOrEven(4)); // returns even

//Task 2 - Create a function that takes a grade and returns whether it is "Pass" or "Fail" based on a threshold value.
console.log("Task 2_check grade based on threshold value");
//function declaration
function checkGrade(grade, threasholdValue =40){
    if(grade>=threasholdValue){
        return "Pass";
    }
    else{
        return "Fail"
    }
}
//function call
    console.log(checkGrade(42)); //returns "Pass"
    console.log(checkGrade(35)); //returns "Fail"

//Task 3 - Write a program to determine the type of triangle (equilateral, isosceles, or scalene) based on its sides.
console.log("Task 3_determine the type of triangle");
//variable declaration
let side1 = 5;
let side2 = 5;
let side3 = 8;

//conditional statements to determine the type of triangle
if (side1 === side2 && side2 === side3) {
    console.log("The triangle is Equilateral.");
} else if (side1 === side2 || side2 === side3 || side1 === side3) {
    console.log("The triangle is Isosceles.");
} else {
    console.log("The triangle is Scalene.");
}

//Task 4 - 4. Implement a program to check if a string is a palindrome or not.

console.log("Task 4_check if a string is a palindrome or not");

function isPalindrome(str: string): boolean {
    let originalStr = str.toString();
    let reversedStr = originalStr.split('').reverse().join('');
    return reversedStr === originalStr;
}

console.log(isPalindrome("level")); // true
console.log(isPalindrome("hello")); // false

//Task 5 - 5. Write a program that checks if a given year is a leap year.
console.log("Task 5_check if a given year is a leap year");
//variable declaration      
function isLeapYear(year: number): string {
    if ((year % 4 === 0 && year % 100 !== 0) || (year % 400 === 0)) {
        return "Is a leap year";
    } else {
        return "It is not a leap year";
    }
}

console.log(isLeapYear(2024)); // Is a leap year
console.log(isLeapYear(2025)); // It is not a leap year