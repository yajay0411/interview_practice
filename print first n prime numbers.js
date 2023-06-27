// JavaScript program to display Prime numbers till N
function isPrime(num) {
    if (num == 1 || num == 0) {
        return false;
    }
    for (var i = 2; i < num; i++) {
        if (num % i === 0) {
            return false;
        }
    }
    return true;
}

function firstPrimeNumbersTillInput(input) {
    for (var i = 1; i <= input; i++) {
        if (isPrime(i)) {
            console.log(i);
        }
    }
}
firstPrimeNumbersTillInput(25);