const form = document.querySelector('#contact-form');
const inputs = document.querySelectorAll('input');
const labels = document.querySelectorAll('label');
const textArea = document.getElementById('message');

let textAreaValue = '';

const textErrorMessage = textArea.nextElementSibling;
textArea.addEventListener('keyup', (e) => {
  textAreaValue = textArea.value;
  if (textArea.value !== '') {
    e.target.previousElementSibling.classList.add('up');
    textArea.style.borderBottom = '3px solid white';
    textErrorMessage.classList.remove('showError');
  } else {
    e.target.previousElementSibling.classList.remove('up');
    textArea.style.borderBottom = '1px solid white';
    textErrorMessage.classList.add('showError');
  }
});

inputs.forEach((input, index) => {
  const errorMessage = input.nextElementSibling;
  input.addEventListener('keyup', (e) => {
    inputValue = input.value;
    if (input.value !== '') {
      labels[index].classList.add('up');
      input.style.borderBottom = '3px solid white';
      errorMessage.classList.remove('showError');
    } else {
      labels[index].classList.remove('up');
      input.style.borderBottom = '1px solid white';
      errorMessage.classList.add('showError');
    }
  });
});

let check = false;
function validateEmail() {
  const email = inputs[1];
  const re = /^([a-zA-Z0-9_\-\.]+)@([a-zA-Z0-9_\-\.]+)\.([a-zA-Z]{2,5})$/;

  if (!re.test(email.value)) {
    document.querySelector('.email-format-error').classList.add('showError');
  } else {
    document.querySelector('.email-format-error').classList.remove('showError');
    check = true;
  }
}

form.addEventListener('submit', (e) => {
  inputs.forEach((input, index) => {
    const errorMessage = input.nextElementSibling;
    if (input.value == '') {
      errorMessage.classList.add('showError');
    } else {
      errorMessage.classList.remove('showError');
      validateEmail();
    }
  });

  if (textAreaValue == '') {
    textErrorMessage.classList.add('showError');
  } else {
    textErrorMessage.classList.remove('showError');
  }

  if (check) {
    inputs.forEach((input) => {
      input.value = '';
      input.style.borderBottom = '1px solid white';
    });

    textArea.value = '';
    textArea.style.borderBottom = '1px solid white';
  }

  e.preventDefault();
});
