function addItem() {
    let listElement = document.getElementById('items');
    let inputTextElement = document.getElementById('newItemText');
    let liElement = document.createElement('li');
    let aElement = document.createElement('a');
    aElement.href = '#';
    aElement.textContent = '[Delete]'
    aElement.addEventListener('click', onClick)
    liElement.textContent = inputTextElement.value;
    liElement.appendChild(aElement);
    listElement.appendChild(liElement);
   
    function onClick() {
        liElement.remove();
    }
    
}