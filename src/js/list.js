const women = document.querySelector('.women');
const men = document.querySelector('.men');
const list = document.querySelectorAll('.menu__list-name');
const menuList = document.querySelector('.mobile__menu ');
console.log(menuList);
const listLinks = document.querySelector('.menu__list-links');
console.log(men);
const cross = document.querySelector('.cross__menu-btn');
women.addEventListener('click', function (e) {
  e.preventDefault();
  women.style.color = '#0F303F';
  men.style.color = '#B7C1C5';
  women.classList.add('line-color');
  men.classList.remove('line-color');
  menuList.style.display = 'block';
  listLinks.style.display = 'flex';
});
men.addEventListener('click', function (e) {
  e.preventDefault();
  women.style.color = '#B7C1C5';
  men.style.color = '#0F303F';
  men.classList.add('line-color');
  women.classList.remove('line-color');
  menuList.style.display = 'block';
  listLinks.style.display = 'flex';
});
cross.addEventListener('click', function (e) {
  e.preventDefault();
  menuList.style.display = 'none';
  listLinks.style.display = 'none';
});
list.forEach(n => {
  n.addEventListener('click', e => {
    const clicked = e.target;
    clicked.parentElement.lastElementChild.classList.toggle('open');
  });
});
