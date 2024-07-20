// The Double Trouble:
// You are tasked with writing a function that doubles each element in an array. However, there's a catch: if the array contains consecutive duplicate elements, only double one of them.

const inputArr = [1, 2, 3, 4, 4, 5, 6, 6, 6, 7, 8, 9, 9, 3];
function DoubleArray(arr){
    const result= [];
    let prevElement = null;

    for (const element of arr) {
        if (element !== prevElement) {
            result.push(element * 2);
        } else {
            result.push(element);
        }
        prevElement = element;
    }
return result;
}
const doubleArr = DoubleArray(inputArr);

console.log(doubleArr);


