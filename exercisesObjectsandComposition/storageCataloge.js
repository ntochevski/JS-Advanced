function solve(arr) {
    let char = '';
    let result = arr
        .sort((a, b) => a.localeCompare(b))
        .map(x => x.split(' : '))
        .forEach(x => {
            let currentChar = x[0][0];
            if (char !== currentChar) {
                console.log(currentChar);
            }
            console.log(`${x[0]}: ${x[1]}`);
            char = currentChar;

        })

}

solve(['Banana : 2', 

'Rubic\'s Cube : 5', 

'Raspberry P : 4999', 

'Rolex : 100000', 

'Rollon : 10', 

'Rali Car : 2000000', 

'Pesho : 0.000001', 

'Barrel : 10'] );