// function fibonacci_series(n) {
//     if (n === 1) {
//         return [0, 1];
//     }
//     else {
//         var s = fibonacci_series(n - 1);
//         s.push(s[s.length - 1] + s[s.length - 2]);
//         console.log(s);
//         return s;
//     }
// };

// fibonacci_series(10);


var fib = (n) => {
    let count = 2;
    let c = [0, 1];
    let a = 0;
    let b = 1;
    if (n == 0 || n == 1) return c;
    while (count <= n) {
        c.push(a + b);
        a = b;
        b = c[c.length - 1];
        count++;
        // console.log(c);
    }
    return c;
};
console.log(fib(5));