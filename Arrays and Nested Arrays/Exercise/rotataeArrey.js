function solve(arr, rotations) {
    if (rotations > arr.length) {
        rotations = Math.floor(rotations / arr.length);
    }
    for (let i = 0; i < rotations; i++) {
        let current = arr.pop();
        arr.unshift(current);    
    }
    console.log(arr.join(' '));
}

solve(['1',  

'2',  

'3',  

'4'],  

2 );