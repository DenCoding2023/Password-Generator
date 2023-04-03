function generatePassword(){

var characterLength = 8;
var choiceArray = [];

var specialChararray = [ '!','@','#','$','%','^','&','*','[',']','{', '}'];
var lowerCasearray = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o",  "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
var upperCasearray = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
var numbersArray = ['1','2','3','4','5','6','7','8','9','0'];


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


function getPrompts(){
    characterLength = parseInt(prompt("How many caharaters do you want your passwor to be? (8*-128 characters"));

    if(isNaN (characterLength) || characterLength <8 || characterLength > 128) { 
      alert("Character length has to be a number. 8-128 digits. Please try again.");
      return false; 
    }
 (confirm("Would you like lowecase letters in you pass")) {
  choiceArray = choiceArray.concat(lowerCasesarray);
 } 

 (confirm("Would you like Uppercase letters in you pass")) {
  choiceArray = choiceArray.concat(upperCasearray);
 } 

 (confirm("Would you like numberArray letters in you pass")) {
  choiceArray = choiceArray.concat(numberArray);
 } 

 (confirm("Would you like numberArray letters in you pass")) {
  choiceArray = choiceArray.concat(numbers   Array);
 }    

 return true;
}

}

