function solve(arr) {
    let result = [];
    
       arr.forEach(x => x < 0 ? result.unshift(x) : result.push(x));
    
    console.log(result.join('\n'));
}

