let form = document.querySelector('.js-form'),
  formInputs = document.querySelectorAll('.js-input'),
  inputEmail = document.querySelector('.js-input-email'),
  inputPhone = document.querySelector('.js-input-phone'),
  inputIndex = document.querySelector('.js-input-index'),
  inputCheckbox = document.querySelector('.js-input-checkbox');

function validateEmail(email) {
  let valid =
    /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  return valid.test(String(email).toLowerCase());
}

function validatePhone(phone) {
  let valid = /^[0-9\s]*$/;
  return valid.test(String(phone));
}

function validateIndex(index) {
  let valid = /^\d{5}(?:[-\s]\d{4})?$/;
  return valid.test(String(index));
}

form.onsubmit = () => {
  let emailVal = inputEmail.value,
    phoneVal = inputPhone.value,
    emptyInputs = Array.from(formInputs).filter((input) => input.value === '');

  formInputs.forEach((input) => {
    if (input.value === '') {
      input.classList.add('error');
      console.log('error');
    } else {
      input.classList.remove('error');
    }
  });

  if (emptyInputs.length !== 0) {
    console.log('input');
    return false;
  }

  if (!validateEmail(emailVal)) {
    console.log('email not valid');
    return false;
  }

  if (!validatePhone(phoneVal)) {
    console.log('phone');
    return false;
  }

  // if (!validateIndex(phoneVal)) {
  //   console.log('index');
  //   return false;
  // }
};
