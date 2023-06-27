const findMissing = (num) => {
    const max = Math.max(...num); // Will find highest number
    const min = Math.min(...num); // Will find lowest number
    const missing = [];

    for (let i = min; i <= max; i++) {
        if (!num.includes(i)) {
            missing.push(i);
        }
    }
    return missing;
}

console.log(findMissing([1, 2, 15]));