function search() {
   let searchingValue = document.getElementById('searchText');
   let townsArr = Array.from(document.querySelectorAll('#towns li'));
   let counter = 0;

   for (const el of townsArr) {
      if (searchingValue.value != '') {
         if ((el.textContent.includes(searchingValue.value))) {
            el.style.fontWeight = 'bold';
            el.style.textDecoration = 'underline';
            counter++;

         } else {
            el.style.fontWeight = 'normal';
            el.style.textDecoration = 'none';
         }
      }
   }
   document.getElementById('result').textContent = `${counter} matches found`
}
