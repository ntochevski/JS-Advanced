function solve() {
  let text = document.getElementById('text').value;
  let convention = document.getElementById('naming-convention').value;
  text = text.toLowerCase().split('');
  let result = [];
  if (convention == 'Camel Case') {
    let isUpperCase = false;
    for (let letter of text) {
      if (isUpperCase) {
        letter = letter.toUpperCase();
        result.push(letter)
        isUpperCase = false;
        continue;
      }
      if (letter !== ' ') {
        result.push(letter);
      } else {
        isUpperCase = true;
      }
    }
  } else if (convention == 'Pascal Case') {
    let isBig = true;
    for (let letter of text) {
      if (isBig) {
        letter = letter.toUpperCase();
        isBig = false;
      }
      if (letter === ' ') {
        isBig = true;
        continue;
      }
      result.push(letter);
    }
  } else {
    result = ['Error!'];
  }
  document.getElementById('result').textContent = result.join('');
}