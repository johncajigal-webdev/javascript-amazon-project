import { renderOrderSummary } from "./checkout/orderSummary.js";
import { renderPaymentSummary } from "./checkout/paymentSummary.js";
//import '../data/cart-class.js';
//import '../data/backend-practice.js'
import { loadProducts, loadProductsFetch } from "../data/products.js";
import { loadCart } from "../data/cart.js";

async function loadPage() {
  try {
    await loadProductsFetch();
    //throw 'error'
    const value = await new Promise((resolve, reject) => {  
      loadCart(() => {
        //reject('error')
        resolve('value');
      });
    });
  } catch (error) {
    console.log("Error Message!!!");
  }

  renderOrderSummary();
  renderPaymentSummary();
}

loadPage();
/*
Promise.all([
  loadProductsFetch(), 
  new Promise((resolve) => {
    loadCart(() => {
      resolve(); 
    });
  }),
]).then(()=>{
  renderOrderSummary();
  renderPaymentSummary();
});
*/
/*

new Promise((resolve) => {
  loadProducts(() => {
    resolve();
  });
})
  .then(() => {
    return new Promise((resolve) => {
      loadCart(() => {
        resolve();
      });
    });
  })
  .then(() => {
    renderOrderSummary();
    renderPaymentSummary();
  });

*/
/*
loadProducts(() => {
  loadCart(()=>{
    renderOrderSummary();
    renderPaymentSummary();
  });

});
*/
