function extract(content) {
    let pattern = /\((.+?)\)/g;
    let text = document.getElementById(content).textContent;
    let matches = pattern.exec(text);
    let arr = [];

    while (matches) {
        arr.push(matches[1]);
        matches = pattern.exec(text);
    }
    return arr.join('; ');
}
