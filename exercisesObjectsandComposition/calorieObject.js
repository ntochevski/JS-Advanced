function solve(arr) {
    let obj = {};
    arr.forEach((x, i) => {
        i % 2 == 0 ? obj[x] = 0 : obj[arr[i - 1]] += Number(x);
    });
    console.log(obj);
}
