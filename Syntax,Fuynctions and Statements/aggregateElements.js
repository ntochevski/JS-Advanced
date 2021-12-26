function solve(arr) {
    let sum = 0;
    let suma = 0;
    let concat = '';
   
    for (const num of arr) {
        sum += num;
        suma += 1 /num;
        concat += num;
    }
    console.log(sum);
    console.log(suma);
    console.log(concat);
}