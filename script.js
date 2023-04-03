function generatePassword(){
}

var characterLength = 8;
var choiceArray = []; //  change the name of this one later

var specialChararray = [ '!','@','#','$','%','^','&','*','[',']','{', '}'];
var lowerCasearray = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o",  "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
var upperCasearray = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
var numbersArray = ['1','2','3','4','5','6','7','8','9','0'];


function getPrompts(){
   choiceArray = [];

    characterLength = parseInt(prompt("How many caharaters do you want your passwor to be? (8*-128 characters"));

    if (isNaN (characterLength) || characterLength < 8 || characterLength > 128) { 
      alert("Character length has to be a number. 8-128 digits. Please try again.");
      return false; 
    }

 if (confirm("Would you like lowecase letters in your password")) {
  choiceArray = choiceArray.concat(lowerCasesarray);
 } 

 if (confirm("Would you like Uppercase letters in your password")) {
  choiceArray = choiceArray.concat(upperCasearray);
 } 

 if (confirm("Would you like numberArray letters in your password")) {
  choiceArray = choiceArray.concat(numbersArray);
 } 

 if (confirm("Would you like specialChararray letters in your password")) {
  choiceArray = choiceArray.concat(specialChararray);
 }    

 return true;
}


// Assignment Code
var generateBtn = document.querySelector("#generate");


// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button

generateBtn.addEventListener("click", writePassword);

// console.log(generatePassword(8)); // "F2#m9R$q"
 
// // funtion to generate passwor//


