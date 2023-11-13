// Assignment code here
var uperCase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
var lowerCase = "abcdefghijklmnopqrstuvwxyz";
var number = "1234567890";
var symbol ="@#$%&!";

var langth = 4;

var allCase = uperCase + lowerCase +symbol + number;
// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");
 
  passwordText.value = password;

}

// Add event listener to generate button
function generatePassword(){
  var userChoice = window.prompt("Enter the Langth of the password:");
  window.alert("It's included Upercase!");
  window.alert("It's included Lowercase!");
  window.alert("It's included Symboles!");
  window.alert("It's included Numbrs!");


  langth = userChoice;
  console.log("langth is : " + langth);
 let password = "";
 password += lowerCase[Math.floor(Math.random() * uperCase.length)];
 password += uperCase[Math.floor(Math.random() * lowerCase.length)];
 password += symbol[Math.floor(Math.random() * symbol.length)];
 password += number[Math.floor(Math.random() * number.length)];

 while(langth > password.length){
  password += allCase[Math.floor(Math.random() * allCase.length)]
 }

  return password;
}
generateBtn.addEventListener("click", writePassword);