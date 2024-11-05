//general Javascript program for conditional statements (if and else)

let a = -5 //check that the number is positive or not
if(a>0){
    console.log("the number is positive")
}
else if(a<0){
    console.log("the number is negative")
}
else {
    console.log("the number is zero")
}


let year = 196 //program to check that the year is leap year or not
if(year % 400 == 0){
    console.log("leap year")
}
else if(year % 4 ==0 && year % 100 != 0){
    console.log("leap year")
}
else{
    console.log("not a leap year")
}