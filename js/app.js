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


$( '.js-input' ).keyup(function() {
  if( $(this).val() ) {
     $(this).addClass('not-empty');
  } else {
     $(this).removeClass('not-empty');
  }
});

/* Check si le contact form est empty ou full */

function checkInputs() {
  var isValid = true;
  $('input').filter('[required]').each(function() {
    if ($(this).val() === '') {
      $('#sub').prop('disabled', true)
      isValid = false;
      return false;
    }
  });
  if(isValid) {$('#sub').prop('disabled', false)}
  return isValid;
}


/* <!-- Modal --> */
const submit = document.getElementById('sub');
var modal = "<div class='modal fade' id='exampleModal' tabindex='-1' role='dialog' aria-labelledby='exampleModalLabel' aria-hidden='true'><div class='modal-dialog' role='document'><div class='modal-content'><div class='modal-header'>  <h5 class='modal-title' id='exampleModalLabel'>Modal title</h5>  <button type='button' class='close' data-dismiss='modal' aria-label='Close'>    <span aria-hidden='true'>&times;</span>  </button></div><div class='modal-body'>  ...</div><div class='modal-footer'>  <button type='button' class='btn btn-secondary' data-dismiss='modal'>Close</button>  <button type='button class='btn btn-primary'>Save changes</button></div></div></div></div>"

//Enable or disable button based on if inputs are filled or not
$('input').filter('[required]').on('keyup',function() {
checkInputs()
})

checkInputs();

/* Fonction qui renvoie le modal */

if(checkInputs) {
  document.submit.appendChild(modal);
}
else {
  checkInputs();
}


