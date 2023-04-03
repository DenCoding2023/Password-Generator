function generatePassword(){
}
// set the lenght of the passwork
var characterLength = 8;
var optionsArray = []; //  These are the options allowed to select from 

var specialCharacter = [ '!','@','#','$','%','^','&','*','[',']','{', '}'];
var lowerCase = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o",  "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
var upperCase = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
var numbers = ['1','2','3','4','5','6','7','8','9','0'];


// Assignment Code
var generateBtn = document.querySelector("#generate");


generateBtn.addEventListener("click", writePassword); // When the use click this activates the commands

// Write password to the #password input
function writePassword() {
  var selectedPromts = getPrompts();  //this were the promps are selected
  var passwordText = document.querySelector("#password");
  
    if (selectedPromts) {
  var newPassword = generatePassword();

      passwordText.value = newPassword;
  } else{{
    passwordText.value = "";
  }
  }



  function generatePassword() {
    var password = "";
    for(var i = 0; i < characterLength; i++) {
    var randomIndex = Math.floor(Math.random() * optionsArray.length);
    password = password + optionsArray[randomIndex];
  
  }
    return password;
  }
  
}



function getPrompts(){
  optionsArray = [];

    characterLength = parseInt(prompt("Select between (8 and 12) characters want your passwor to be?"));

    if (isNaN (characterLength) || characterLength < 8 || characterLength > 128) { 
      alert("Character length has to be betwen (8 to 128) digits. Please try again!!.");
      return false; 
    }

 if (confirm("Would you like lowercase letters such as: (abcdef) in your password")) {
  optionsArray = optionsArray.concat(lowerCase);
 } 

 if (confirm("Would you like Uppercase letters such as:(ABCDEF) in your password")) {
  optionsArray = optionsArray.concat(upperCase);
 } 

 if (confirm("Would you like numbers such as: (12345) in your password")) {
  optionsArray = optionsArray.concat(numbers);
 } 

 if (confirm("Would you like special characters such as: (!@#$%^) in your password")) {
  optionsArray = optionsArray.concat(specialCharacter);
 }    

 return true;
}



// Add event listener to generate button



// console.log(generatePassword(8)); // "F2#m9R$q"
 
// // funtion to generate passwor//


