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

// Basket logic

let deleteElementBasketMissing = document.querySelectorAll('.basket__block'),
  countMissingBasket = document.querySelector('.basket__missing-title span');

deleteElementBasketMissing.forEach((item, i) => {
  item.addEventListener('click', (e) => {
    const target = e.target;

    if (target.classList.contains('trash-can')) {
      item.remove();
      item.setAttribute('data-count', 0);
      console.log(item);
    }
  });
});

let deleteBasket = document.querySelectorAll('.basket__missing-block');
let spanTotalSum = document.querySelector('.span-total-sum');
let spanTotalCount = document.querySelector('.basket__product-title span');
let spanTotalDiscount = document.querySelector('.basket__product-sum span');

let countBasket = deleteElementBasket.length;

let basketTitleCount = document.querySelector('.basket__product-title span');
let basketTitleCountLength = parseInt(basketTitleCount.innerText);

window.addEventListener('click', function (e) {
  let counter, counterSum, counterDiscountSum, dataSumValue, dataDiscountValue;
  let total = 0;
  let totalCount = 0;
  let totalCountSum = 0;

  function numberDeleteSpaces(str) {
    return String(str).replace(/\s/g, '');
  }

  function totalSum() {
    const firstSum = document.querySelectorAll('.total-sum');
    firstSum.forEach((item) => {
      total += parseInt(numberDeleteSpaces(item.innerText));

      spanTotalSum.innerText = normalPrice(total);
    });

    const firstTotalCount = document.querySelectorAll('.basket__count');
    firstTotalCount.forEach((item) => {
      totalCount += parseInt(item.innerText);

      spanTotalCount.innerText = totalCount;
    });

    const firstTotatDiscountSum = document.querySelectorAll('.total-sum-discount');
    firstTotatDiscountSum.forEach((item) => {
      totalCountSum += parseInt(numberDeleteSpaces(item.innerText));

      spanTotalDiscount.innerText = normalPrice(totalCountSum);
    });

    const spanDiscount = document.querySelector('.sum-dicount span');
    spanDiscount.innerText = `${normalPrice(totalCountSum - total)}`;
  }

  if (e.target.dataset.action === 'trash') {
    totalSum();
    console.log(total);
    countBasket = countBasket - 1;
    if (countBasket === 0) {
      spanTotalSum.innerText = 0;
      spanTotalCount.innerText = 0;
      spanTotalDiscount.innerText = 0;
      document.querySelector('.sum-dicount').innerText = `0 com`;
    }
  }

  if (e.target.dataset.action === 'plus' || e.target.dataset.action === 'minus') {
    const counterWrapper = e.target.closest('.basket__block');
    counter = counterWrapper.querySelector('[data-counter]');
    const counterWrapperSum = e.target.closest('.basket__wrapper-sum');
    console.log(counterWrapperSum);
    counterSum = counterWrapper.querySelector('.total-sum');

    counterDiscount = counterWrapper.querySelector('.basket__discount-sum');

    // mobile
    counterSumMobile = counterWrapper.querySelector('.total-sum-mobile');
    dataSumValueMobile = counterSumMobile.getAttribute('data-count');
    dataDiscountValueMobile = counterDiscount.getAttribute('data-discount');
    counterDiscountSumMobile = counterWrapper.querySelector('.total-sum-discount');

    dataSumValue = counterSum.getAttribute('data-count');
    dataDiscountValue = counterDiscount.getAttribute('data-discount');
    counterDiscountSum = counterWrapper.querySelector('.basket__discount-sum');
    if (e.target.dataset.action === 'plus') {
      counter.innerText = ++counter.innerText;
      counterSum.innerText = normalPrice(
        parseInt(numberDeleteSpaces(counterSum.innerText)) + parseInt(dataSumValue),
      );
      counterDiscountSum.innerText = normalPrice(
        parseInt(numberDeleteSpaces(counterDiscountSum.innerText)) +
          parseInt(numberDeleteSpaces(dataDiscountValue)),
      );

      //mobile

      counterSumMobile.innerText = normalPrice(
        parseInt(numberDeleteSpaces(counterSumMobile.innerText)) + parseInt(dataSumValueMobile),
      );

      counterDiscountSumMobile.innerText = normalPrice(
        parseInt(numberDeleteSpaces(counterDiscountSumMobile.innerText)) +
          parseInt(numberDeleteSpaces(dataDiscountValueMobile)),
      );
    }
    if (e.target.dataset.action === 'minus') {
      if (parseInt(counter.innerText) > 1) {
        counter.innerText = --counter.innerText;
        counterSum.innerText = normalPrice(
          parseInt(numberDeleteSpaces(counterSum.innerText)) - parseInt(dataSumValue),
        );
        counterDiscountSum.innerText = normalPrice(
          parseInt(numberDeleteSpaces(counterDiscountSum.innerText)) -
            parseInt(numberDeleteSpaces(dataDiscountValue)),
        );

        //mobile

        counterSumMobile.innerText = normalPrice(
          parseInt(numberDeleteSpaces(counterSumMobile.innerText)) - parseInt(dataSumValueMobile),
        );

        counterDiscountSumMobile.innerText = normalPrice(
          parseInt(numberDeleteSpaces(counterDiscountSumMobile.innerText)) -
            parseInt(numberDeleteSpaces(dataDiscountValueMobile)),
        );
      }
    }
    totalSum();
  }
});
