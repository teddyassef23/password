// Assignment code here
var uperCase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
var lowerCase = "abcdefghijklmnopqrstuvwxyz";
var number = "1234567890";
var symbol = "@#$%&!";
var langth = 4;
var allCase = uperCase + lowerCase + symbol + number;


// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

// This is the function that uses to return the genereted password to the user
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");
  passwordText.value = " ";
  passwordText.value = password;

}

// // This is the function that uses to evaluat the password langth and  genereted password
function generatePassword() {
  var passwordLangth = window.prompt("Enter the Langth of the password:");

  if (passwordLangth < 4 || passwordLangth >= 128) {
    password = "  Please,  at list the number you entered should be 4 -128 degiets."


  } else {

    window.alert("It's included Upercase!");
    window.alert("It's included Lowercase!");
    window.alert("It's included Symboles!");
    window.alert("It's included Numbrs!");


    langth = passwordLangth;
    console.log("langth is : " + langth);
    let password = "";
    password += lowerCase[Math.floor(Math.random() * uperCase.length)];
    password += uperCase[Math.floor(Math.random() * lowerCase.length)];
    password += symbol[Math.floor(Math.random() * symbol.length)];
    password += number[Math.floor(Math.random() * number.length)];

    while (langth > password.length) {
      password += allCase[Math.floor(Math.random() * allCase.length)]
    }
    console.log("password is :", password);
    return password;
  }
  return password;
}
generateBtn.addEventListener("click", writePassword);