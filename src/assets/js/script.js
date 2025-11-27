// ハンバーガーメニュー
const hamburger = document.querySelector('.hamburger');
const drawer = document.querySelector('.drawer-nav');

hamburger.addEventListener('click', () => {
  drawer.classList.toggle('open');
  hamburger.classList.toggle('active');
});