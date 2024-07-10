//A promise is an object representing the eventual completion or failure of an asynchronous operation.
//Promises are used to handle async operations in JS
//promise objects are immutable
//promise is an empty object which will be filled after execution of an asynchronous operation.
//promiseState  -> pending,fulfilled,rejected

//this resoves the Inversion of control issue.
const GITHUB_API = "https://api.github.com/users/skc2K00";
const user = fetch(GITHUB_API);
console.log(user);

const cart = ["pant","shirt","shoe"]
//using callbacks
createOrder(cart,function() {
    proceedToPayment(orderId);
});

//using promises
const promise = createOrder(cart);

promise.then(function(orderId) {
    proceedToPayment(orderId);
})
.then(function(paymentInfo) {
    showOrderSummary(paymentInfo);
})
.then(function(paymentInfo) {
    updateWalletBalance(paymentInfo);
})

//here we have control over the proceedToPayment api as when promise resolved 
//it will be definetily called only once which is handled by javascript.

//we can solve the issue of callback hell using promise chaining.
//we can also use arrow functions for writing callback functions.
createOrder(cart)
    .then((orderId) => proceedToPayment(orderId))
    .then((paymentInfo) => showOrderSummary(paymentInfo))
    .then((paymentInfo) => updateWalletBalance(paymentInfo))