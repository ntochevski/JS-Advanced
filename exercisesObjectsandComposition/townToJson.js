function solve(arr) {
    arr.shift();
    let towns = [];
    for (const line of arr) {
        let [Town, Latitude, Longitude] = line.slice(2, -2).split(' | ');
        Latitude = Number(Number(Latitude).toFixed(2));
        Longitude = Number(Number(Longitude).toFixed(2));
        let obj = {
            Town,
            Latitude,
            Longitude
        };
       towns.push(obj);
    }
    console.log(JSON.stringify(towns));
}
