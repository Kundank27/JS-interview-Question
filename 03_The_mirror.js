// The Mirror Mirror:
// Imagine you have a string, and you need to create a new string that is a mirror image of the original. Write a function that appends the reversed version of the original string to itself.

const originalString = "hello world!";

function mirrorString(string){
    let  mirroredResult = string + string.split('').reverse().join('');

    return mirroredResult;
}

const mirroredResult = mirrorString(originalString);
console.log(mirroredResult); // Output: "world!olleh"