/* EMAIL FORM HANDLING */

$('#email-form').submit(function(e){
  // do not submit form
  e.preventDefault();
  // save value if the form field is not blank or the default
  if( $('#email').val() !== '' && $('#email').val() !== 'Email' ){
    // store value added to field in a variable
    let val = $('#email').val();
    // add email address to message
    $('.form-confirmation-message span').text(val);
    // show message (initially hidden with "hide" class)
    $('.form-confirmation-message').removeClass('hide');
    // hide input
    $('.form-input').addClass('hide');
  }
})

AOS.init();

// FAQ ACCORDION
// This does not need jQuery

if(document.querySelector('.faq-accordion')){
  
  const dt = document.querySelectorAll('dt');
  const dd = document.querySelectorAll('dd');

  // close all faqs initially
  dd.forEach(function(d){
    d.classList.add('toggle-faq')
  })
  
  dt.forEach(function(d,i){
    // add plus icons
    d.dataset.before = '+';
    // handle click
    d.addEventListener('click',function(){
      // open faq
      dd.item(i).classList.toggle('toggle-faq');
      // change icon and highlight item
      markSelected(d);
    })
  })

  function markSelected(d){
    if(d.dataset.before === '+'){
      d.dataset.before = '–';
      d.classList.add('selected-faq');
    } else {
      d.dataset.before = '+';
      d.classList.remove('selected-faq');
    }
  }
  
};

// if( document.querySelector('nav') ){
//   // Collapsable Header
//   const btnToggle = document.querySelector('.toggle-menu');
//   const nav = document.querySelector('nav');
//   const navLinks = document.querySelectorAll('nav a');
//   nav.classList.add('hide');
//   let navState = 0;

//   function toggleNav(){
//     nav.classList.toggle('hide');
//     // update toggle button with appropriate icon
//     if(navState == 0){
//       btnToggle.innerHTML = '<i class="fa-solid fa-xmark"></i>';
//       navState = 1;
//     } else {
//       btnToggle.innerHTML = '<i class="fa-solid fa-bars"></i>';
//       navState = 0;
//     }
//   }

//   btnToggle.addEventListener('click',function(){
//     toggleNav();
//   })

//   navLinks.forEach(function(l){
//     l.addEventListener('click',function(){
//       toggleNav();
//     })
//   })

// }



//ChatGPT's "fix"...lets see if it works better

// if (document.querySelector('nav')) {
//   const btnToggle = document.querySelector('.toggle-menu');
//   const nav = document.querySelector('nav');
//   const navLinks = document.querySelectorAll('nav a');
//   let navState = false;

//   function toggleNav() {
//     nav.classList.toggle('hide');
//     navState = !navState;
//     btnToggle.setAttribute('aria-expanded', navState);
//     btnToggle.innerHTML = navState 
//       ? '<i class="fa-solid fa-xmark"></i>' 
//       : '<i class="fa-solid fa-bars"></i>';
//   }

//   // Add event listeners for both click and touchstart
//   btnToggle.addEventListener('click', toggleNav);
//   btnToggle.addEventListener('touchstart', toggleNav);

//   navLinks.forEach((link) => {
//     link.addEventListener('click', toggleNav);
//     link.addEventListener('touchstart', toggleNav);
//   });
// }

//Well, that didn't work. Lets try this

// if( document.querySelector('nav') ){
//   // Collapsable Header
//   const btnToggle = document.querySelector('.toggle-menu');
//   const nav = document.querySelector('nav');
//   const navLinks = document.querySelectorAll('nav a');
//   nav.classList.add('hide');
//   let navState = false;

//   function toggleNav(){
//     nav.classList.toggle('hide');
//     navState = !navState;
//     btnToggle.setAttribute('aria-expanded', navState);

//     // update toggle button with appropriate icon

//     if(navState){
//       btnToggle.innerHTML = '<i class="fa-solid fa-xmark"></i>';
//     } else {
//       btnToggle.innerHTML = '<i class="fa-solid fa-bars"></i>';
//     }
//   }

//   btnToggle.addEventListener('click', toggleNav);
//   btnToggle.addEventListener('touchstart', toggleNav);

//   navLinks.forEach((link) => {
//     link.addEventListener('click', toggleNav);
//     link.addEventListener('touchstart', toggleNav);
//   });
// }

//Ok lets copy and paste some shit
//They, this one works! YAAAAY

$(document).ready(function() {
  // Check if nav exists
  if ($('nav').length) {
    // Collapsible Header
    const btnToggle = $('.toggle-menu');
    const nav = $('nav');
    const navLinks = $('nav a');

    // Initially hide the navigation
    nav.addClass('hide');
    let navState = false; // Using boolean for navState

    // Function to toggle navigation
    function toggleNav() {
      nav.toggleClass('hide'); // Toggle 'hide' class
      
      // Update navState and button icon
      navState = !navState; // Toggle navState
      if (navState) {
        btnToggle.html('<i class="fa-solid fa-xmark"></i>'); // Show X icon
      } else {
        btnToggle.html('<i class="fa-solid fa-bars"></i>'); // Show Hamburger icon
      }

      // Set aria-expanded attribute
      btnToggle.attr('aria-expanded', navState); // Set aria-expanded based on navState
    }

    // Event listener for the toggle button
    btnToggle.on('click', function() {
      toggleNav(); // Call toggleNav when the button is clicked
    });

    // Event listeners for navigation links
    navLinks.on('click', function() {
      toggleNav(); // Call toggleNav when a nav link is clicked
    });
  }
});


