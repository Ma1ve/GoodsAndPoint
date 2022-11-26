let form = document.querySelector('.js-form'),
  formInputs = document.querySelectorAll('.js-input'),
  inputName = document.querySelector('.js-input-name'),
  inputSurname = document.querySelector('.js-input-surname'),
  inputEmail = document.querySelector('.js-input-email'),
  inputPhone = document.querySelector('.js-input-phone'),
  inputIndex = document.querySelector('.js-input-index'),
  inputCheckbox = document.querySelector('.js-input-checkbox'),
  customCheckbox = document.querySelector('.js-custom-checkbox');

// const inputMask = new Inputmask('+7 (999) 999-99-99');
// inputMask.mask(inputPhone);

let btnActive = document.querySelector('.basket__access-btn');

inputCheckbox.addEventListener('change', function () {
  if (this.checked) {
    btnActive.classList.add('basket__access-btn-active');
  } else {
    btnActive.classList.remove('basket__access-btn-active');
  }
});

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
  let valid = /^[0-9\s]*$/;
  return valid.test(String(index));
}

function setErrorFor(input, message) {} // SETERROR

form.addEventListener('submit', (e) => {
  e.preventDefault();

  let emailVal = inputEmail.value,
    phoneVal = inputPhone.value,
    indexVal = inputIndex.value,
    emptyInputs = Array.from(formInputs).filter((input) => input.value === '');

  formInputs.forEach((input) => {
    if (input.value === '') {
      input.classList.add('error');
      console.log('error');
    } else {
      input.classList.remove('error');
    }
  });

  if (!validateEmail(emailVal) || emailVal === '') {
    inputEmail.classList.add('error');
    setError(inputEmail, 'Проверьте адрес электронной почты');
    // inputEmail.style.color = 'red';
    return false;
  } else {
    // setSuccessFor(inputEmail);
    inputEmail.classList.remove('error');
    // inputEmail.style.color = 'black';
  }

  if (!validatePhone(phoneVal)) {
    inputPhone.classList.add('error');

    return false;
  } else {
    inputPhone.classList.remove('error');
  }

  if (!validateIndex(indexVal)) {
    inputIndex.classList.add('error');

    return false;
  } else {
    inputIndex.classList.remove('error');
  }

  if (!inputCheckbox.checked) {
    console.log(inputCheckbox.checked);
    customCheckbox.classList.add('checkbox-error');
    return false;
  } else {
    customCheckbox.classList.remove('checkbox-error');
  }

  // if (!emptyInputs !== 0) {
  //   emptyInputs.forEach((item) => {
  //     item.classList.add('error');
  //   });
  // }
});
