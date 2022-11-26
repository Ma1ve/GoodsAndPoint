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

let trashCanDelete = document.querySelectorAll('.trash-can-modal');

trashCanDelete.forEach((btn) => {
  btn.addEventListener('click', () => {
    btn.parentElement.remove();
  });
});
