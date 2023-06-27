function numberSquarePattern() {
    let string = "";
    for (let i = 1; i <= 3; i++) {
        for (let j = 1; j <= 4; j++) {
                string += i;
        }
        string += "\n";
    }
    return console.log(string);
}
alphabetSquarePattern();