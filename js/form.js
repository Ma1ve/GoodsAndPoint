let form = document.querySelector('.js-form'),
  formInputs = document.querySelectorAll('.js-input'),
  inputName = document.querySelector('.js-input-name'),
  inputSurname = document.querySelector('.js-input-surname'),
  inputEmail = document.querySelector('.js-input-email'),
  inputPhone = document.querySelector('.js-input-phone'),
  inputIndex = document.querySelector('.js-input-index'),
  inputCheckbox = document.querySelector('.js-input-checkbox'),
  customCheckbox = document.querySelector('.js-custom-checkbox');

const inputMask = new Inputmask('+7 (999) 999-99-99');
inputMask.mask(inputPhone);

let btnActive = document.querySelector('.basket__access-btn'),
  totalSum = document.querySelector('.basket__total-sum span');

const normalPrice = (price) => {
  return String(price).replace(/(\d)(?=(\d\d\d)+([^\d]|$))/g, '$1 ');
};

inputCheckbox.addEventListener('change', function () {
  if (this.checked) {
    btnActive.innerText = `Заказать ${normalPrice(totalSum.innerText.replace(/\s/g, ''))} сом`;
  } else {
    btnActive.innerText = `Оплатить`;
  }
});

function validatePhone(phone) {
  let valid = /^[0-9\s]*$/;
  return valid.test(String(phone));
}

function validateIndex(index) {
  let valid = /^[0-9\s]*$/;
  return valid.test(String(index));
}

function isEmail(email) {
  return /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(
    email,
  );
}

function setErrorFor(input, message) {
  const formControl = input.parentElement;
  const error = formControl.querySelector('.form__error-message');
  error.style.display = 'block';
  error.innerText = message;
  formControl.querySelector('.js-input').classList.add('error');
}

function setSuccessFor(input) {
  const formControl = input.parentElement;
  const error = formControl.querySelector('.form__error-message');
  error.style.display = 'none';
  formControl.querySelector('.js-input').classList.remove('error');
}

form.addEventListener('submit', (e) => {
  e.preventDefault();

  let nameVal = inputName.value,
    surnameVal = inputSurname.value,
    emailVal = inputEmail.value,
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

  if (nameVal === '') {
    setErrorFor(inputName, 'Укажите имя');
  } else {
    setSuccessFor(inputName);
  }

  if (surnameVal === '') {
    setErrorFor(inputSurname, 'Введите фамилию');
  } else {
    setSuccessFor(inputSurname);
  }

  if (emailVal === '') {
    setErrorFor(inputEmail, 'Укажите электронную почту');
  } else if (!isEmail(emailVal)) {
    setErrorFor(inputEmail, 'Проверьте адрес электронной почты');
  } else {
    setSuccessFor(inputEmail);
  }

  if (phoneVal === '') {
    setErrorFor(inputPhone, 'Укажите номер телефона');
  } else if (phoneVal.split('').includes('_')) {
    setErrorFor(inputPhone, 'Формат: +9 999 999 99 99');
  } else {
    setSuccessFor(inputPhone);
  }

  if (indexVal === '') {
    setErrorFor(inputIndex, 'Укажите индекс');
  } else if (!validateIndex(indexVal)) {
    setErrorFor(inputIndex, 'Формат: 1234567');
  } else {
    setSuccessFor(inputIndex);
  }

  if (!inputCheckbox.checked) {
    console.log(inputCheckbox.checked);
    customCheckbox.classList.add('checkbox-error');
    return false;
  } else {
    customCheckbox.classList.remove('checkbox-error');
  }
});
