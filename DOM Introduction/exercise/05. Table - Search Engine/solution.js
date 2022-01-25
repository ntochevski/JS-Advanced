function solve() {
   document.querySelector('#searchBtn').addEventListener('click', onClick);
   let information = document.querySelectorAll('tbody tr');
  let ddd = document.querySelector('#searchField');
  
  
  function onClick() {
     let serchingValue = ddd.value;
     for (const tr of information) {
      if (tr.innerHTML.includes(serchingValue)) {
         tr.setAttribute('class', 'select')
      } else {
         tr.removeAttribute('class')
      }
     }
   }
}