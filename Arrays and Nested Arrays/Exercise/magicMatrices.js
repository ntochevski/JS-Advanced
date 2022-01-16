function solve(arr) {
    let isSame = true;
    let rowSum = [];
    let colSum = [];
    for (let i = 0; i < arr.length; i++) {
        let current = arr[i];
        let currentSum = current.reduce((acc, x) => acc + x, 0);
        rowSum.push(currentSum);
        if (i == 0) {
            arr[i].forEach((x) => colSum.push(x));
        } else {
            arr[i].forEach((x, y) => {
                colSum[y] += x;
            })
        }
    }
    let firstRowSum = rowSum[0];
    for (const x of rowSum) {
        if (firstRowSum !== x) {
            isSame = false;
            break;
        }
    }

    let firstColSum = colSum[0];
    for (const x of rowSum) {
        if (firstColSum !== x) {
            isSame = false;
            break;
        }
    }
    console.log(isSame);
}
