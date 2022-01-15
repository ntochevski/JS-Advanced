function solve(arr) {
    arr.sort((a, b) => a - b);
    let middle = Math.ceil(arr.length / 2);
    let result = arr.slice(-middle);
    return result;
}

