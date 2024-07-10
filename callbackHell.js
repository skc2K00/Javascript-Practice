// callbacks are the most important things in js programming.
//which gives us the feasibiity of asychronous programming in js 
// 2 main issues of callback functions:
//callback hell (Pyramid of Doom)
//Inversion of control (IOC)
// lets take an example of an ecommerce application
// assume there are 4 apis 
//createOrder,proceedToPayment,showOrderSummary and updateWallet

const cart = ["pant","shirt","shoe"]

api.createOrder(cart, function () {

    api.proceedToPayment(function () {

        api.showOrderSummary(function () {

            api.updateWallet()
        })
    })
})

//If you see here after the order creation the payment should be done 
// and we are not calling the proceedToPayment api here as we are giving the control
//to createOrder api for calling it. Like the same here one api is calling another on it goes on incase of a huge application.
//one callback function is caling another callback and it goes on which is not the ideal scenario and known as callback hell.

//Inersion of control is another problem we are loosing the control of our program.
//instead of we calling the api's we are giving the control to another callback function which is risky.