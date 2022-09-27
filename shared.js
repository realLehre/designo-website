const headerContainer = document.getElementById('header-container');
const linkContainer = document.querySelector('.links');
const link = document.querySelectorAll('.link');
const menuIcon = document.querySelector('.menu-icon');

menuIcon.addEventListener('click', () => {
  menuIcon.classList.toggle('open');
  linkContainer.classList.toggle('open');
  link.forEach((item, index) => {
    const time = index * 200;
    setTimeout(() => {
      item.classList.toggle('open');
    }, time);
  });
});

console.log(window.scrollY);

window.addEventListener('scroll', () => {
  if (window.scrollY > 20) {
    headerContainer.classList.add('shadow');
  } else {
    headerContainer.classList.remove('shadow');
  }
});
