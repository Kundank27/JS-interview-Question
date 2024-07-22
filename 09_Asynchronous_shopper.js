// The Asynchronous Shopper:
// Imagine you are building an online shopping application. Write an asynchronous function called placeOrder that simulates placing an order and returns a promise. The promise should resolve with an order confirmation message after a random delay.



async function placeorder(){
    await new Promise((resolve)=>setTimeout(resolve , Math.random() * 4000 + 1000));
    return "Your order has been successfully placed!"
}

(async () => {
    try {
        const confirmationMessage = await placeorder();
        console.log(confirmationMessage);
    } catch (error) {
        console.error(`Error placing order: ${error.message}`);
    }
})();