// The Vowel Counter:
//    You need to create a function that counts the number of vowels in a given string. Consider both uppercase and lowercase vowels.

function countVowels(str) {
    const vowels = /[aeiou]/gi; // Case-insensitive regex for vowels
    const matches = str.match(vowels); // Find all vowel matches

    // If no matches found, return 0
    return matches ? console.log(matches,  matches.length) : console.log(0);

}

// Example usage:
const inputString = "A Hello, World!";
const vowelCount = countVowels(inputString);
console.log(`Number of vowels: ${vowelCount}`); // Output: Number of vowels: 3
