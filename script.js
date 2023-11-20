// Assignment code here
var uperCase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
var lowerCase = "abcdefghijklmnopqrstuvwxyz";
var number = "1234567890";
var symbol = "@#$%&!";
var langth = 4;

// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

// This is the function that uses to return the genereted password to the user
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");
  passwordText.value = "";
  passwordText.value = password;
}
// // This is the function that uses to evaluat the password langth and  genereted password
function generatePassword() {
  var passwordLangth = window.prompt("Enter the Langth of the password:");
  var allCase = "";
  if (passwordLangth < 8 || passwordLangth >= 128) {
    password = "  Please,  at list the number you entered should be 8 -128 degiets.";

  } else {

    langth = passwordLangth;
    let password = "";
  
// All case checking lines

    var uperCaseResponse = confirm("Do you wnat Upercase in your new password?");
    if (uperCaseResponse == true){ 
      allCase += uperCase ;
      // console.log("Uper case responce" + uperCaseResponse)
      password += uperCase[Math.floor(Math.random() * uperCase.length)];
      // console.log("uper case password" + password.toString())
    }
    
    var lowerCaseResponse = confirm("Do you wnat lowerCase in your new password?");
    if (lowerCaseResponse == true ){ allCase += lowerCase ;
      // console.log("lower case responce" + lo)
      password += lowerCase[Math.floor(Math.random() * lowerCase.length)];
    }
    
    var symbolResponse = confirm("Do you wnat symbol in your new password?");
    if (symbolResponse == true ){ allCase += symbol ;
      // console.log("symbol responce" + uperCaseResponse)
      password += symbol[Math.floor(Math.random() * symbol.length)];
    }

     var numberResponse = confirm("Do you wnat number in your new password?");
    if (numberResponse == true ){ allCase += number ;
      password += number[Math.floor(Math.random() * number.length)];
    }


    if(password === ""){
      window.alert("All cases are not selected. please atlist one case select!");
      password = "Sorry, All cases are not selected. please atlist one case select!";
      return password;
    }
   
     while (langth > password.length) {
      password += allCase[Math.floor(Math.random() * allCase.length)]
    }
    console.log("password is :", password);
    
    return password;

  }

  return password;
}
generateBtn.addEventListener("click", writePassword);