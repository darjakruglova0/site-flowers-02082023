
let burger = document.querySelector('.header__burger');
let menu = document.querySelector('#site-navigation-mobile');

burger.addEventListener('click', function(){
	burger.classList.toggle('active');
	menu.classList.toggle('active');

});



