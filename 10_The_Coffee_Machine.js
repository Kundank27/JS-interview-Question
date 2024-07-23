// The Coffee Machine:
// In your coffee shop application, you need to simulate the process of brewing coffee asynchronously. Write an async function named brewCoffee that takes the type of coffee and returns a promise. The promise should resolve with a message indicating that the coffee is ready after a random delay.
// 

async function brewcoffee(type) {
    const brewingTime = Math.random() * 5000 + 1000;
    await new Promise((resolve) => setTimeout(resolve, brewingTime))
    return `your ${type} coffee is ready `;
}
(async () => {
    try {
        const type = "latte";
        const message = await brewcoffee(type);
        console.log(message);
    }
    catch (error) {
        console.log("error");
    }
}
)();

