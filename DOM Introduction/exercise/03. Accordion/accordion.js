function toggle() {
   let button = document.querySelector('.button');
   let hide = document.querySelector('#extra');
   if (button.textContent == 'More') {
       button.textContent = 'Less';
       hide.style.display = 'block';
   }else if (button.textContent == 'Less') {
       button.textContent = 'More';
       hide.style.display = 'none';
   }
}