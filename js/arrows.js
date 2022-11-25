let arrows = document.querySelectorAll('.basket__choice-img'),
  blocks = document.querySelectorAll('.basket__blocks'),
  blockss = document.querySelectorAll('.basket__blocks-active'),
  block = document.querySelector('.basket__blocks');

console.log(arrows[0]);

arrows.forEach((item, i) => {
  item.addEventListener('click', () => {
    blocks[i].classList.toggle('basket__blocks-active');
    arrows[i].classList.toggle('basket__choice-img-active');
  });
});

//////////////////////////

let selectAll = document.querySelector('.select-all'),
  allCheckbox = document.querySelectorAll('.checkbox-js');

let listBoolean = [];

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

let payment = document.querySelector('.checkbox-payment');
btnActive = document.querySelector('.basket__access-btn');
payment.addEventListener('change', function () {
  if (this.checked) {
    btnActive.classList.add('basket__access-btn-active');
  } else {
    btnActive.classList.remove('basket__access-btn-active');
  }
});
