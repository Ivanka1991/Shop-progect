const women = document.querySelector('.women');
const men = document.querySelector('.men');
const list = document.querySelectorAll('.menu__list-name');

(() => {
  const menuBtnRef = document.querySelector('[data-menu-button]');
  const mobileMenuRef = document.querySelector('[data-menu]');
  console.log(menuBtnRef);
  menuBtnRef.addEventListener('click', () => {
    const expanded =
      menuBtnRef.getAttribute('aria-expanded') === 'true' || false;

    menuBtnRef.classList.toggle('is-open');
    menuBtnRef.setAttribute('aria-expanded', !expanded);

    mobileMenuRef.classList.toggle('is-open');
  });
})();

// const span = document.querySelector('span')
console.log(men, women);
women.addEventListener('click', function (e) {
  e.preventDefault();
  women.style.color = '#0F303F';
  men.style.color = '#B7C1C5';
  women.classList.add('line-color');
  men.classList.remove('line-color');
});
men.addEventListener('click', function (e) {
  e.preventDefault();
  women.style.color = '#B7C1C5';
  men.style.color = '#0F303F';
  men.classList.add('line-color');
  women.classList.remove('line-color');
});

list.forEach(n => {
  n.addEventListener('click', e => {
    const clicked = e.target;
    clicked.parentElement.lastElementChild.classList.toggle('open');
    // span.textContent = '-'
  });
});
