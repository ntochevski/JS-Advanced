function solve(...input) {
    let num = Number(input.shift());
    let obj = {
        chop: (num) => num /2,
        dice: (num) => Math.sqrt(num),
        spice: (num) => num + 1,
        bake: (num) => num * 3,
        fillet: (num) => num - (num * 0.20),  
    };
    while (input.length !== 0) {
        let current = (input.shift());
        num = obj[current](num);
        console.log(num);
    }
}

solve('9', 'dice', 'spice', 'chop', 'bake', 'fillet' );