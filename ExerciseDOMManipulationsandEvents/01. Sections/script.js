function create(input) {
   let content = document.getElementById('content');
   let words = input;
   for (const word of words) {
      let divElement = document.createElement('div');
      divElement.addEventListener('click', onClick);
      let pElement = document.createElement('p');
      pElement.style.display = 'none';
      pElement.textContent = word;
      divElement.appendChild(pElement);
      content.appendChild(divElement);
   }

   function onClick(e) {
   e.target.lastElementChild.style.display = '';
   }
}