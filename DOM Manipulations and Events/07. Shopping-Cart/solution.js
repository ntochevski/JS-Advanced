function solve() {
   document.getElementsByClassName('shopping-cart')[0].addEventListener('click', onClick);
   function onClick(e) {
    console.log(e.target.parentNode.parentNode);
   }
}