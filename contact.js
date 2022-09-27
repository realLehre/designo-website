const inputs = document.querySelectorAll('input');
const labels = document.querySelectorAll('label');
const form = document.querySelector('form');

form.addEventListener('click', (e) => {
  e.preventDefault();

  inputs.forEach((input, index) => {
    input.addEventListener('click', () => {
      if (input.value !== '') {
        labels[index].classList.add('up');
      } else {
        labels[index].classList.remove('up');
      }
    });
    console.log(input.value);
  });
});
