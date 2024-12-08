/***********************JAVASCRIPT MAP, FILTER AND REDUCE METHODS***************************/ 

//map - map is function in javascript which maps the complete array, as shown in the given example 
function mapTheArray(){
    const numbers = [1, 2, 3, 4, 5]
    const squares = numbers.map((num) => num * num) //find the square of elements in the array
    console.log(squares)
}
mapTheArray();

//filter - Creates a new array containing only elements that satisfy a given condition (predicate function).
function filterTheArray(){
    const numbers = [1, 2, 3, 4, 5];
    const evenNumbers = numbers.filter((num) => num % 2 === 0);//filter the array with even numbers only
    console.log(evenNumbers);
}
filterTheArray();

//reduce - Reduces an array to a single value by applying a function to each element and an accumulator.
function reduceTheArray(){
    const numbers = [15, 20, 30, 40, 55];
    const sum = numbers.reduce((accumulator, currentValue) => accumulator + currentValue, 0);
    console.log(sum);
}
reduceTheArray();
