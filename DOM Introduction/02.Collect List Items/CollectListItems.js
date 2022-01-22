function extractText() {
    let result = [];
    let arr = Array.from(document.querySelectorAll('#items li'));
    for (const el of arr) {
        result.push(el.textContent);
    }
    document.getElementById('result').value = result.join('\n');
}