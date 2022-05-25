// Change Menu Icon 
const button = document.querySelector('.navbar-toggler');
const menuIcon = document.querySelector('.navbar-toggler-icon');

button.addEventListener('click', ()=>{
    menuIcon.classList.toggle('bx-x');
});

// Header Srcoll Class add 
const navbar = document.querySelector('.navbar');

window.onscroll = function(){
    if(document.documentElement.scrollTop > 50){
        navbar.classList.add('scroll');
    }
    else{
        navbar.classList.remove('scroll');
    }
}

// Hide Navlinks after click on it 

const navLink = document.querySelectorAll('.nav-link');
const navCollapse = document.querySelector('#navbarNavDropdown');

navLink.forEach(function(e){
    e.addEventListener('click', ()=> {
        navCollapse.classList.remove("show");
        // This code is for change icon because when we click on menu bar we show close icon 
        const menuIcon = document.querySelector('.navbar-toggler-icon');
        menuIcon.classList.remove('bx-x');
    });
});