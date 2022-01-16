function solve(arr) {
    arr.sort((a, b) => a - b);
    let newArr = [];
    let index = 0;

    while (arr.length) {
        let current = 0;
        if (index % 2 == 0) {
            current = arr.shift();
        } else if (index % 2 != 0) {
            current = arr.pop();
        }
        newArr.push(current);
        index++;
    }
    return newArr;
}
