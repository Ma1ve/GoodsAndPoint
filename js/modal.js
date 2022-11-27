// Modal payment

const modalTrigger = document.querySelectorAll('[data-modal-payment]'),
  modalPayment = document.querySelector('.overlay-modal-1'),
  modalCloseBtn = document.querySelector('[data-close-payment]');

console.log(modalPayment);

modalTrigger.forEach((btn) => {
  btn.addEventListener('click', () => {
    modalPayment.classList.add('open');
    document.body.style.overflow = 'hidden';
  });
});

function closeModal() {
  modalPayment.classList.remove('open');
  document.body.style.overflow = '';
}

modalCloseBtn.addEventListener('click', closeModal);

modalPayment.addEventListener('click', (e) => {
  if (e.target === modalPayment) {
    closeModal();
  }
});

// Modal delivery

const modalTriggerDelivery = document.querySelectorAll('[data-modal-delivery]'),
  modalDelivety = document.querySelector('.overlay-modal-2'),
  modalCloseBtndelivery = document.querySelector('[data-close-delivery]');

modalTriggerDelivery.forEach((btn) => {
  btn.addEventListener('click', () => {
    modalDelivety.classList.add('open');
    document.body.style.overflow = 'hidden';
  });
});

function closeModalDelivery() {
  modalDelivety.classList.remove('open');
  document.body.style.overflow = '';
}

modalCloseBtndelivery.addEventListener('click', closeModalDelivery);

modalDelivety.addEventListener('click', (e) => {
  if (e.target === modalDelivety) {
    closeModalDelivery();
  }
});

// Modal tabs

const tabs = document.querySelectorAll('.modal-choice__btn'),
  tabsParent = document.querySelector('.modal__btn-choive-wrapper');

function hideTabContent() {
  tabs.forEach((item) => {
    item.classList.remove('modal-choice__btn-active');
  });
}

function showTabContent(i = 0) {
  tabs[i].classList.add('modal-choice__btn-active');
}

tabsParent.addEventListener('click', (e) => {
  const target = e.target;
  if (target && target.classList.contains('modal-choice__btn')) {
    tabs.forEach((item, i) => {
      if (target == item) {
        hideTabContent();
        showTabContent(i);
      }
    });
  }
});

// Delete items modal

let trashCanDelete = document.querySelectorAll('.basket__icons-baskets');

trashCanDelete.forEach((btn) => {
  btn.addEventListener('click', () => {
    console.log(btn.parentElement);
    btn.parentElement.remove();
  });
});

// RadioButtons payment
const elementCard = document.querySelector('.basket__card-wrapper'),
  elementCardMenu = document.querySelector('.basket__option-card-wrapper'),
  btnPayment = document.querySelector('.modal-btn__card'),
  radioButtonsPayment = document.getElementsByName('category-card');

const elementDelivery = document.querySelector('.basket__paragraph-text-wrapper'),
  elementDeliveryMenu = document.querySelector('.basket__way-text-desc'),
  btnDelivery = document.querySelector('.modal-btn__delivery'),
  radioButtonsDelivery = document.getElementsByName('category-address');

function changeCard(value) {
  elementCard.innerHTML = `
    <img src="./img/icons/${value}.svg" alt="card" class="basket__payment-img" />
      <div
        class="basket__card-number basket__text_ml8 title_fz13 basket__wrapper_fw600"
      >
        1234 12•• •••• 1234
    </div>
  `;

  elementCardMenu.innerHTML = `
    <img class="basket__option-img" src="./img/icons/${value}.svg" alt="card" />
    <div class="basket__option-card-number">1234 56•• •••• 1234</div>
  `;
}

function changePlaceValue(place) {
  elementDelivery.innerHTML = `
    <div class="basket__paragraph-text basket__wrapper_fw600 title_fz13">
      ${place}
    </div>`;

  elementDeliveryMenu.innerHTML = `
    <div class="basket__way-text-desc basket__text-delivery">
      ${place}
    </div>`;
}

function setChange(inputValue) {
  switch (inputValue) {
    case 'card': {
      changeCard('card');
      break;
    }
    case 'visa': {
      changeCard('visa');
      break;
    }
    case 'master-card-1': {
      changeCard('master-card-1');
      break;
    }
    case 'master-card-2': {
      changeCard('master-card-2');
      break;
    }

    default:
      changeCard('card');
      break;
  }
}

function changePlace(inputValue) {
  switch (inputValue) {
    case 'tabyshalieva': {
      console.log(1);
      changePlaceValue('Бишкек, улица Табышалиева, 57');
      break;
    }
    case 'zhukeeva': {
      console.log(2);
      changePlaceValue('Бишкек, улица Жукеева-Пудовкина, 77/1');
      break;
    }
    case 'akhunbaeva': {
      console.log(3);
      changePlaceValue(' г. Бишкек, микрорайон Джал, улица Ахунбаева Исы, д. 67/1');
      break;
    }

    default:
      break;
  }
}

btnPayment.addEventListener('click', () => {
  for (let i = 0; i < radioButtonsPayment.length; i++) {
    if (radioButtonsPayment[i].checked) {
      let change = radioButtonsPayment[i].value;
      setChange(change);
    }
  }
  closeModal();
});

btnDelivery.addEventListener('click', () => {
  for (let i = 0; i < radioButtonsDelivery.length; i++) {
    if (radioButtonsDelivery[i].checked) {
      let place = radioButtonsDelivery[i].value;
      changePlace(place);
    }
  }
  closeModalDelivery();
});
// Radiobutton Delivery
