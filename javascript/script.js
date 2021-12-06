'strict';

// Selecting Elements for the modal window

const modalWindow = document.querySelector('.modal-window-container');
const bigProductImg = document.querySelector('.product-img--main');

const iconClose = document.querySelector('#icon-close');

const productImgFirst = document.querySelectorAll(
  '.product-cards__img-small--1'
);

const productImgSecond = document.querySelectorAll(
  '.product-cards__img-small--2'
);

const productImgThird = document.querySelectorAll(
  '.product-cards__img-small--3'
);

const productImgFourth = document.querySelectorAll(
  '.product-cards__img-small--4'
);

const allSmallProductImg = document.querySelectorAll(
  '.product-cards__img-small'
);

const allProductImgBig = document.querySelectorAll('.product-img--big');

const iconPrevious = document.querySelector(
  '.modal-window__icon-container--previous'
);

const iconNext = document.querySelector('.modal-window__icon-container--next');

// Mobile Navigation

const mobileMenuIcon = document.querySelector('.header__menu-icon');

const mobileNav = document.querySelector('.mobile-nav__overlay ');

const closeIconNav = document.querySelector('.close-icon-nav');

// Cart modal window
const cartModalContainer = document.querySelector('.modal-cart-container');

const imgIconCart = document.querySelector('.checkout__icon');
const imgAvatarCart = document.querySelector('.checkout__avater-img');

// Shopping Cart functionality

const plusIcon = document.querySelector('.btn__icon-plus');

const minusIcon = document.querySelector('.btn__icon-minus');

const btnSecondary = document.querySelector('.btn-secondary');

const btnSecondaryAmount = document.querySelector('.btn-secondary__amount');

const cartContainer = document.querySelector('.product-items-container');

const primaryBtnAdding = document.querySelector('.btn-cart-input');

const productPrice = parseInt(
  document.querySelector('.product-price').textContent
);

// mobile gallery

const mobileIconNext = document.querySelector('.img-gallery__icon-next');
const mobileIconPrevious = document.querySelector(
  '.img-gallery__icon-previous'
);
const slideImages = document.querySelectorAll('.img-gallery-slide');

const maxSlideImages = slideImages.length;

/////////////////////////////////////////
// FUNCTIONALITY FOR OPENING AND CLOSING THE MODAL WINDOW

const openModal = function () {
  modalWindow.classList.remove('modal-window-container--hidden');
};

const closeModal = function () {
  modalWindow.classList.add('modal-window-container--hidden');
};

bigProductImg.addEventListener('click', openModal);

// document.addEventListener('keydown', function (e) {
//   console.log(e);
// });

iconClose.addEventListener('click', closeModal);

document.addEventListener('keydown', function (e) {
  if (
    e.key === 'Escape' &&
    !modalWindow.classList.contains('modal-window-container--hidden')
  ) {
    closeModal();
  }
});

/////////////////////////////////////////
// Functionality for changing the pictures

// Set the currentNumber for the active big Image on the page
let currentNumber = 1;

// To remove active class
const removeActiveImg = function () {
  allSmallProductImg.forEach(img =>
    img.classList.remove('product-cards__img-small--active')
  );
};

// Set the active class
const addActiveImg = function (img) {
  img.classList.add('product-cards__img-small--active');
};

// 1 Image
productImgFirst.forEach(clickedImg =>
  clickedImg.addEventListener('click', function (e) {
    removeActiveImg();
    clickedImg.classList.add('product-cards__img-small--active');
    console.log(clickedImg);

    document
      .querySelectorAll('.product-cards__img-small--1')
      .forEach(el => el.classList.add('product-cards__img-small--active'));

    allProductImgBig.forEach(
      bigImg =>
        (bigImg.src = `./images/image-product-${(currentNumber = 1)}.jpg`)
    );
  })
);

// 2 Image
productImgSecond.forEach(clickedImg =>
  clickedImg.addEventListener('click', function (e) {
    removeActiveImg();
    clickedImg.classList.add('product-cards__img-small--active');

    document
      .querySelectorAll('.product-cards__img-small--2')
      .forEach(el => el.classList.add('product-cards__img-small--active'));

    allProductImgBig.forEach(
      bigImg =>
        (bigImg.src = `./images/image-product-${(currentNumber = 2)}.jpg`)
    );
  })
);

// 3 Image
productImgThird.forEach(clickedImg =>
  clickedImg.addEventListener('click', function (e) {
    removeActiveImg();
    clickedImg.classList.add('product-cards__img-small--active');

    document
      .querySelectorAll('.product-cards__img-small--3')
      .forEach(el => el.classList.add('product-cards__img-small--active'));

    allProductImgBig.forEach(
      bigImg =>
        (bigImg.src = `./images/image-product-${(currentNumber = 3)}.jpg`)
    );
  })
);

// 4 Image
productImgFourth.forEach(clickedImg =>
  clickedImg.addEventListener('click', function (e) {
    removeActiveImg();
    clickedImg.classList.add('product-cards__img-small--active');

    document
      .querySelectorAll('.product-cards__img-small--4')
      .forEach(el => el.classList.add('product-cards__img-small--active'));

    allProductImgBig.forEach(
      bigImg =>
        (bigImg.src = `./images/image-product-${(currentNumber = 4)}.jpg`)
    );
  })
);

// ICON NEXT AND PREVIOUS FUNCTIONALITY

// Function for setting image source for the big image on the page
const bigImg = function (number = 1) {
  if (number > 0 && number <= 4) {
    allProductImgBig.forEach(
      bigImg => (bigImg.src = `./images/image-product-${number}.jpg`)
    );
  }
};

iconNext.addEventListener('click', function (e) {
  if (currentNumber < 4) {
    currentNumber++;
    bigImg(currentNumber);

    // removing active class for all images
    removeActiveImg();

    // adding active class for the current image
    document
      .querySelectorAll(`.product-cards__img-small--${currentNumber}`)
      .forEach(img => addActiveImg(img));
  }
});

iconPrevious.addEventListener('click', function (e) {
  if (currentNumber > 0) {
    // Prevent the current number to be 0
    if (currentNumber === 1) return;

    currentNumber--;
    bigImg(currentNumber);

    // removing active class for all images
    removeActiveImg();

    // adding active class for the current image
    document
      .querySelectorAll(`.product-cards__img-small--${currentNumber}`)
      .forEach(img => addActiveImg(img));
  }
});

///////////////////////////////////////
// Mobile Navigation opening and closing

mobileMenuIcon.addEventListener('click', function () {
  mobileNav.classList.remove('mobile-nav--hidden');
});

closeIconNav.addEventListener('click', function () {
  mobileNav.classList.add('mobile-nav--hidden');
});

/////////////////////////////////////////
// Cart modal window

const openCartModal = function () {
  cartModalContainer.classList.toggle('modal-cart-container--hidden');
};

// openCartModal();

imgIconCart.addEventListener('click', openCartModal);

imgAvatarCart.addEventListener('click', openCartModal);

/////////////////////////////////////////
// Mobile Gallery Funtionality

let curSlide = 0;

mobileIconNext.addEventListener('click', function (e) {
  // In case slider is on index of 3 return
  if (curSlide === 3) return;

  slideImages[curSlide].classList.toggle('slide-hidden');

  curSlide++;
  slideImages[curSlide].classList.toggle('slide-hidden');
});

mobileIconPrevious.addEventListener('click', function (e) {
  // In case slider is on index on 0 return
  if (curSlide === 0) return;

  slideImages[curSlide].classList.toggle('slide-hidden');

  curSlide--;
  slideImages[curSlide].classList.toggle('slide-hidden');
});

/////////////////////////////////////////
// Cart functionality

// Product Amount
let curAmount = parseInt(btnSecondaryAmount.textContent);

const increaseAmount = function () {
  // Increasing the product amount +1
  btnSecondaryAmount.textContent = ++curAmount;

  return curAmount;
};

const decreaseAmount = function () {
  // Return if the Integer is smaller than 0
  if (curAmount <= 0) return;

  // Ddecreasing the product amount -1
  btnSecondaryAmount.textContent = --curAmount;
  return curAmount;
};

plusIcon.addEventListener('click', increaseAmount);
minusIcon.addEventListener('click', decreaseAmount);

// Adding Product amount to the cart

// Checking if the current button is on the page by default it is false
let checkoutBtnPresent = false;

// Intl for Currency formating
const options = {
  style: 'currency',
  currency: 'USD',
};

const productPriceIntl = new Intl.NumberFormat('en-US', options).format(
  productPrice
);

// Adding to Cart

primaryBtnAdding.addEventListener('click', function (e) {
  // If current amount is 0 add nothing to the card
  if (curAmount === 0) return;

  cartModalContainer.classList.remove('modal-cart-container--hidden');

  cartContainer.textContent = '';

  // Creating the Product Markup
  cartContainer.insertAdjacentHTML(
    'afterbegin',
    `
    <figure class="product-img">
  <img
    src="./images/image-product-1-thumbnail.jpg"
    alt="Product image in cart"
    class="product-img__img"
  />
</figure>
<p class="product-name">Autumn Limited Edition Sneakers</p>
<p class="product-price">
  ${new Intl.NumberFormat('en-US', options).format(
    productPrice.toFixed(2)
  )} x <span class="product-amount">${curAmount}</span>
  <span class="product-price__total"><strong>${new Intl.NumberFormat(
    'en-US',
    options
  ).format((productPrice * curAmount).toFixed(2))}</strong></span>
</p>

<img
  src="./images/icon-delete.svg"
  alt="Icon to delete"
  class="product-icon__bin"
/>
`
  );

  // I check if the the checkout btn is not present then we insert one
  if (!checkoutBtnPresent) {
    cartModalContainer.insertAdjacentHTML(
      'beforeend',
      `<button
      class="btn btn-primary product-checkout-button u-margin-bottom-small"
    >
      Checkout
    </button>`
    );
    // Setting the checkout btn present  to true, so next time the btn gets not insereted again
    checkoutBtnPresent = true;
  }

  // Deleting Items

  const deleteBin = document.querySelector('.product-icon__bin');

  deleteBin.addEventListener('click', function (e) {
    cartContainer.textContent = '';
    cartModalContainer.removeChild(
      document.querySelector('.product-checkout-button')
    );
    checkoutBtnPresent = false;

    cartContainer.insertAdjacentHTML(
      'afterbegin',
      `<p class="product-cart__empty">Your cart is empty</p>`
    );
  });

  btnSecondaryAmount.textContent = 0;
});

document.querySelector('.checkout__icon');

const span = window
  .getComputedStyle(document.querySelector('.checkout__icon'), '::after')
  .getPropertyValue('content');

console.log(span);
