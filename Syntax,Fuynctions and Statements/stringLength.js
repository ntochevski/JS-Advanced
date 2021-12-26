function solve(...input) {
    let length = 0;
    let index = 0;
 
    input.forEach( x => {
        length += x.length;
      index++;
    });
    console.log(length);
    console.log(Math.floor(length / index));
}
