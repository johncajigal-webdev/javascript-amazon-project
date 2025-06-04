import { renderOrderSummary } from "./checkout/orderSummary.js";
import { renderPaymentSummary } from "./checkout/paymentSummary.js";
//import '../data/cart-class.js';
//import '../data/backend-practice.js'
import { loadProducts } from "../data/products.js";
import { loadCart } from "../data/cart.js";

Promise.all([
  new Promise((resolve) => {
    loadProducts(() => {
      resolve("value 1"); //value 1
    });
  }),
  new Promise((resolve) => {
    loadCart(() => {
      resolve(); //no value = undefined
    });
  }),
]).then((values)=>{
  console.log(values); //Output: Array [ "value 1", undefined ]
  renderOrderSummary();
  renderPaymentSummary();
});


/*
new Promise((resolve) => {
  loadProducts(() => {
    resolve("value 1");
  });
})
  .then((value) => {
    console.log(value); //Output: value 1
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
