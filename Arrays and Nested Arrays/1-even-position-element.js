function solve(arr) {
    let result = arr.filter((x, i) => {
        if (i % 2 == 0) {
            return x;
        }
    })
    console.log(result.join(' '));
}