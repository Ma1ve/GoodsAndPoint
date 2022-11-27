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

// Delete

let deleteElementBasket = document.querySelectorAll('.basket__missing-block');
let count = deleteElementBasket.length;

deleteElementBasket.forEach((item) => {
  item.addEventListener('click', (e) => {
    const target = e.target;

    if (target.classList.contains('trash-can')) {
      item.remove();
      count -= 1;

      countMissingBasket.innerHTML = count;
    }
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

// Hearts

const hearts = document.querySelectorAll('.basket__icons-hearts');

hearts.forEach((item) => {
  item.addEventListener('click', (e) => {
    pinkHeart = item.querySelector('.basket__heart-pink');
    blackHeart = item.querySelector('.basket__heart-black');
    const target = e.target;
    console.log(target);
    if (target && target.classList.contains('basket__heart-black')) {
      pinkHeart.classList.remove('basket__icon_dn');
      blackHeart.classList.add('basket__icon_dn');
    } else {
      pinkHeart.classList.add('basket__icon_dn');
      blackHeart.classList.remove('basket__icon_dn');
    }
  });
});

// Baskets hover

const baskets = document.querySelectorAll('.basket__icons-baskets');

baskets.forEach((item) => {
  item.addEventListener('mouseover', (e) => {
    redBasket = item.querySelector('.basket__black');
    blackBasket = item.querySelector('.basket__red');
    const target = e.target;
    if (target && target.classList.contains('basket__icons-baskets')) {
      redBasket.classList.remove('basket__icon_dn');
      blackBasket.classList.add('basket__icon_dn');
    } else {
      redBasket.classList.add('basket__icon_dn');
      blackBasket.classList.remove('basket__icon_dn');
    }
  });
});

baskets.forEach((item) => {
  item.addEventListener('mouseout', (e) => {
    redBasket = item.querySelector('.basket__black');
    blackBasket = item.querySelector('.basket__red');
    const target = e.target;
    if (target && target.classList.contains('basket__black')) {
      redBasket.classList.add('basket__icon_dn');
      blackBasket.classList.remove('basket__icon_dn');
    } else {
      redBasket.classList.remove('basket__icon_dn');
      blackBasket.classList.add('basket__icon_dn');
    }
  });
});

// baskets.forEach((item) => {
//   item.addEventListener('mouseover', (e) => {
//     const target = e.target;
//     console.log(e.target);
//     if (target && target.classList.contains('trash-can')) {
//       item.innerHTML = `
//     <img
//       class="basket__icon basket__icon_ml16 trash-can basket__black"
//       src="./img/icons/trash-can.svg"
//       alt="trash"
//     />`;
//     } else {
//       item.innerHTML = `
//     <img
//       class="basket__icon basket__icon_ml16 trash-can basket__black"
//       src="./img/icons/basket-red.svg"
//       alt="trash"
//     />`;
//     }
//   });
// });

// baskets.forEach((item) => {
//   item.addEventListener('mouseout', (e) => {
//     const target = e.target;
//     if (target && target.classList.contains('basket__black')) {
//       item.innerHTML = `
//     <img
//       class="basket__icon basket__icon_ml16 trash-can basket__black"
//       src="./img/icons/basket-red.svg"
//       alt="trash"
//     />`;
//     }
//   });
// });

// Basket logic

// const normalPrice = (price) => {
//   return String(price).replace(/(\d)(?=(\d\d\d)+([^\d]|$))/g, '$1 ');
// };

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

window.addEventListener('click', function (e) {
  let counter, counterSum, counterDiscountSum, dataSumValue, dataDiscountValue;

  if (e.target.dataset.action === 'trash') {
    console.log(1);
  }

  let total = 0;
  if (
    e.target.dataset.action === 'plus' ||
    e.target.dataset.action === 'minus' ||
    e.target.dataset.action === 'trash'
  ) {
    const counterWrapper = e.target.closest('.counter-wrapper');
    // console.log(counterWrapper);

    // const counterTrash = e.target.closest('.basket__counter-wrapper');
    // console.log(counterTrash);

    counter = counterWrapper.querySelector('[data-counter]');
    const counterWrapperSum = e.target.closest('.basket__wrapper-sum');
    counterSum = counterWrapperSum.querySelector('.total-sum');
    counterDiscount = counterWrapperSum.querySelector('.basket__discount-sum');

    dataSumValue = counterSum.getAttribute('data-count');
    dataDiscountValue = counterDiscount.getAttribute('data-discount');
    console.log(dataDiscountValue);
    // console.log(parseInt(dataMinus));

    counterDiscountSum = counterWrapperSum.querySelector('.basket__discount-sum');
    const firstSum = document.querySelectorAll('.total-sum');

    firstSum.forEach((item) => {
      // total = total + parseInt(item.innerText.replace(/\s/g, ''));
      // console.log(parseInt(item.innerText.replace(/\s/g, '')));

      total = total + parseInt(item.innerText.replace(/\s/g, ''));
      console.log(parseInt(item.innerText.replace(/\s/g, '')));
    });

    document.querySelector('.basket__total-sum span').innerText = normalPrice(total);
  }
  ////////////////////////////////////////////
  if (e.target.dataset.action === 'plus') {
    counter.innerText = ++counter.innerText;
    counterSum.innerText = parseInt(counter.innerText) * parseInt(dataSumValue);
    // parseInt(counterSum.innerText.replace(/\s/g, '')) + parseInt(dataSumValue);

    console.log(parseInt(counter.innerText) * parseInt(dataSumValue));

    counterDiscountSum.innerText =
      parseInt(counterDiscountSum.innerText.replace(/\s/g, '')) + parseInt(dataDiscountValue);
  }

  if (e.target.dataset.action === 'minus') {
    if (parseInt(counter.innerText) > 1) {
      counter.innerText = --counter.innerText;

      counterSum.innerText =
        parseInt(counterSum.innerText.replace(/\s/g, '')) - parseInt(dataSumValue);

      counterDiscountSum.innerText =
        parseInt(counterDiscountSum.innerText.replace(/\s/g, '')) - parseInt(dataDiscountValue);
    }
  }
});

// counterTotal = document.querySelectorAll('[data-counter]');
// counterTotal.forEach((item) => {
//   console.log(item.innerText);
//   sum = sum + parseInt(item.innerText);
//   console.log(sum);
// });
