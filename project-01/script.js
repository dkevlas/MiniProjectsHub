const imgLogo = document.getElementById('logo');

const imgBlur = document.querySelector('.img-blur');

const imgHero = document.querySelector('.img-hero');

const urlImgBlur = imgLogo.src;
const urlImgHero = imgLogo.src;



imgHero.style.backgroundImage = `url(${urlImgHero})`;

imgBlur.style.backgroundImage = `url(${urlImgBlur})`;
// UL BLUR

const ulBlur = document.querySelector('.ul-blur');

// MENU

const menu = document.querySelector('.menu');
const ul = document.querySelector('.ul');


menu.addEventListener('click',()=>{
    ul.classList.toggle('ul-script');
});
