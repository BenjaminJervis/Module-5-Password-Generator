// Array of special characters to be included in password
var inputSpecial = [
  '@',
  '%',
  '+',
  '\\',
  '/',
  "'",
  '!',
  '#',
  '$',
  '^',
  '?',
  ':',
  ',',
  ')',
  '(',
  '}',
  '{',
  ']',
  '[',
  '~',
  '-',
  '_',
  '.'
];
// Array of numeric characters to be included in password
var inputNumber = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];
// Array of lowercase characters to be included in password
var inputLower = [
  'a',
  'b',
  'c',
  'd',
  'e',
  'f',
  'g',
  'h',
  'i',
  'j',
  'k',
  'l',
  'm',
  'n',
  'o',
  'p',
  'q',
  'r',
  's',
  't',
  'u',
  'v',
  'w',
  'x',
  'y',
  'z'
];
// Array of uppercase characters to be included in password
var inputUpper = [
  'A',
  'B',
  'C',
  'D',
  'E',
  'F',
  'G',
  'H',
  'I',
  'J',
  'K',
  'L',
  'M',
  'N',
  'O',
  'P',
  'Q',
  'R',
  'S',
  'T',
  'U',
  'V',
  'W',
  'X',
  'Y',
  'Z'
];


//I have created a new variable here as an empty array to store the choices the user inputs to make a new user password 
var newUserPassword = [];

var password = "";

//---User choices - This section gives the user different options to choose a password ---//

//User choices - This allows the user to chose different options using prompts and if statements

// Function to prompt user for password options

var passWordLength; //variable to store password length

//Global scope variable used here 
// I have used parseInt to parse a string and return a interger 

function getPasswordOptions() {
passWordLength =  parseInt(prompt("Please choose a password between 10 and 64 characters long"));

 
        
//If statement used to make sure the password is not less than 10 characters and greater than 64 characters 
     if (passWordLength < 10 || passWordLength >64 ) {
      alert ("please choose between 10 and 64 characters")
      return getPasswordOptions(); 
       }
    var Upper = confirm ("Please click ok to add a upper case letter."); 
    var Lower = confirm ("Please click ok to add a lower case letter."); 
    var Number= confirm ("Please click ok to add number between 0-9"); 
    var Special = confirm ("Please click ok to add a special character"); 
    
//Here I have used a condition. I have used an If statement to say if the user enters correctly then add value to new password variable above 

    if (Number) {   
        (newUserPassword = newUserPassword.concat(inputNumber)); //Here I have used a condition. I have used an If statement to say if the user enters correctly then add value to new password variable above
     }
      if (Special) {
         (newUserPassword = newUserPassword.concat(inputSpecial)); //Here I have used a condition. I have used an If statement to say if the user enters correctly then add value to new password variable above
      }
     if (Upper) {
         (newUserPassword = newUserPassword.concat(inputUpper));
      }
     if (Lower) {
         (newUserPassword = newUserPassword.concat(inputLower));
      }
console.log (newUserPassword)
}

//Function to get the password options 

var chooseRandom = function () {
  return newUserPassword[Math.floor(Math.random() * newUserPassword.length)]
   
}
// Function to generate password with user input
function generatePassword() {
getPasswordOptions()
for (var i=0; i<passWordLength; i++) {
  password+=chooseRandom()
}

}

// Get references to the #generate element
var generateBtn = document.querySelector('#generate');

// Write password to the #password input
function writePassword() {
  generatePassword();
  var passwordText = document.querySelector('#password');

  passwordText.value = password;
}

// Add event listener to generate button
generateBtn.addEventListener('click', writePassword);

// I have commented these console logs out after testing 
//console.log(password);        
// console.log(passWordLength);
// console.log(Upper);
// console.log(Lower);
// console.log(Number);
// console.log(special);
// console.log(newUserPassWord);

