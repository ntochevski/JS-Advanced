function solve(n, k) {
    let result = [1];
    for (let i = 1; i < n; i++) {
      let numbers = result.slice(-k);
      let sum = 0;
      for (const num of numbers) {
          sum += num;
      }
      result.push(sum);
    }
    return result;
}

