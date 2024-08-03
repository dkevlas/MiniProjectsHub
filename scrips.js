const imgLogo = document.getElementById('logo');

const imgBlur = document.querySelector('.img-blur');

const imgHero = document.querySelector('.img-hero');

const urlImgBlur = imgLogo.src;
const urlImgHero = imgLogo.src;



imgHero.style.backgroundImage = `url(${urlImgHero})`;

imgBlur.style.backgroundImage = `url(${urlImgBlur})`;

