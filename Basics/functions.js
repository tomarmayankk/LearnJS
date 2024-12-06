//creating Javascript functions

function myFunction(params) {
  //this is the general syntax of declaring a function in Javascript
} 

function printname(name){
    //simple parametrized javascript function to print the name 
    console.log(name)
}

printname("ankit")

//javascript function to check that the number is even or odd

function evenORodd(number){
    if(number % 2 ==0 ){
        console.log("the number is even")
    }
    else{
        console.log("the number is odd")
    }
}
evenORodd(9)


//arrow functions in javascript
const myfunction = (params) => {
    //function content
}


const printFactorial = (n) => {
    if(n <= 1){
        return 1;
    }
    return n * printFactorial(n-1)
}
console.log(printFactorial(5))


