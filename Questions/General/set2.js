/***********************MEDIUM LEVEL QUESTIONS***************************/ 

//program to reverse a number
function reversed(num){
    let reversed = 0;
    while(num!=0){
        let digit = num % 10;
        reversed = reversed * 10 + digit;
        num = Math.floor(num/10)
    }
    return reversed;
}
console.log("reversed number: " + reversed(1234))


//find the sum of digits of a number
function sumOfdigits(num){
    let sum = 0;
    while(num!=0){
        let digit = num % 10;
        sum = sum + digit;
        num = Math.floor(num/10);
    }
    return sum
}
console.log("sum of digits: " + sumOfdigits(1234))


//palindrome number program 
function isPalindrome(num){
    if(reversed(num) == num){
        return true
    }else return false
}
console.log("is the number palindrome: " + isPalindrome(1221))