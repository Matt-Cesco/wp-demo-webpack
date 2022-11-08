
// Opening and Closing mobile menu

let icon = document.getElementById("icon");
let icon1 = document.getElementById("a");
let icon2 = document.getElementById("b");
let icon3 = document.getElementById("c");
let nav = document.getElementById('nav');
let blue = document.getElementById("blue");
let navMobile = document.querySelector('.nav-content-mobile');

icon.addEventListener('click', function() {
   icon1.classList.toggle('a');
   icon2.classList.toggle('c');
   icon3.classList.toggle('b');
   if (navMobile.classList.contains('show')) {
      navMobile.classList.remove('show');
      document.body.style.overflowY = 'scroll';
   } else {
      navMobile.classList.add('show');
      document.body.style.overflowY = 'hidden';
   }
});