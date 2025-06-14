export let cart = undefined;

loadToStorage();

const test = "";

export function loadToStorage() {
  cart = JSON.parse(localStorage.getItem("cart"));

  if (!cart) {
    //if the cart is empty, this is the default value
    cart = [
      {
        productId: "e43638ce-6aa0-4b85-b27f-e1d07eb678c6",
        quantity: 2,
        deliveryOptionId: "3",
      },
    ];
  }
}

function saveToStorage() {
  localStorage.setItem("cart", JSON.stringify(cart));
}

export function addToCart(productId) {
  //s-s-making sure quantity adds up. No duplication of properties in Cart.js
  let matchingItem;
  cart.forEach((cartitem) => {
    if (productId === cartitem.productId) {
      matchingItem = cartitem;
    }
  });

  if (matchingItem) {
    matchingItem.quantity += 1;
  } else {
    cart.push({
      productId: productId,
      quantity: 1,
      deliveryOptionId: "1",
    });
  }
  //e-e-making sure quantity adds up. No duplication of properties in Cart.js

  saveToStorage();
}

export function removeFromCart(productId) {
  const newCart = [];

  cart.forEach((cartItem) => {
    if (cartItem.productId !== productId) {
      newCart.push(cartItem);
    }
  });

  cart = newCart;

  saveToStorage();
}

export function updateDeliveryOption(productId, deliveryOptionId) {
  let matchingItem;
  cart.forEach((cartitem) => {
    if (productId === cartitem.productId) {
      matchingItem = cartitem;
    }
  });

  matchingItem.deliveryOptionId = deliveryOptionId;

  saveToStorage();
}




export function loadCart(fun) {
  const xhr = new XMLHttpRequest();

  xhr.addEventListener("load", () => {
    console.log(xhr.response)
   

    fun();
  });

  xhr.open("GET", "https://supersimplebackend.dev/cart");
  xhr.send();
}