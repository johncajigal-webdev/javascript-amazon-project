export let cart = JSON.parse(localStorage.getItem('cart'));

if(!cart){ //if the cart is empty, this is the default value
  cart = [
 //no value added
  ];
}

function saveToStorage(){
  localStorage.setItem('cart', JSON.stringify(cart));
};

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

  saveToStorage();
  //e-e-making sure quantity adds up. No duplication of properties in Cart.js
}


export function removeFromCart(productId){
const newCart = [];

cart.forEach((cartItem)=>{
if(cartItem.productId !== productId){
  newCart.push(cartItem);
}
});

cart = newCart;

saveToStorage();
}