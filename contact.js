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
    try {
      document.querySelector('.email-error').classList.remove('showError');
    } catch (err) {
      console.log(err);
    }
  } else {
    document.querySelector('.email-format-error').classList.remove('showError');
    check = true;
  }
}

let checkPhone = false;
function validatePhone() {
  const phone = inputs[2];
  const re = /((\+\d{1,2}\s?)?1?\-?\.?\s?\(?\d{3}\)?[\s.-]?)?\d{3}[\s.-]?\d{4}/;

  if (!re.test(phone.value)) {
    document.querySelector('.phone-format-error').classList.add('showError');
    try {
      document.querySelector('.phone-error').classList.remove('showError');
    } catch (err) {
      console.log(err);
    }
  } else {
    document.querySelector('.phone-format-error').classList.remove('showError');
    checkPhone = true;
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
      validatePhone();
    }
  });

  if (textAreaValue == '') {
    textErrorMessage.classList.add('showError');
  } else {
    textErrorMessage.classList.remove('showError');
  }

  try {
    if (
      check &&
      checkPhone &&
      inputs[0].value != '' &&
      inputs[1].value != '' &&
      inputs[2].value != '' &&
      textAreaValue != ''
    ) {
      inputs.forEach((input) => {
        input.value = '';
        input.style.borderBottom = '1px solid white';
      });

      textArea.value = '';
      textArea.style.borderBottom = '1px solid white';

      const sentMessage = document.querySelector('.form-sent-message');
      sentMessage.classList.add('show');

      setTimeout(() => {
        sentMessage.classList.remove('show');
      }, 1000);
    }
  } catch (err) {}

  e.preventDefault();
});
