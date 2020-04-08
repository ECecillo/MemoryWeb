// DOM Elements

const darkButton = document.getElementById('dark');
const lightButton = document.getElementById('light');
const body = document.body;


// Apply the cached theme on reload

const theme = localStorage.getItem('theme');


if (theme === 'light') {
  body.classList.add(theme);
  body.classList.replace('dark', 'light');
  console.log(localStorage.getItem('theme'));
}

// Button Event Handlers
lightButton.onclick = () => {
  body.classList.replace('dark', 'light');
  localStorage.setItem('theme', 'light');
};

darkButton.onclick = () => {
  body.classList.replace('light', 'dark');
  localStorage.setItem('theme', 'dark');
};





var open = document.getElementById('hamburger');
var changeIcon = true;

open.addEventListener("click", function(){

    var overlay = document.querySelector('.overlay');
    var nav = document.querySelector('nav');
    var icon = document.querySelector('.menu-toggle i');

    overlay.classList.toggle("menu-open");
    nav.classList.toggle("menu-open");

    if (changeIcon) {
        icon.classList.remove("fa-bars");
        icon.classList.add("fa-times");

        changeIcon = false;
    }
    else {
        icon.classList.remove("fa-times");
        icon.classList.add("fa-bars");
        changeIcon = true;
    }
});