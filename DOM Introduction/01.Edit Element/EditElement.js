function editElement(input, match, replacer) {
    let text = input.textContent;
    let pattern = new RegExp(match, 'g');
    text = text.replace(pattern, replacer);
    input.textContent = text
}