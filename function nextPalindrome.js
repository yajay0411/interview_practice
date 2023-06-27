function nextPalindrome(num) {
    let input = num.toString();
    let revInput = input.toString().split("").reverse().join("");
    if (input === revInput) {
        return console.log(`Number is palindrome "${input}"`)
    }
    while (input !== revInput) {
        num++;
        input = num.toString();
        revInput = input.toString().split("").reverse().join("");
    }
    return console.log(`This number is not palindrome.Next palindrome number is "${input}"`);
}

(nextPalindrome(1211));
