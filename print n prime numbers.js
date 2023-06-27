// Function to generate first n primes
function generatePrime(n) {
    let count = 0, i = 2;
    let isPrime;
    while (count < n) {
        isPrime = true;
        for (let j = 2; j <= Math.sqrt(i); j++) {
            if (i % j === 0) {
                isPrime = false;
                break;
            }
        }
        if (isPrime) {
            console.log(i);
            count++;
        }
        i++;
    }
}

// Function call 1
generatePrime(10);

// // Function call 2
// generatePrime(2);
