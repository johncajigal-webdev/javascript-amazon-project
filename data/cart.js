export const cart = [];

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
    });
  }
  //e-e-making sure quantity adds up. No duplication of properties in Cart.js
}
