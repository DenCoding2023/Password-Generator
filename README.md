Password Generator Program

# Descriptions:
It’s a password generator program that gives the user options of how to create their password more securely. The user will have several prompts to provide different levels of security. The password will be displayed at the end. 

## Table of Content
1. Front display screen with instructions on how to use the Password Generator.
2. Generate Password button will activate the (Password Generator) the user will be prompted with options. 


## Section II
1. Prompt for the user to select between 8 to 128 characters for the password.
2. Options to have Lowercase letters in the password.
3. Options to have Uppercase letters in the password.
4. Options to select numbers in the password.
5. Options to select Special Characters.
6. The Password Generator will display the password that was randomly created. 


## Usage
The programs give the user several options to create a password of the size and security. The password will be displayed at the end.

## Credits

Used as references:
* This was adapted from a post by Daniel Vaga 2020. https://youtu.be/v2jfGo7ztm8

* This was adapted from a post by Owais Islam Aug 16, 2020.
https://github.com/OwaisIslam/password-generator/blob/master/assets/js/script.js

## License
MIT license through the use of GITHUB.

## Screenshot
![Alt text](assest/images/Screenshot%202023-04-06%20234405.png)

## Acceptance Criteria

```
GIVEN I need a new, secure password
WHEN I click the button to generate a password
THEN I am presented with a series of prompts for password criteria
WHEN prompted for password criteria
THEN I select which criteria to include in the password
WHEN prompted for the length of the password
THEN I choose a length of at least 8 characters and no more than 128 characters
WHEN asked for character types to include in the password
THEN I confirm whether or not to include lowercase, uppercase, numeric, and/or special characters
WHEN I answer each prompt
THEN my input should be validated and at least one character type should be selected
WHEN all prompts are answered
THEN a password is generated that matches the selected criteria
WHEN the password is generated
THEN the password is either displayed in an alert or written to the page
