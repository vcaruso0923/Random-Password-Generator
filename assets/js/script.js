// Assignment Code
var generateBtn = document.querySelector("#generate");


//Character sets
var uppercase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
var lowercase = "abcdefghijklmnopqrstuvwxyz";
var numbers = "123456789";
var specialCharacters = "!@#$%^&*()"

function generatePassword() {

  //what characters would you like to allow , and how many?
  var getCharacterAmount = function (){
    var characterAmount = window.prompt("How many characters would you like in your password? Enter any value between 8 and 128.");
    if (characterAmount < 8 || characterAmount > 128 || characterAmount === "" || characterAmount === null) {
      window.alert("The value you entered is invalid. Try again!");
      getCharacterAmount();
    }
  }
  getCharacterAmount();
  
  var useLowercase = window.confirm("Would you like to include lowercase letters in your password?");
  
  var useUppercase = window.confirm("Would you like to include uppercase letters in your password?");
  
  var useSpecialCharacters = window.confirm("Would you like to include special characters in your password?");
  
  var useNumbers = window.confirm("Would you like to include numbers in your password?");
  
  //Tell user their parameters
  window.alert("You want to make a password " + characterAmount + " characters long, and include the following character types: " + " Lowercase: " + useLowercase + 
  ". Uppercase: " + useUppercase + ". Special Characters: " + useSpecialCharacters + ". Numbers: " + useNumbers + ". Press 'OK' if that is correct.")
};

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
