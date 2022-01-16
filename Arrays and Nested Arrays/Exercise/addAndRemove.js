function solve(arr) {
    let num = 1;
    let newArr = [];
    arr.forEach(x => x == 'add' ? newArr.push(num++): newArr.pop(num++));
   newArr.length > 0 ? console.log(newArr.join('\n')) : console.log(`Empty`);
}

solve(['remove',  

'remove',  

'remove'] );