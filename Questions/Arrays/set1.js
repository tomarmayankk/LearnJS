/***********************EASY SET WITH SIMPLE QUESTIONS***************************/ 

//program to find the largest element in an array
function findLargest(arr){
    if(arr.length <=0){
        return null;
    }

    let max = arr[0];
    for(let i = 0; i<arr.length; i++){
        if(arr[i] > max){
            max = arr[i];
        }
    }
    return max;
}
console.log(findLargest([ 2, 122, 3, 4, 4, 6, 9, 13, 7]))

//program to find the kth largest and smallest element in an array
function kthLargest(arr, n){
    if(arr.length === 0 || n > arr.length || n <=0 ){
        return "invalid input"
    }

    const sorted = [...arr].sort((a, b) => a - b)

    const kthSmallest = sorted[n-1];
    const kthLargest = sorted[sorted.length - n];

    return {kthLargest, kthSmallest}
}

console.log(kthLargest([10, 20, 5, 8, 100], 2))


//program to reverse an array
function reverseArr(arr){
    let reverse = []
    for(let i = arr.length-1; i>=0; i--){
        reverse.push(arr[i])
    }
    return reverse
}

console.log(reverseArr([10, 20, 5, 8, 100]))


//program to sort an array in descending order
function sortArr(arr){
    return arr.sort((a, b) => b - a);
}

console.log(sortArr([5, 2, 9, 1, 5, 6]))