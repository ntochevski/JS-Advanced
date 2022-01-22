function solve(arr) {
    let heroes = [];
    arr.forEach(x => {
        let [name, level, ...rest] = x.split(' / ');
        let items = [];
        if (rest.length) {
            
            let item = rest[0].split(', ');
            item.forEach(x => items.push(x));
        }
            let hero = {
                name,
                level: Number(level),
                items,
            };
            heroes.push(hero)
        });
    console.log(JSON.stringify(heroes));
}
