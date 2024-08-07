
// find the largest element in a nested array
let marks =[[8,9,7],[5,7,8],[6,9,7],[9,9,8]]

function largestElement(array) {
    let largest = array[0][0]
    for (let arr of array) {
        for (let num of arr) {
            if (num > largest) {
                largest = num;
            }
        }
    }
    return largest;
}

console.log(largestElement(marks))

//program to reverse a string
let str= "sivakumar"
console.log(str.split("").reverse().join(""))

//Write a JavaScript function that takes an array of numbers and returns a new array with only the even numbers.
let numbers = [92,65,78,7,9,8,6,98,67,54,34,65,48]
console.log(numbers.filter(num => num%2 === 0))

//Write a JavaScript function to check if a given string is a palindrome (reads the same forwards and backwards). 
const isPalindrome = (str) => {
    if(str === str.split("").reverse().join("")) {
       return console.log(`${str} is palindrome` )
    } else {
        return console.log(`${str} is not palindrome` )
    }
}

isPalindrome("level");
isPalindrome("table");

//Write a JavaScript program to find the maximum number in an array.
const largestNoinArr = (arr) => {
    if(arr.length === 1) {
        return arr[0]
    }
    else {
        let largest = arr[0];
        for (x of arr) {
            if(x>largest) {
                largest = x
            }
        }
        return largest 
    }
}

let arr= [67,8,9,890,0,7,6,5,456]
console.log(largestNoinArr(arr))

//Write a JavaScript program to calculate the factorial of a given number
const factorial = (num) => {
    if (num == 0 || num == 1) {
        return 1
    }
    else {
        return num * factorial(num-1)
    }
}

const num = 4
console.log(factorial(num))

//Write a JavaScript function to check if a given number is prime
function isPrime(num) { 
    if (num <= 1) return false; 
    for (let i = 2; i <= Math.sqrt(num); i++) { 
      if (num % i === 0) return false; 
    } 
    return true; 
  } 
  
console.log(isPrime(25))
console.log(isPrime(13))

//Write a JavaScript function that returns the Fibonacci sequence up to a given number of terms
function fibonacciSequence(numTerms) { 
    if (numTerms <= 0) return []; 
    if (numTerms === 1) return [0]; 
    let sequence = [0, 1]; 
    while (sequence.length < numTerms) {
        let len = sequence.length
      let nextNumber = sequence[len-1] + sequence[len-2]; 
      sequence.push(nextNumber); 
    } 
    return sequence; 
  } 

console.log(fibonacciSequence(9))

//fibonacci of Nth No using recursion
function Fib(n) {
    if(n <= 1) {
        return n
    }
    else {
        return Fib(n-1) + Fib(n-2)
    }
}

console.log(Fib(14))

