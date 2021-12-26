function solve(input) {
    let result = '';
    typeof(input) === 'number' ? result = (Math.pow(input, 2) * Math.PI).toFixed(2) : 
    result = `We can not calculate the circle area, because we receive a {type of argument}.`;
    console.log(result);
}

