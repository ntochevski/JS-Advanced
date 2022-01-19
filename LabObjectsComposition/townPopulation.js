function solve(arr) {
    let towns = {};
    for (const line of arr) {
        let [name, population] = line.split(' <-> ');
        if (!towns[name]) {
            towns[name] = 0;
        }
        towns[name] += Number(population);
       
    }
   let keys = Object.keys(towns);
   keys.forEach(x => console.log(`${x} : ${towns[x]}`));
}
