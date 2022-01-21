function solve(arr) {
    let towns = {};
    for (const town of arr) {
        let [name, population] = town.split(' <-> ');
        if (!towns.hasOwnProperty(name)) {
            towns[name] = 0;   
        }
        towns[name] += Number(population);
    }
    console.log(towns);
}

solve(['Istanbul <-> 100000', 

'Honk Kong <-> 2100004', 

'Jerusalem <-> 2352344', 

'Mexico City <-> 23401925', 

'Istanbul <-> 1000'] )