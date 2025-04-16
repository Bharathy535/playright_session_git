// Task 1 - 1. Write a program to print the first 10 numbers in the Fibonacci sequence.
console.log("Task 1__Fibonacci sequence");

//function declaration
function fibonacci(n: number): number[] {
    let fibonacciSeries: number[] = [0, 1];
    for (let i = 2; i < n; i++) {
        fibonacciSeries[i] = fibonacciSeries[i - 1] + fibonacciSeries[i - 2];
    }
    return fibonacciSeries;
}
//function call     
console.log(`Fibonacci sequence of numbers is ` + fibonacci(10));

//Task 2 - 2. Create a program that prints all prime numbers between 1 and 100.
console.log("Task 2__Prime numbers between 1 and 100");
//function declaration
function primeNumbers(n:number): boolean{
if(n<=1){
    return false;
}
return true; //Need to work on prime numbers logic
}

//Task 3 - Write a program to reverse a string using a loop.
console.log("Task 3__Reverse a string using loop");
function reverseString(str:String): String{
    let reversedString = '';
    //Reverse iteration using for loop
    for(let i=str.length-1;i>0;i--){
        reversedString += str[i];
    }
    return reversedString;
}
//function call
console.log(`Reversed string is `+reverseString('Handling loops in TS'));

//Task 4 - Implement a program to calculate the factorial of a given number using a loop.
console.log("Task 4__Factorial of a number using loop");
function factorial(n: number): number {
    let factorialOfNumbers=1;
    for(let i=1;i<=n;i++){
        factorialOfNumbers *=i
        };
        return factorialOfNumbers;
}
//function call
console.log(`Factorial of 3 is`+factorial(3));

//Task 5 - Write a program to generate a multiplication table for numbers 1 to 10.
console.log("Task 5__Multiplication table for numbers 1 to 10");
function multiplicationTable(n:number):void{
    for(let i=1;i<=10;i++){
        let row ='';
        for(let j=1;j<=10;j++){
            row +=`${i}*${j}`;
        }
        console.log(row);
    }
}

multiplicationTable(10);



