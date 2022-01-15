function solve(str) {
    let result = [];
    let patern = /\w+/g;
    let matches = str.match(patern);
    for (const el of matches) {
        result.push(el.toUpperCase());
    }
    console.log(result.join(', '));
}

solve('hello')