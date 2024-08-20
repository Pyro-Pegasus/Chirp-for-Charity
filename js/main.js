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

if( document.querySelector('nav') ){
  // Collapsable Header
  const btnToggle = document.querySelector('.toggle-menu');
  const nav = document.querySelector('nav');
  const navLinks = document.querySelectorAll('nav a');
  nav.classList.add('hide');
  let navState = 0;

  function toggleNav(){
    nav.classList.toggle('hide');
    // update toggle button with appropriate icon
    if(navState == 0){
      btnToggle.innerHTML = '<i class="fa-solid fa-xmark"></i>';
      navState = 1;
    } else {
      btnToggle.innerHTML = '<i class="fa-solid fa-bars"></i>';
      navState = 0;
    }
  }

  btnToggle.addEventListener('click',function(){
    toggleNav();
  })

  // I added this one
    btnToggle.addEventListener('touchstart',function(){
    toggleNav();
  })

  navLinks.forEach(function(l){
    l.addEventListener('click',function(){
      toggleNav();
      //I added
    l.addEventListener('touchstart',function(){
      toggleNav();
    })
  })

}
