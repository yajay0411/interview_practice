function leftStarPattern(n) {
  let string = "";
  for (let i = 0; i <= n; i++) {
    for (let k = 0; k < i; k++) {
      string += "*";
    }
    string += "\n";
  }
  console.log(string);
}
leftStarPattern(5)
