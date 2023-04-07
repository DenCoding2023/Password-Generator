function generatePassword(){
}
// set the lenght of the passwork
var characterLength = 8;
var optionsArray = []; //  These are the options allowed to select from 

var specialCharacter = ["!", "@", "#", "$", "%", "^", "&", "*", "(", ")", "+", "?", "/", "-", ":", ";", "[", "]", "{", "}", ".", "<", ">", "=", "_", "`", "|", "~"];
var lowerCase = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o",  "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
var upperCase = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
var numbers = ['1','2','3','4','5','6','7','8','9','0'];


// This attached it to the button at Generate
var generateBtn = document.querySelector("#generate");


generateBtn.addEventListener("click", writePassword); // When the use click this activates the event listners

// This sets the fuction for the use to select the getPropmts options. 
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


// This is a loop that will continue one to go through the character options. 
  function generatePassword() {
    var password = "";
    for(var i = 0; i < characterLength; i++) {   //var is = 0 in order to start for the firt item in the line.
    var randomIndex = Math.floor(Math.random() * optionsArray.length);
    password = password + optionsArray[randomIndex];       //this line conccatinate the radomizer and the possible optiosn.
  
  }
    return password;
  }
  
}


//Here we set up the chriteria for the promps to pop up and provide some feedback. 
function getPrompts(){
  optionsArray = []; //These are the if statement tha provide feedback to the user. I also provided exampples in order to guide the user

    characterLength = parseInt(prompt("Select between (8 and 128) characters want your password to be?")); // this is were we set the perameters selectons

    if (isNaN (characterLength) || characterLength < 8 || characterLength > 128) { 
      alert("Character length has to be betwen (8 to 128) digits. Please try again!!.");
      return false; 
    }
//Added a more personal note by providing example
 if (confirm("Would you like lowercase letters such as: (abcdef) in your password")) {
  optionsArray = optionsArray.concat(lowerCase);
 } 
//Added a more personal note by providing example
 if (confirm("Would you like Uppercase letters such as:(ABCDEF) in your password")) {
  optionsArray = optionsArray.concat(upperCase);
 } 
//Added a more personal note by providing example
 if (confirm("Would you like numbers such as: (12345) in your password")) {
  optionsArray = optionsArray.concat(numbers);
 } 
//Added a more personal note by providing example
 if (confirm("Would you like special characters such as: (!@#$%^) in your password")) {
  optionsArray = optionsArray.concat(specialCharacter);
 }    

 return true;
}

// On the css I changed the color of the body and the cars



