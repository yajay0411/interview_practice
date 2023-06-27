let NO_OF_CHARS = 256;
function canFormPalindrome(str) {
    let count = Array(NO_OF_CHARS).fill(0);
    if (str === null || str === "") {
        return console.log("please enter the input");
    }
    for (let i = 0; i < str.length; i++)
        count[str[i].charCodeAt()]++;

    let odd = 0;
    for (let i = 0; i < NO_OF_CHARS; i++) {
        if ((count[i] & 1) == 1) {
            odd++ ;
        }
        if (odd > 1) {
            return console.log("No probable palindrome");
        }
    }
    return console.log("Yes, it can form a palindrome");
}
canFormPalindrome("rraacec");