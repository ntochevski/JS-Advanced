function solve(num) {
    let sum = 0;
    num = num.toString();
    for (let i = 0; i < num.length; i++) {
        sum += Number(num[i])
    }
    console.log((sum / num.length) === Number(num[0]));
    console.log(sum);
}
solve(999999999999999);