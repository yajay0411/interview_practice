const toFindDuplicates1 = (arry) => arry.filter((item, index) => arry.indexOf(item) !== index)
const duplicateElements = toFindDuplicates1([1, 1, 2, 5, 4, 3, 5, 6, 8, 8, 9]);
console.log(duplicateElements);
//33333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333
function toFindDuplicates2(arr) {
    let sorted = arr.slice().sort((a, b) => { return a - b });
    // console.log(sorted);
    let duplicate = [];

    for (let i = 0; i < sorted.length - 1; i++) {
        if (sorted[i + 1] === sorted[i]) {
            duplicate.push(sorted[i]);
        }
    }
    console.log(duplicate);
}
toFindDuplicates2([1, 1, 2, 5, 4, 3, 5, 6, 8, 8, 9]);
