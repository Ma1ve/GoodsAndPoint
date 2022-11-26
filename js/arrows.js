// Arrows

const arrows = document.querySelectorAll('.basket__choice-img'),
  blocks = document.querySelectorAll('.basket__blocks'),
  blocksMobile = document.querySelectorAll('.basket__blocks-mobile'),
  basketCount = document.querySelector('.basket__choice-wrapper'),
  choiceSelectAll = document.querySelector('.basket__choice-label');

arrows.forEach((item, i) => {
  item.addEventListener('click', () => {
    blocks[i].classList.toggle('basket__blocks-active');
    if (blocks[0].classList.contains('basket__blocks-active')) {
      choiceSelectAll.style.display = 'none';
      document.querySelector('.basket__choice-title').style.display = 'block';
    } else {
      choiceSelectAll.style.display = 'block';
      document.querySelector('.basket__choice-title').style.display = 'none';
    }

    arrows[i].classList.toggle('basket__choice-img-active');
  });
});

// Checkbox

const selectAll = document.querySelector('.select-all'),
  allCheckbox = document.querySelectorAll('.checkbox-js');

selectAll.addEventListener('change', function () {
  if (this.checked) {
    allCheckbox.forEach((item) => {
      item.checked = true;
    });
  } else {
    allCheckbox.forEach((item) => {
      item.checked = false;
    });
  }
});

// let paymentCheckbox = document.querySelector('.checkbox-payment'),
//   btnActive = document.querySelector('.basket__access-btn');

// paymentCheckbox.addEventListener('change', function () {
//   if (this.checked) {
//     btnActive.classList.add('basket__access-btn-active');
//   } else {
//     btnActive.classList.remove('basket__access-btn-active');
//   }
// });

// Delete

let deleteElementBasket = document.querySelectorAll('.basket__missing-block');

deleteElementBasket.forEach((item, i) => {
  item.addEventListener('click', (e) => {
    const target = e.target;

    if (target.classList.contains('trash-can')) {
      item.remove();
    }
  });
});

let deleteElementBasketMissing = document.querySelectorAll('.basket__block'),
  countMissingBasket = document.querySelector('.basket__missing-title span');

deleteElementBasketMissing.forEach((item, i) => {
  item.addEventListener('click', (e) => {
    const target = e.target;

    if (target.classList.contains('trash-can')) {
      item.remove();
    }
  });
});

let count = deleteElementBasket.length;

deleteElementBasket.forEach((item) => {
  item.addEventListener('click', () => {
    count -= 1;
    console.log(count);
    countMissingBasket.innerHTML = count;
  });
});

// let listBoolean = [];
// allCheckbox.forEach((item) => {
//   item.addEventListener('change', function () {
//     allCheckbox.forEach((i) => {
//       listBoolean.push(i.checked);
//     });
//     if (listBoolean.includes(false)) {
//       selectAll.checked = false;
//     } else {
//       selectAll.checked = true;
//     }
//     listBoolean = [];
//   });
// });
