let menu = document.getElementById('menu-btn');
let navbar = document.querySelector('.header .navbar');
let popup = document.getElementById('popup');

menu.onclick = () => {
    menu.classList.toggle('fa-times');
    navbar.classList.toggle('active');
};

// DarkMode 
const btnSwitch = document.querySelector('#switch');

btnSwitch.addEventListener('click', () => {
	document.body.classList.toggle('dark');
	btnSwitch.classList.toggle('active');

	// Guardamos el modo en localstorage.
	if(document.body.classList.contains('dark')){
		localStorage.setItem('dark-mode', 'true');
	} else {
		localStorage.setItem('dark-mode', 'false');
	}
});

// Obtenemos el modo actual.
if(localStorage.getItem('dark-mode') === 'true'){
	document.body.classList.add('dark');
	btnSwitch.classList.add('active');
} else {
	document.body.classList.remove('dark');
	btnSwitch.classList.remove('active');
}

















/*
if(localStorage.getItem('modoOscuro') === 'true'){
    document.body.classList.add('dark-mode');
} else { 
    document.body.classList.remove('dark-mode');
}*/



window.onscroll = () =>{
    menu.classList.remove('fa-times');
    //navbar.classList.remove('active');
    //popup.classList.remove('active')

    let maxHeight = window.document.body.scrollHeight - window.innerHeight;
    let percentage = ((window.scrollY) / maxHeight) * 100;
    document.querySelector('.header .scroll-indicator').style.width = percentage + '%';
};


//Boton lenguaje
/*let lengBtn = document.querySelector('#leng-btn');
lengBtn.addEventListener('click', () => { 

});*/



function toggle1(){ 
    popup.classList.toggle('desp');
}

//Slider
var slides = document.querySelectorAll('.slide');
var btns = document.querySelectorAll('.btns');
let currentSlide = 1;


var manualNav = function(manual){
slides.forEach((slide) => {
    slide.classList.remove('active'); //on

    btns.forEach((btn) => {
    btn.classList.remove('active');  //on
    });
});

slides[manual].classList.add('active');  //on
btns[manual].classList.add('active');    //on
}

btns.forEach((btn, i) => {
btn.addEventListener("click", () => {
    manualNav(i);
    currentSlide = i;
});
});

// Javascript for image slider autoplay navigation
var repeat = function(activeClass){
let active = document.getElementsByClassName('active');   //on
let i = 0;

var repeater = () => {
    setTimeout(function(){
    [...active].forEach((activeSlide) => {
        activeSlide.classList.remove('active');   //on
    });

    slides[i].classList.add('active');   //on
    btns[i].classList.add('active');     //on
    i++;

    if(slides.length == i){
    i = 0;
    }
    if(i >= slides.length){
    return;
    }
    repeater();
}, 10000);
}
repeater();
}
repeat();