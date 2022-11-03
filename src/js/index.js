const women = document.querySelector('.women');
const men = document.querySelector('.men');
const list = document.querySelectorAll('.menu__list-name');
const menuList = document.querySelector('.desc__menu');
console.log(menuList);
// const span = document.querySelector('span')
// console.log(men, women, list);
women.addEventListener('click', function (e) {
  e.preventDefault();
  women.style.color = '#0F303F';
  men.style.color = '#B7C1C5';
  women.classList.add('line-color');
  men.classList.remove('line-color');
  menuList.style.display = 'block';
});
men.addEventListener('click', function (e) {
  e.preventDefault();
  women.style.color = '#B7C1C5';
  men.style.color = '#0F303F';
  men.classList.add('line-color');
  women.classList.remove('line-color');
  menuList.style.display = 'block';
});

list.forEach(n => {
  n.addEventListener('click', e => {
    const clicked = e.target;
    clicked.parentElement.lastElementChild.classList.toggle('open');
  });
});
