function solve(arr) {
    let bigest = arr[0];
    let filtered = arr.filter((x) => {
        if (x >= bigest) {
            bigest = x;
        }
        return x >= bigest;
    })
    return filtered;
}
