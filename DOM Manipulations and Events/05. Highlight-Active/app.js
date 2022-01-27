function focused() {
    let inputElement = document.querySelectorAll('input');
    for (const el of inputElement) {
        el.addEventListener('focus', onFocus);
        el.addEventListener('blur', onBlur);
    }

   function onFocus(e) {
       e.target.parentNode.className = 'focused';
   }
   function onBlur(e) {
    e.target.parentNode.className = 'blur'
   }
}