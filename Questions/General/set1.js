/***********************EASY SET WITH SIMPLE QUESTIONS***************************/ 

//check that the number is positive or negative 
function Check(num) {
    if( num < 0){
        console.log("the given number is negative")
    } else if(num == 0){
        console.log("the given number is 0") 
    }else {
         console.log("the number is positive")
    }
}

Check(0); //calling the function

//check that the given number is even or odd
function evenOrOdd(num){
    if(num == 0 || num == 1){
        console.log("the given number is odd")
        return;
    }

    if(num % 2 == 0){
        console.log("the given number is even")
    }else console.log("the given number is odd")
}

evenOrOdd(12); //calling the function


//print the sum of first n natural numbers
function sumOfn(num){
    let sum = 0;
    for(i = 1; i<=num; i++){
        sum = sum + i;
    }
    console.log(sum);
}

sumOfn(10); //calling the function

//check that the given year is leap year or not
function isLeap(year){
    if(year % 400 == 0 ){
        console.log("the given year is leap year")
    }
    else if(year % 4 == 0 && year % 100 != 0){
        console.log("the given year is leap year")
    }else console.log("not a leap year")
}

isLeap(2024); //calling the function


//check that a number is prime or not
function isPrime(num){
    if(num <=1) return false

    for(i = 2; i<=Math.sqrt(num); i++){
        if(num % i === 0){
            return false;
        }
    } return true
}
console.log(isPrime(12)) //calling the function

//print the prime number in a given range
function printPrime(lower, upper){
    for(let i = lower; i<= upper; i++){
        if(isPrime(i) == true){
            console.log(i);
        }
    }
}

printPrime(1, 10);


