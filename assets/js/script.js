// Assignment Code
var generateBtn = document.querySelector("#generate");


//Character sets
var uppercase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
var lowercase = "abcdefghijklmnopqrstuvwxyz";
var numbers = "123456789";
var specialCharacters = "!@#$%^&*()"

function generatePassword() {

  // how long the password will be
  var getCharacterAmount = function() {
    var characterAmount = "";
    while (characterAmount === "" || characterAmount === null || characterAmount < 8 || characterAmount > 128) {
        characterAmount = prompt("How many characters would you like in your password? Enter any value between 8 and 128.");
    }
    console.log("The string will be " + characterAmount + " characters long.");
    return characterAmount;
  }

  //What characters user wants to use
  var acceptedCharacterAmount = getCharacterAmount();
  
  window.alert("Select which character types you want to use. You must select at least one character type.")

  var useLowercase = window.confirm("Would you like to include lowercase letters in your password?");
  
  var useUppercase = window.confirm("Would you like to include uppercase letters in your password?");
  
  var useSpecialCharacters = window.confirm("Would you like to include special characters in your password?");
  
  var useNumbers = window.confirm("Would you like to include numbers in your password?");

  if (useNumbers === false && useLowercase === false && useUppercase === false && useSpecialCharacters === false) {
    window.alert("You must chose at least one character type! Click 'Generate Password' to try again!");
  }
  
  //Tell user their parameters
  window.alert("You want to make a password " + acceptedCharacterAmount + " characters long, and include the following character types: " + " Lowercase: " + useLowercase + 
  ". Uppercase: " + useUppercase + ". Special Characters: " + useSpecialCharacters + ". Numbers: " + useNumbers + ". Press 'OK' if that is correct.");

  //allowed characters based on user's input
  var allowedCharacters = '';
    if (useLowercase) {
      allowedCharacters += lowercase;
    }
    if (useUppercase) {
      allowedCharacters += uppercase;
    }
    if (useSpecialCharacters) {
      allowedCharacters += specialCharacters;
    }
    if (useNumbers) {
      allowedCharacters += numbers;
    };
  
  var password = '';
  var length = parseInt(acceptedCharacterAmount);
  for (var i = 0; i < length; i++) {
    var random = Math.floor(Math.random() * allowedCharacters.length);
    password += allowedCharacters[random]
  }
  return password;
};

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
