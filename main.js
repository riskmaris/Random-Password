const passwordBox = document.getElementById("password");
const length = 12;

const upperCase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
const lowerCase = "abcdefghijklmnopqrstuvwxyz";
const number = "0123456789";
const symbol = "@#$%^&*()_+</{}[]>\-=";

const allChar = upperCase + lowerCase + number + symbol;
// console.log(allChar);

function createPassword(){
    let password = "";
    password += upperCase[Math.floor(math.random() * upperCase.length)];
    password += lowerCase[Math.floor(math.random() * upperCase.length)];
    password += number[Math.floor(math.random() * upperCase.length)];
    password += symbol[Math.floor(math.random() * upperCase.length)];

    while(length > password.length){
        password += allChar[Math.floor(math.random() * allChar.length)];
    }

passwordBox.value = password;
}

function copyPassword(){
    passwordBox.select();
    document.executeCommand("copy");
}
