function arrayMinMax(array) {
    var numbers = array;
    // console.log(numbers)
    var sorted = numbers.slice("").sort((a, b) => { return a - b; });
    // console.log(sorted)
    var duplicate = sorted.slice("").filter((item, index) => { return sorted.indexOf(item) === index; });
    // console.log(duplicate)

    var smallest = duplicate[0],
        secondSmallest = duplicate[1],
        secondLargest = duplicate[duplicate.length - 2],
        largest = duplicate[duplicate.length - 1];

    console.log('Smallest: ' + smallest);
    console.log('Second Smallest: ' + secondSmallest);
    console.log('Second Largest: ' + secondLargest);
    console.log('Largest: ' + largest);
}
arrayMinMax([1, 3, 3, 5, 7, 9, 45, 23])