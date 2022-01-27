function validate() {
 document.getElementById('email').addEventListener('change', onChange);
 let pattern = /[a-z]+@[a-z]+\.[a-z]+/;
 function onChange(e) {
     let input = e.target.value;
     let match = input.match(pattern);
    if (match) {
        e.target.classList.remove('error');
    } else {
        e.target.classList.add('error');
    }
 }
}