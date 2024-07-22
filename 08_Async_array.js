// Async Array Mapping:
//    Write an asynchronous function that takes an array of numbers and returns a new array of Promises where each number is multiplied by 2 after a delay of 500 milliseconds.

async function multiplied(numbers){
  let  multipliedPromises = numbers.map(async(number)=>{
    await new Promise((resolve) => setTimeout(resolve,5000));
    return number*2;
  })
  return Promise.all(multipliedPromises);
}


    const numbers = [1,2,3,4,5];
    multiplied(numbers)
    .then((result) => {
        console.log(result); // Output: [2, 4, 6, 8]
    })
    .catch((error) => {
        console.error('Error:', error);
    });



