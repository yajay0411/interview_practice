function downwardRightStarPattern(n) {
    let string = "";
    for (i = 0; i <= n; i++) {
        for (let k = 0; k < i; k++) {
            string += " ";
          }
        for (j = 0; j < n - i; j++) {
            string += "*";
        }
        string += "\n";
    }
    console.log(string);
}
downwardRightStarPattern(5);