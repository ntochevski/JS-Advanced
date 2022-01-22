function sumTable() {
    let text = document.querySelectorAll('table tr');
    text = Array.from(text);
    text.shift();
    let sum = 0;
    for (let i = 0; i < text.length - 1; i++) {
        sum += Number(text[i].lastElementChild.textContent);
    }
    document.getElementById('sum').textContent = sum;
}