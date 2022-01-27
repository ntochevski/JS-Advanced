function deleteByEmail() {
    let inputElementValue = document.querySelector('input[name = "email"]');
    let tdEmailElement = document.querySelectorAll('tbody tr');
    let result =  document.getElementById('result');
    let isDelite = false;
   for (const tr of tdEmailElement) {
       let currentEmail = tr.lastElementChild.textContent;
       if (inputElementValue.value == currentEmail) {
           tr.remove(true);
           isDelite = true;
       }
   }
   if (isDelite) {
      result.textContent = 'Deleted';
   } else {
    result.textContent = 'Not found.';
   }
   inputElementValue.value = '';
}