function spiral(matrix) {
    const arr = [];

    while (matrix.length) {
        arr.push(
            ...matrix.shift(),
            ...matrix.map(a => a.pop()),
            ...(matrix.pop() || []).reverse(),
            ...matrix.map(a => a.shift()).reverse()
        );
    }
    return console.log(arr);
}
spiral([[1, 2, 3, 4], [14, 15, 16, 5], [13, 20, 17, 6], [12, 19, 18, 7], [11, 10, 9, 8]]);

