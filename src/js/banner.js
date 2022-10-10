const banners = document.querySelectorAll('.banner__slider-list .banner__slider-item');
const bannerLine = document.querySelector('.banner__slider-list');
const btn1 = document.querySelector('.btn1');
const btn2 = document.querySelector('.btn2');
const btn3 = document.querySelector('.btn3');
const btn4 = document.querySelector('.btn4');

let count = 0;
let width;

// console.log(banners, bannerLine);
function init() {
    // console.log('resize');
    width = document.querySelector('.banner__slider-item').offsetWidth;
    // bannerLine.style.width = width * banners.length + 'px';
    banners.forEach(item => {
        item.style.width = width + 'px';
        item.style.height = 'auto';
    });
    rollSlider();
}
// console.log(banners.length)
init();
window.addEventListener('resize', init);

btn1.addEventListener('click', function () {   
  count = 0;
  btn1.classList.remove('btn')
  btn2.classList.remove('btn')
  btn4.classList.remove('btn')
  btn3.classList.remove('btn')
  btn1.style.opacity = 1;
  btn2.style.opacity = 0.3;
  btn3.style.opacity = 0.3;
  btn4.style.opacity = 0.3;
    rollSlider();
});
btn2.addEventListener('click', function () {   
  count = 1;
  btn1.classList.remove('btn')
  btn2.classList.remove('btn')
  btn4.classList.remove('btn')
  btn3.classList.remove('btn')
  btn1.style.opacity = 0.3;
  btn2.style.opacity = 1;
  btn3.style.opacity = 0.3;
  btn4.style.opacity = 0.3;


rollSlider();
});
btn3.addEventListener('click', function () {   
  count = 2;
  btn1.classList.add('btn')
  btn2.classList.add('btn')
  btn4.classList.add('btn')
  btn1.style.opacity = 0.3;
  btn2.style.opacity = 0.3;
  btn3.classList.add('btn')
  btn3.style.opacity = 1;
  btn4.style.opacity = 0.3;
rollSlider();
});
btn4.addEventListener('click', function () { 
  count = 3;
  btn1.classList.add('btn')
  btn2.classList.add('btn')
  btn4.classList.add('btn')
  btn3.classList.add('btn')
  btn1.style.opacity = 0.3;
  btn2.style.opacity = 0.3;
  btn3.style.opacity = 0.3;
  btn4.style.opacity = 1;
rollSlider();
});

function rollSlider() {
    bannerLine.style.transform = 'translate(-' + count * width + 'px)';

}