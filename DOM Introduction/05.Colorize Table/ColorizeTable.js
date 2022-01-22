function colorize() {
    let result = document.querySelectorAll('table tr');
    result = Array.from(result);
   for (let i = 0; i < result.length; i++) {
        if (i % 2 != 0) {
            result[i].style.background = 'teal';
       }
   }
}