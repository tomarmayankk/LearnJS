/***********************GENERALLY ASKED QUESTIONS***************************/ 

//program for fibonacci series upto nth term
function fibo(n){
    if(n<=1){
        return n;
    }
    return fibo(n-1) + fibo(n-2)
}
function printFibo(nthTerm){ //print the array of fibonacci series
    const series = [] 
    for(let i = 0; i<nthTerm;i++){
        series.push(fibo(i));
    }
    console.log(series)
}
printFibo(15);


//program to print the factorial of a number using js arrow function
const printFactorial = (n) => {
    if(n <= 1){
        return 1;
    }
    return n * printFactorial(n-1)
}
console.log(printFactorial(5))

//program to find the power of a number using while loop
function findPower(base, expo) {
    let res = 1;
    while(expo!=0){
        res = res*base;
        expo--;
    }
    return res;
}
console.log(findPower(3, 4))






