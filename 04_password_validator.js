// The Password Validator:
// You are building a password validation feature. Create a function that checks if a given password meets the following criteria: at least 8 characters long, contains both uppercase and lowercase letters, and includes at least one digit. 



function checkPassword(userPassword) {
    if (userPassword.length < 8) {
        return console.log("The password length is at least 8 characters")
    }
    const lowercase = /[a-z]/.test(userPassword);
    const uppercase = /[A-Z]/.test(userPassword);
    const digit = /\d/.test(userPassword);
    if (!lowercase || !uppercase || !digit) {
        return console.log("The password contains at least one lowercase letter, one uppercase letter and one digit")
    }

    return console.log("The password is valid");
}
const userPassword = "myPassword1";
const isvalid = checkPassword(userPassword);
console.log(isvalid);