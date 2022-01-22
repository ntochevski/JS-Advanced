function solve(arr) {
    let obj = {};
    for (const el of arr) {
        let [name, product, price] = el.split(' | ');
        if (!obj.hasOwnProperty(product)) {
            obj[product] = [];
        }
        obj[product].push({ [name]: price });
    }
    let entries = Object.entries(obj);

    for (const el of entries) {
        let zz = el[1].sort((a, b) => {
            a = Object.entries(a);
            b = Object.entries(b);
            return a[0][1] - b[0][1];
        });


    }
    for (const el of entries) {
        let name = el[0];
        let arr = Object.entries(el[1][0]);
        let city = arr[0][0];
        let pr = arr[0][1];
        console.log(`${name} -> ${pr} (${city})`);
    }

}
solve(['Sample Town | Sample Product | 1100',
    'Sample Town | Orange | 7',
    'Sample Town | Peach | 1',
    'Sofia | Orange | 3',
    'Sofia | Peach | 2',
    'New York | Sample Product | 1099',
    'New York | Burger | 10']);