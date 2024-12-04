//general loops knowledge in Javascript
function isPrime(num) { 
    if (num <= 1) { 
        console.log("Not a prime number");
        return;
    }

    for (let i = 2; i <= Math.sqrt(num); i++) { 
        if (num % i === 0) { 
            console.log( "Your input: " + num + "Not a prime number");
            return;
        }
    }
    console.log( "Your input: " + num + " Yes, it's a prime number");
}

// Example Usage
isPrime(12); // Output: Not a prime number
isPrime(7);  // Output: Yes, it's a prime number
