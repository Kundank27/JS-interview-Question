// The Sum Selector:
//    You are working on a function that should sum all numbers in an array until it encounters a negative number. Write a function that performs this summation.


// const sum = numbers.reduce((acc, cur) => acc + cur, 0);
// console.log(sum);

function sumUntilNegative(arr){
    let sum = 0;
    for(const number of arr){
        if(number < 0) break;
        else{
            sum+=number;
        }
    }
    return sum;
}

const numbers = [11,22,44,34,-56,76];
console.log(`the sum of postive numbers until get negative number is ${sumUntilNegative(numbers)}`)



