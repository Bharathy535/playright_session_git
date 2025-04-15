// Task 1 - 1. Write a program to print the first 10 numbers in the Fibonacci sequence.
console.log("Task 1__Fibonacci sequence");

//function declaration
function fibonacci(n: number): number[] {
    let fibSeries: number[] = [0, 1];
    for (let i = 2; i < n; i++) {
        fibSeries[i] = fibSeries[i - 1] + fibSeries[i - 2];
    }
    return fibSeries;
}
//function call     
console.log(`Fibonacci sequence of numbers is ` + fibonacci(10));
