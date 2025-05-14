let productsHtml = '';

products.forEach((product)=>{
  productsHtml += `
  <div class="item">
    <p>${product.name}</p>
    <p>${product.price}</p>
    <button class="js-add-to-cart" data-id="${product.id}">Add To Cart</button>
  </div>
  `;
});

const productsHTML = document.querySelector('.js-products');
productsHTML.innerHTML = productsHtml;

let cartHtml = "";

cart.forEach((cart) => {
  cartHtml += ` <div class="cart">
    <p>${cart.name}</p>
    <p>${cart.price}</p>
  </div>
  `;
});

const cartHTML = document.querySelector(".js-cart");
cartHTML.innerHTML = cartHtml;



let buttonCart = document.querySelectorAll('.js-add-to-cart');

buttonCart.forEach((cartButton)=>{
  cartButton.addEventListener('click', ()=>{
   let productId = cartButton.dataset.id;

   let matchedProduct='';

   cart.forEach((item)=>{
    if(productId === item.id){
      matchedProduct = item;
    }
   })

   if(matchedProduct){
    matchedProduct.quantity ++;
   }else{
    cart.push({
      id: productId,
      quantity: 1,
    })
   }


let quantity = 0;

cart.forEach((item) => {
  quantity += item.quantity;
});

const quantityHTML = document.querySelector(".js-quantity");

quantityHTML.innerHTML = quantity;


  });

});
