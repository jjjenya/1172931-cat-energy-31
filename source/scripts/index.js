/* в этот файл добавляет скрипты*/

const mainNav = document.querySelector('.main-nav');
const navToggle = document.querySelector('.main-nav__toggle');

mainNav.classList.remove('main-nav--no-js');

mainNav.classList.add('main-nav--open');

navToggle.addEventListener('click', () => {
  if (mainNav.classList.contains('main-nav--open')) {
    mainNav.classList.remove('main-nav--open');
    mainNav.classList.add('main-nav--close');
  } else {
    mainNav.classList.add('main-nav--open');
    mainNav.classList.remove('main-nav--close');
  }
});
