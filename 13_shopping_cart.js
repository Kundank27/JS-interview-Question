// The Shopping Cart Totalizer:
// You are working on an e-commerce website, and you need to calculate the total cost of items in the shopping cart. Implement a function named calculateTotal that takes an array of products with prices and quantities and returns the total cost.

function calculatorTotal(products){
let totalCost = 0;
for (const product of products) {
    totalCost += product.price * product.quantity;
}
return totalCost;

}

const products = [
    { name: "Aloe Vera", price: 59, quantity: 2 },
    { name: "Rice", price: 99, quantity: 1 },
    { name: "Pohe", price: 79, quantity: 3 },
    { name: "Milk", price: 29, quantity: 3 },
    { name: "Bread", price: 49, quantity: 3 },
    { name: "Butter", price: 10, quantity: 3 },
    { name: "Egg", price: 49, quantity: 3 },
];

const cartTotal = calculatorTotal(products);
console.log(`Total cost:${cartTotal}`);